import React, { useState } from 'react';

function ProfileForm() {
  const [profilePicture, setProfilePicture] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [languagesSpoken, setLanguagesSpoken] = useState([]);
  const [hasCar, setHasCar] = useState(false);

  const handleLanguageChange = (e) => {
    const selectedLanguages = Array.from(e.target.selectedOptions, option => option.value);
    setLanguagesSpoken(selectedLanguages);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", {
      profilePicture,
      address,
      phoneNumber,
      gender,
      bio,
      languagesSpoken,
      hasCar
    });
  }

  return (
    <div className="flex justify-center bg-cyan-700 p-36">
      <form onSubmit={handleSubmit} className="w-full px-6 py-8 mt-10 mb-11 bg-cyan-300 rounded-lg shadow-lg">
        <p className="text-center text-lg font-medium text-cyan-700 mb-16 shadow-sm underline animate-fade-in">Complete Profile</p>

        <label className="block text-black">
          Add Profile Picture:
          <input type="file" onChange={(e) => setProfilePicture(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm" />
        </label>
        <br />
        <label className="block text-black">
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm" />
        </label>
        <br />
        <label className="block text-black">
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm" placeholder="Phone Number (e.g., +250782387280)" />
        </label>
        <br />
        <label className="block text-black">
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label className="block text-black">
          Add Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm"></textarea>
        </label>
        <br />
        <label className="block text-black">
          Languages Spoken:
          <select multiple value={languagesSpoken} onChange={handleLanguageChange} className="w-full rounded-lg border-gray-200 bg-cyan-200 text-black p-4 text-sm shadow-sm">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">Swahili</option>
            {/* Add more languages as needed */}
          </select>
        </label>
        <br />
        <label className="block text-black">
          Do you own a car?
          <input type="checkbox" checked={hasCar} onChange={(e) => setHasCar(e.target.checked)} />
        </label>
        <br />
        <button type="submit" className="w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-black mb-4">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
