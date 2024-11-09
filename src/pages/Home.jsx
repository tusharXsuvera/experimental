import React, { useState } from "react";

export default function Home() {
  const [notificationSupported, setNotificationSupported] = useState(
    "Notification" in window
  );
  const showNotification = () => {
    if (notificationSupported) {
      // Request permission to show notifications
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hello, this is a push notification!");
        }
      });
    } else {
      alert("Your browser does not support notifications");
    }
  };

  return (
    <>
      <div className="para_div">
        <p className="para">Click on the Vite and React logos to learn more</p>
      </div>
      <div className="container">
        <div className="left_item ">
          <div className="item">item 1</div>
          <div className="item">item 2</div>
          <div className="item">item 3</div>
          <div className="item">item 4</div>
        </div>
        <div className="left_item">All item </div>
      </div>
      <hr />
      <div className="container2">
        <div className="item">
          Quality You Can Trust: We source our meats from trusted local farms
          that prioritize animal welfare and sustainable practices. Freshness
          Guaranteed: Our products are processed and packaged with care,
          ensuring you receive only the freshest cuts. Variety for Every Taste:
          From grass-fed eggs, fish, and organic chicken to specialty meats and
          seasonal selections, our diverse range caters to every palate.
        </div>
        <div className="item">item 2</div>
        <div className="item">item 3</div>
      </div>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <div>
        <h1>React Push Notifications Example</h1>
        <button onClick={showNotification}>Show Push Notification</button>
      </div>
    </>
  );
}
