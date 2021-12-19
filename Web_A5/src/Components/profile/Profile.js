import React from 'react';
import Navbar from '../homepage/navbar';

const Profile = () => {
  return (
    <div
      style={{
        backgroundColor: '#6a8296',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
    >
      <Navbar />
      <form>
        <label>First Name</label>
        <input type='text' name='first-name' placeholder='First Name' />
        <label>Last Name</label>
        <input type='text' name='first-name' placeholder='First Name' />
        <label>Date of Birth</label>
        <input type='date' name='first-name' placeholder='First Name' />
      </form>
    </div>
  );
};

export default Profile;
