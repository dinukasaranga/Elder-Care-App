import React, { useState } from 'react';
import './configuration.scss';

function Form() {
  const [formData, setFormData] = useState({
    platformAccessMode: '',
    serverIP: '',
    registerStatus: '',
    verificationCode: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='formContainer '>
    <form className="ConnectForm" onSubmit={handleSubmit}>
      <h2>Connect</h2>
      <div className="form-group">
        <label htmlFor="platformAccessMode">Platform Access Mode</label>
        <select
          id="platformAccessMode"
          name="platformAccessMode"
          value={formData.platformAccessMode}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Hik-Connect">Hik-Connect</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="serverIP">Server IP</label>
        <input
          type="text"
          id="serverIP"
          name="serverIP"
          value={formData.serverIP}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="registerStatus">Register Status</label>
        <input
          type="text"
          id="registerStatus"
          name="registerStatus"
          value={formData.registerStatus}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="verificationCode">Verification Code</label>
        <input
          type="text"
          id="verificationCode"
          name="verificationCode"
          value={formData.verificationCode}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
  );
}

export default Form;
