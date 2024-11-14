import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Socialbutton() {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // response.credential contains the ID token
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  return (
    <div
      style={{ padding: "20px", textAlign: "center" }}
      className="flex flex-col gap-5"
    >
      <div>
        <h1>React Google OAuth Example</h1>
      </div>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "200px", height: "40px" }}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          </div>
        </div>
      </GoogleOAuthProvider>

      <h1>Google OAuth with Express</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
