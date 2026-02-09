import React from 'react';

const ControlTable = ({ controls, onEdit, onDelete }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Domain</th>
            <th>TSC</th>
            <th>Control ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Evidence</th>
            <th>Gap</th>
            <th>Remediation Plan</th>
            <th>Owner</th>
            <th>Target Date</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {controls.length === 0 ? (
            <tr>
              <td colSpan="12" style={{ textAlign: 'center' }}>No controls found.</td>
            </tr>
          ) : (
            controls.map((control) => (
              <tr key={control.id}>
                <td>{control.domain}</td>
                <td>{control.trustServiceCriteria}</td>
                <td>{control.controlID}</td>
                <td>{control.controlDescription}</td>
                <td>{control.currentStatus}</td>
                <td>{control.evidenceAvailable ? 'Yes' : 'No'}</td>
                <td style={{ color: control.gapIdentified ? 'red' : 'green', fontWeight: 'bold' }}>
                  {control.gapIdentified ? 'Yes' : 'No'}
                </td>
                <td>{control.remediationPlan}</td>
                <td>{control.responsibleOwner}</td>
                <td>{control.targetDate ? new Date(control.targetDate).toLocaleDateString() : 'N/A'}</td>
                <td>{control.notes}</td>
                <td>
                  <button onClick={() => onEdit(control)}>Edit</button>
                  <button onClick={() => onDelete(control.id)} style={{ marginLeft: '5px', backgroundColor: 'salmon' }}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ControlTable;