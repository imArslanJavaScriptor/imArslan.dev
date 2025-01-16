import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits required).";
    }
    if (!formData.service) newErrors.service = "Service is required.";
    if (!formData.timeline) newErrors.timeline = "Timeline is required.";
    if (!formData.details) newErrors.details = "Project details are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "your_service_id", // Replace with your EmailJS Service ID
          "your_template_id", // Replace with your EmailJS Template ID
          formData,
          "your_public_key" // Replace with your EmailJS Public Key
        )
        .then(() => {
          setSuccess("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            timeline: "",
            details: "",
          });
        })
        .catch(() => {
          setSuccess("Failed to send the message. Try again later.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">Contact me</h2>
      <p className="text-gray-400 text-center text-lg mb-8">
        Cultivating Connections: Reach Out And Connect With Me
      </p>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Service */}
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
          >
            <option value="">Service Of Interest</option>
            <option value="Web Design">Web Design</option>
            <option value="App Development">App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
        </div>

        {/* Timeline */}
        <div>
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
          />
          {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
        </div>

        {/* Project Details */}
        <div className="md:col-span-2">
          <textarea
            name="details"
            placeholder="Project Details..."
            value={formData.details}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none"
            rows="4"
          ></textarea>
          {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-transparent text-white border border-gray-600 px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Send
          </button>
        </div>
      </form>

      {/* Success Message */}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default ContactForm;
