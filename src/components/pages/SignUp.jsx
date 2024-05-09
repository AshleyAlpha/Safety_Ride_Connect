import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
//   const navigate = useNavigate();

  // State variables for form data and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing in the field
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional validation
    if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address.' });
      return;
    }

    if (!isValidPassword(formData.password)) {
      setErrors({ ...errors, password: 'Your password is not strong.' });
      return;
    }

    console.log('Form submitted:', formData);
    navigate(`/home`);
  };

  // Function to check email format
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Function to check password strength
  const isValidPassword = (password) => {
    // Password must be at least 8 characters long and contain at least one number
    const passwordRegex = /^(?=.*[0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="bg-cyan-700 border-black min-h-screen flex justify-center items-center p-36">
      <div className="bg-cyan-300 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-italic mb-4 text-black">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="border-2 rounded-lg text-black px-4 py-2 w-full bg-cyan-200 placeholder-pink-600::placeholder"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              
            />
          </div>
          <div className="mb-4">
            <input
              className="border-2 rounded-lg px-4 py-2 text-black w-full bg-cyan-200 placeholder-pink-600::placeholder"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              className="border-2 text-black rounded-lg px-4 py-2 w-full bg-cyan-200 placeholder-pink-600::placeholder"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-black font-italic py-2 px-4 rounded-lg w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
