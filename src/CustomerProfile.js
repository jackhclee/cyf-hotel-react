import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    <div>
      {profile && (
        <div>
          <h1>Customer {props.id} Profile</h1>
          Customer Profile details goes here
          <ul>
            <li>Email: {profile.email}</li>
            <li>Phone No: {profile.phoneNumber}</li>
            <li>VIP: {profile.vip + ""}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerProfile;
