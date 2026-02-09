using Microsoft.AspNetCore.Mvc;
using Soc2GapAnalysisApi.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Soc2GapAnalysisApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ControlsController : ControllerBase
    {
        private static List<Control> _controls = new List<Control>
        {
            new Control {
                Domain = "Security", TrustServiceCriteria = "Common Criteria", ControlID = "CC1.1", ControlDescription = "The entity demonstrates a commitment to integrity and ethical values.",
                CurrentStatus = "No", EvidenceAvailable = false, GapIdentified = true, RemediationPlan = "Develop and formalize a Code of Conduct.", ResponsibleOwner = "HR/Legal", TargetDate = DateTime.Now.AddMonths(1), Notes = "Initial assessment shows no formal documentation."
            },
            new Control {
                Domain = "Security", TrustServiceCriteria = "Common Criteria", ControlID = "CC1.2", ControlDescription = "The board of directors demonstrates independence from management and exercises oversight of internal controls.",
                CurrentStatus = "Yes", EvidenceAvailable = true, GapIdentified = false, RemediationPlan = "", ResponsibleOwner = "", TargetDate = null, Notes = "Board charter in place, independent directors documented."
            },
            new Control {
                Domain = "Availability", TrustServiceCriteria = "Additional Criteria for Availability", ControlID = "A1.1", ControlDescription = "The entity maintains and implements procedures to meet its objectives related to availability.",
                CurrentStatus = "No", EvidenceAvailable = false, GapIdentified = true, RemediationPlan = "Draft and implement a Disaster Recovery Plan.", ResponsibleOwner = "IT Operations", TargetDate = DateTime.Now.AddMonths(3), Notes = "No formal DRP in place."
            }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Control>> GetControls() => Ok(_controls);

        [HttpGet("{id}")]
        public ActionResult<Control> GetControl(Guid id)
        {
            var control = _controls.FirstOrDefault(c => c.Id == id);
            return control == null ? NotFound() : Ok(control);
        }

        [HttpPost]
        public ActionResult<Control> CreateControl(Control control)
        {
            control.Id = Guid.NewGuid();
            control.GapIdentified = control.CurrentStatus == "No" || !control.EvidenceAvailable;
            _controls.Add(control);
            return CreatedAtAction(nameof(GetControl), new { id = control.Id }, control);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateControl(Guid id, Control updatedControl)
        {
            if (id != updatedControl.Id) return BadRequest();
            var existingControl = _controls.FirstOrDefault(c => c.Id == id);
            if (existingControl == null) return NotFound();

            existingControl.Domain = updatedControl.Domain;
            existingControl.TrustServiceCriteria = updatedControl.TrustServiceCriteria;
            existingControl.ControlID = updatedControl.ControlID;
            existingControl.ControlDescription = updatedControl.ControlDescription;
            existingControl.CurrentStatus = updatedControl.CurrentStatus;
            existingControl.EvidenceAvailable = updatedControl.EvidenceAvailable;
            existingControl.GapIdentified = updatedControl.CurrentStatus == "No" || !updatedControl.EvidenceAvailable;
            existingControl.RemediationPlan = updatedControl.RemediationPlan;
            existingControl.ResponsibleOwner = updatedControl.ResponsibleOwner;
            existingControl.TargetDate = updatedControl.TargetDate;
            existingControl.Notes = updatedControl.Notes;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteControl(Guid id)
        {
            var controlToRemove = _controls.FirstOrDefault(c => c.Id == id);
            if (controlToRemove == null) return NotFound();
            _controls.Remove(controlToRemove);
            return NoContent();
        }
    }
}