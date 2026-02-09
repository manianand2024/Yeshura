import { useState, useEffect } from 'react';

const AddEditControlForm = ({ controlToEdit, onSave, onCancel }) => {
  const initialControlState = {
    id: '',
    domain: '',
    trustServiceCriteria: '',
    controlID: '',
    controlDescription: '',
    currentStatus: 'No', // Default to 'No'
    evidenceAvailable: false, // Default to false
    gapIdentified: false,
    remediationPlan: '',
    responsibleOwner: '',
    targetDate: '', // Will be a string in YYYY-MM-DD format
    notes: '',
  };

  const [control, setControl] = useState(initialControlState);

  // Effect to populate the form when a controlToEdit is provided
  useEffect(() => {
    if (controlToEdit) {
      setControl({
        ...controlToEdit,
        // Format targetDate for the input type="date"
        targetDate: controlToEdit.targetDate ? new Date(controlToEdit.targetDate).toISOString().split('T')[0] : '',
      });
    } else {
      // Reset form if no controlToEdit (e.g., for adding a new control)
      setControl(initialControlState);
    }
  }, [controlToEdit]); // Re-run effect when controlToEdit changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    // Special handling for status and evidence to auto-calculate gapIdentified
    if (name === 'currentStatus' || name === 'evidenceAvailable') {
      setControl((prev) => {
        const updatedControl = { ...prev, [name]: newValue };
        // Gap is identified if status is 'No' OR evidence is not available
        updatedControl.gapIdentified = updatedControl.currentStatus === 'No' || !updatedControl.evidenceAvailable;
        return updatedControl;
      });
    } else {
      setControl((prev) => ({ ...prev, [name]: newValue }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(control); // Call the onSave prop with the current control data
    setControl(initialControlState); // Reset form after saving
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>{controlToEdit ? 'Edit Control' : 'Add New Control'}</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Domain:</label>
          <input type="text" name="domain" value={control.domain} onChange={handleChange} required
                 style={{ width: 'calc(100% - 100px)', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Trust Service Criteria:</label>
          <input type="text" name="trustServiceCriteria" value={control.trustServiceCriteria} onChange={handleChange} required
                 style={{ width: 'calc(100% - 100px)', padding: '8px' }} />
        </div>
<div style={{ marginBottom: '10px' }}>
  <label>Control ID:</label>
  <input type="text" name="controlID" value={control.controlID} onChange={handleChange} required
         style={{ width: 'calc(100% - 100px)', padding: '8px' }} />
</div>
<div style={{ marginBottom: '10px' }}>
  <label>Control Description:</label>
  <textarea name="controlDescription" value={control.controlDescription} onChange={handleChange} required rows="3"
            style={{ width: 'calc(100% - 100px)', padding: '8px' }} />
</div>
                {/* Add other form fields here if needed */}
                <div style={{ marginTop: '20px' }}>
                  <button type="submit" style={{ marginRight: '10px' }}>
                    {controlToEdit ? 'Update Control' : 'Add Control'}
                  </button>
                  <button type="button" onClick={onCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          );
        };
        
        export default AddEditControlForm;