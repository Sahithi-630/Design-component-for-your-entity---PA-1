// write the component code here
import React from "react";

const Usercard = () => {
  const profilePhoto = "https://media.istockphoto.com/id/1417674634/photo/alone-woman-sitting-watching-the-sunset-sunrise.jpg?s=612x612&w=0&k=20&c=O2YDHEsjwdMk3n23LEDgKzmwbKHYV65Mt8Ly20ZizMo="; 
  const name = "Sahithi";
  const email = "Sahithi@gmail.com";
  const phone = "9876543210";
  const address = "1/251 ,Tadipatri, Ap, India";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">{email}</p>
      <p className="usercard-phone">{phone}</p>
      <p className="usercard-address">{address}</p>
    </div>
  );
};

export default Usercard;

