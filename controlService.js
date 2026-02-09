import axios from 'axios';

// Set your backend API base URL here.
// Make sure this matches the URL your ASP.NET Core backend is running on.
// In development, this is typically https://localhost:7061 (or another port).
const API_BASE_URL = 'https://localhost:7061/api/Controls';

const controlService = {
  // Get all controls
  getAllControls: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching controls:", error);
      throw error; // Re-throw to be handled by the component
    }
  },

  // Get a single control by ID
  getControlById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching control with ID ${id}:`, error);
      throw error;
    }
  },

  // Create a new control
  createControl: async (control) => {
    try {
      const response = await axios.post(API_BASE_URL, control);
      return response.data;
    } catch (error) {
      console.error("Error creating control:", error);
      throw error;
    }
  },

  // Update an existing control
  updateControl: async (id, control) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, control);
      return response.data;
    } catch (error) {
      console.error(`Error updating control with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete a control
  deleteControl: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      return { success: true, message: `Control with ID ${id} deleted.` };
    } catch (error) {
      console.error(`Error deleting control with ID ${id}:`, error);
      throw error;
    }
  }
};

export default controlService;