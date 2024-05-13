import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4 lg:px-0">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-lg lg:text-xl font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-96 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg lg:text-xl font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-96 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg lg:text-xl font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
