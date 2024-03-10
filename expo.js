// Mock implementation of fetchUserInfoFromBackend function
function fetchUserInfoFromBackend(userId) {
    // Mock user data for demonstration
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
      // Add more user properties as needed
    };
  
    // Simulate an asynchronous operation (e.g., fetching from a backend API)
    return new Promise((resolve, reject) => {
      // Simulate delay to mimic asynchronous operation
      setTimeout(() => {
        resolve(userData); // Resolve with user data
      }, 1000); // Simulate a delay of 1 second
    });
  }
  
  // Export the function to make it accessible
  
  module.exports.fetchUserInfoFromBackend = fetchUserInfoFromBackend
  