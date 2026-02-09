import React, { useState, useEffect } from 'react';
// controlService import is kept for future backend integration, but won't be used for initial load
// import controlService from './api/controlService';
import ControlTable from './components/ControlTable';
import AddEditControlForm from './components/AddEditControlForm';
import './App.css';

function App() {
  // Hardcoded data from your latest image
  const initialHardcodedControls = [
    {
      id: '1', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC1.1',
      controlDescription: 'The entity demonstrates a commitment to integrity and ethical values.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '2', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC1.2',
      controlDescription: 'The board of directors demonstrates independence from management and exercises oversight of internal control.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '3', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC1.3',
      controlDescription: 'Management establishes, with board oversight, structures, reporting lines, and appropriate authorities and responsibilities in pursuit of objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '4', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC1.4',
      controlDescription: 'The entity demonstrates a commitment to attract, develop, and retain competent individuals in alignment with objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '5', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC1.5',
      controlDescription: 'The entity holds individuals accountable for their internal control responsibilities in pursuit of objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '6', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC2.1',
      controlDescription: 'The entity specifies objectives with sufficient clarity to enable the identification and assessment of risks relating to objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '7', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC3.1',
      controlDescription: 'The entity identifies and assesses risks to the achievement of its objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '8', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC3.2',
      controlDescription: 'The entity identifies and assesses changes that could significantly impact the system of internal control.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '9', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC3.3',
      controlDescription: 'The entity considers the potential for fraud in assessing risks to the achievement of objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '10', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC3.4',
      controlDescription: 'The entity identifies and assesses risks arising from business partners.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '11', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC3.5',
      controlDescription: 'The entity identifies and assesses risks from external threats.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '12', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC4.1',
      controlDescription: 'The entity selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '13', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC4.2',
      controlDescription: 'The entity deploys control activities through policies and procedures.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '14', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC5.1',
      controlDescription: 'The entity obtains or generates and uses relevant, quality information to support the functioning of internal control.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '15', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC6.1',
      controlDescription: 'The entity internally communicates information necessary to support internal control.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '16', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC6.2',
      controlDescription: 'The entity communicates with external parties regarding matters affecting the functioning of internal control.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '17', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC6.3',
      controlDescription: 'The entity monitors the system of internal control.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '18', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC7.1',
      controlDescription: 'The entity evaluates and communicates internal control deficiencies in a timely manner to those parties responsible for taking corrective action.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '19', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC8.1',
      controlDescription: 'The entity implements logical access security.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '20', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC9.1',
      controlDescription: 'The entity restricts physical access.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '21', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC10.1',
      controlDescription: 'The entity designs and implements procedures to protect against system failures.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '22', domain: 'Security', trustServiceCriteria: 'Common Criteria', controlID: 'CC11.1',
      controlDescription: 'The entity identifies and mitigates vulnerabilities.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '23', domain: 'Availability', trustServiceCriteria: 'Availability Criteria', controlID: 'A1.1',
      controlDescription: 'The entity maintains and implements procedures to meet its objectives related to availability.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '24', domain: 'Availability', trustServiceCriteria: 'Availability Criteria', controlID: 'A1.2',
      controlDescription: 'The entity monitors system components to detect anomalies and incidents.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '25', domain: 'Processing Integrity', trustServiceCriteria: 'Processing Integrity Criteria', controlID: 'PI1.1',
      controlDescription: 'The entity defines processing integrity objectives.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '26', domain: 'Processing Integrity', trustServiceCriteria: 'Processing Integrity Criteria', controlID: 'PI1.2',
      controlDescription: 'The entity implements controls to prevent or detect processing errors.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '27', domain: 'Confidentiality', trustServiceCriteria: 'Confidentiality Criteria', controlID: 'C1.1',
      controlDescription: 'The entity identifies and maintains confidential information.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '28', domain: 'Confidentiality', trustServiceCriteria: 'Confidentiality Criteria', controlID: 'C1.2',
      controlDescription: 'The entity disposes of confidential information.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '29', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P1.1',
      controlDescription: 'The entity provides notice to data subjects about its privacy practices.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '30', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P2.1',
      controlDescription: 'The entity communicates choices regarding the collection, use, and disclosure of personal information.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '31', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P3.1',
      controlDescription: 'The entity collects personal information with consent and for disclosed purposes.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '32', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P4.1',
      controlDescription: 'The entity limits use and retention of personal information.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '33', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P5.1',
      controlDescription: 'The entity ensures personal information is accurate and complete.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '34', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P6.1',
      controlDescription: 'The entity implements safeguards to protect personal information.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '35', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P7.1',
      controlDescription: 'The entity provides individuals with access and correction rights.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    },
    {
      id: '36', domain: 'Privacy', trustServiceCriteria: 'Privacy Criteria', controlID: 'P8.1',
      controlDescription: 'The entity monitors compliance with its privacy policies.',
      currentStatus: 'No', evidenceAvailable: false, gapIdentified: true, remediationPlan: '', responsibleOwner: '', targetDate: '', notes: ''
    }
  ];

  const [controls, setControls] = useState(initialHardcodedControls);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingControl, setEditingControl] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // The useEffect to fetch data from API is commented out as we are using hardcoded data
  /*
  useEffect(() => {
    fetchControls();
  }, []);

  const fetchControls = async () => {
    try {
      setLoading(true);
      const data = await controlService.getAllControls();
      setControls(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch controls. Please check if the backend API is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  */

  // --- LOCAL STATE MANAGEMENT FOR HARDCODED DATA ---
  // These functions will only update the data in the browser's memory, not permanently.

  const handleSaveControl = (controlData) => {
    setControls(prevControls => {
      if (controlData.id) {
        // Update existing control
        return prevControls.map(c => c.id === controlData.id ? { ...controlData, gapIdentified: controlData.currentStatus === 'No' || !controlData.evidenceAvailable } : c);
      } else {
        // Add new control with a simple unique ID (for hardcoded scenario)
        const newId = (Math.max(...prevControls.map(c => parseInt(c.id))) + 1).toString(); // Ensure IDs are numbers for max()
        return [...prevControls, { ...controlData, id: newId, gapIdentified: controlData.currentStatus === 'No' || !controlData.evidenceAvailable }];
      }
    });
    setEditingControl(null);
    setShowForm(false);
    alert('Control saved locally (not persisted to backend)!'); // Inform the user
  };

  const handleDeleteControl = (id) => {
    if (window.confirm('Are you sure you want to delete this control locally?')) {
      setControls(prevControls => prevControls.filter(c => c.id !== id));
      alert('Control deleted locally (not persisted to backend)!'); // Inform the user
    }
  };

  // --- REST OF THE CODE REMAINS THE SAME ---

  const handleEditControl = (control) => {
    setEditingControl(control);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingControl(null);
    setShowForm(false);
  };

  const handleShowAddForm = () => {
    setEditingControl(null);
    setShowForm(true);
  };

  return (
    <div className="App">
      <h1>SOC 2 Gap Analysis</h1>

      {error && <div style={{ color: 'red', marginBottom: '20px' }}>Error: {error}</div>}

      <button
        onClick={handleShowAddForm}
      >
        Add New Control
      </button>

      {showForm && (
        <AddEditControlForm
          controlToEdit={editingControl}
          onSave={handleSaveControl}
          onCancel={handleCancelEdit}
        />
      )}

      <h2>Existing Controls</h2>
      {loading ? (
        <p>Loading controls...</p>
      ) : (
        <ControlTable
          controls={controls}
          onEdit={handleEditControl}
          onDelete={handleDeleteControl}
        />
      )}
    </div>
  );
}

export default App;