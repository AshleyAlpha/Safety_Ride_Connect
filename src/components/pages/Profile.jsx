import React, { useState } from 'react';

function ProfileForm() {
  const [profilePicture, setProfilePicture] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [languagesSpoken, setLanguagesSpoken] = useState('');
  const [bio, setBio] = useState('');
  const [hasCar, setHasCar] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePhoneNumber = (value) => {
    return /^\d+$/.test(value); // Check if value contains only numbers
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    
    // Validation checks
    if (!profilePicture) {
      errors.profilePicture = "Profile picture is required";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Phone number must contain only numbers";
    } else if (phoneNumber.length !== 12) {
      errors.phoneNumber = "Phone number must be 12 digits";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!bio) {
      errors.bio = "Bio is required";
    }
    if (languagesSpoken.length === 0) {
      errors.languagesSpoken = "At least one language must be selected";
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log("Form submitted with data:", {
        profilePicture,
        address,
        phoneNumber,
        gender,
        bio,
        languagesSpoken,
        hasCar
      });
    } else {
      // Update errors state with validation errors
      setErrors(errors);
    }
  };

  return (
    <div className="flex justify-center bg-cyan-700 p-36">
      <form onSubmit={handleSubmit} className="w-full px-6 py-8 mt-10 mb-11 bg-cyan-300 rounded-lg shadow-lg">
        <p className="text-center text-lg font-medium text-cyan-700 mb-16 shadow-sm underline animate-fade-in">Complete Profile</p>

        {/* Profile Picture */}
        <label className="block text-black">
          Add Profile Picture:
          <input type="file" onChange={(e) => setProfilePicture(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm" />
          {errors.profilePicture && <p className="text-red-500">{errors.profilePicture}</p>}
        </label>
        <br />

        {/* Address */}
        <label className="block text-black">
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm" />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </label>
        <br />

        {/* Phone Number */}
        <label className="block text-black">
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm" placeholder="Phone Number (e.g., +250782387280)" />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
        </label>
        <br />

        {/* Gender */}
        <label className="block text-black">
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </label>
        <br />

        {/* Bio */}
        <label className="block text-black">
          Add Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"></textarea>
          {errors.bio && <p className="text-red-500">{errors.bio}</p>}
        </label>
        <br />

        {/* Languages Spoken */}
        <label className="block text-black">
          Spoken Languages:
          <select value={languagesSpoken} onChange={(e) => setLanguagesSpoken(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm">
            <option value="">Select</option>
            <option value="male">English</option>
            <option value="female">French</option>
            <option value="other">Swahili</option>
            <option value="other">Spanish</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </label>
        <br />

       
{/* Car Ownership */}
<div className="flex justify-center items-center mb-4">
  <label className="block text-black mr-4">
    Do you own a car?
  </label>
  <div className="flex items-center">
    <label className="mr-4 cursor-pointer flex items-center">
      <input
        type="radio"
        name="carOwnership"
        value="yes"
        checked={hasCar}
        onChange={() => setHasCar(true)}
        className="hidden"
      />
      <div className={`w-6 h-6 border rounded-full border-black flex items-center justify-center focus-within:border-black ${hasCar ? 'bg-cyan-700' : ''}`}>
        <span className="sr-only">Yes</span>
      </div>
      <span className="ml-2 text-black">Yes</span>
    </label>
    <label className="cursor-pointer flex items-center">
      <input
        type="radio"
        name="carOwnership"
        value="no"
        checked={!hasCar}
        onChange={() => setHasCar(false)}
        className="hidden"
      />
      <div className={`w-6 h-6 border rounded-full border-black flex items-center justify-center focus-within:border-black ${!hasCar ? 'bg-cyan-700' : ''}`}>
        <span className="sr-only">No</span>
      </div>
      <span className="ml-2 text-black">No</span>
    </label>
  </div>
</div>

        <br />

        {/* Submit Button */}
        <button type="submit" className="w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-black mb-4">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
