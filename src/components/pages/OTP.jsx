import React, { useState } from 'react';

const OTP = () => {
  const [formData, setFormData] = useState({
    otp: ''
  });

  const [errors, setErrors] = useState({
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clearing previous error if any
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can validate the OTP, and set errors if validation fails
    // For example:
    if (formData.otp.length !== 5) {
      setErrors({
        ...errors,
        otp: 'OTP must be 5 characters long'
      });
      return;
    }
    // Otherwise, proceed with the submission
    console.log('OTP submitted:', formData.otp);
  };

  return (
    <div className="bg-cyan-200 p-36">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="border-2 text-black rounded-lg px-4 py-2 w-full bg-cyan-500 placeholder-pink-600::placeholder"
            type="text"
            id="otp"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
          />
          {errors.otp && <p className="text-red-500">{errors.otp}</p>}
        </div>
        <button type="submit" className="w-full rounded-lg bg-cyan-700 px-5 py-3 text-sm font-medium text-black mb-4">
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTP;
