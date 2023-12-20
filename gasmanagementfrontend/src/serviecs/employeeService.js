// services/employeeService.js
const API_URL = 'http://localhost:3001/api/employees';

export const getEmployees = async () => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Failed to fetch employees');
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};
