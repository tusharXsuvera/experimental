import React, { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";

const Notifications = () => {
  // Request permission to show notifications

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        // Get the FCM token
        const token = await getToken(messaging, {
          vapidKey:
            "BFvAxht7GRrP5Q2Rhbp1iU3QYWRctz4GQ-DG-nB6DGMTSODHbPJmY0O9b0q7IGI4UtCuHQMeU-MgL5lF5i7MKHY",
        });
        console.log("FCM Token:", token);
        // Here, you can send the token to your backend server if needed
      } else {
        console.log("Unable to get permission to notify.");
      }
    } catch (error) {
      console.error("Error requesting notification permission", error);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div>
      <h1>Firebase Push Notifications in React</h1>
    </div>
  );
};

export default Notifications;
