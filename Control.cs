namespace Soc2GapAnalysisApi.Models
{
    public class Control
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Domain { get; set; } = string.Empty;
        public string TrustServiceCriteria { get; set; } = string.Empty;
        public string ControlID { get; set; } = string.Empty;
        public string ControlDescription { get; set; } = string.Empty;
        public string CurrentStatus { get; set; } = "No";
        public bool EvidenceAvailable { get; set; } = false;
        public bool GapIdentified { get; set; } = false;
        public string RemediationPlan { get; set; } = string.Empty;
        public string ResponsibleOwner { get; set; } = string.Empty;
        public DateTime? TargetDate { get; set; }
        public string Notes { get; set; } = string.Empty;
    }
}