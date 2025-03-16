import { db } from "./firebaseAdmin.mjs";
import admin from 'firebase-admin';


// Example of userData
const userData = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  dob: "1994-05-15", // Store as a string or timestamp
  proofOfQualifications: "url-to-pdf-or-image",
  nationalIdPic: {
    url: "url-to-image",
    info: "National ID details here"
  },
  policeRecord: {
    url: "url-to-police-record-image-or-pdf",
    lastUpdated: admin.firestore.Timestamp.fromDate(new Date()) // Timestamp for when the police record was last updated
  },
  trn: "123456789",
  passportPic: "url-to-passport-size-image",
  resume: "url-to-resume-pdf"
};

// Function to add a new user
async function addUser(userId, userData) {
  try {
    await db.collection("users").doc(userId).set(userData);
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}

// Add user
addUser("user-id-123", userData);

// Function to get user data by userId
async function getUser(userId) {
    try {
      const userDoc = await db.collection("users").doc(userId).get();
      if (userDoc.exists) {
        console.log("User data:", userDoc.data());
        return userDoc.data();
      } else {
        console.log("No such user found");
      }
    } catch (error) {
      console.error("Error getting user: ", error);
    }
  }
  
  // Example usage
  getUser("user-id-123");

  // Function to update a user's data
async function updateUser(userId, updatedData) {
    try {
      await db.collection("users").doc(userId).update(updatedData);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  }
  
  // Example of updated data
  const updatedData = {
    age: 31, // Updated age
    policeRecord: {
      url: "new-url-to-police-record",
      lastUpdated: admin.firestore.Timestamp.fromDate(new Date()) // Update timestamp
    }
  };
  
  // Update user
  updateUser("user-id-123", updatedData);

  
  // Function to delete a user
async function deleteUser(userId) {
    try {
      await db.collection("users").doc(userId).delete();
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  }
  
  // Example usage
  deleteUser("user-id-123");
  