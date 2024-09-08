import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="hero bg-gradient-to-r from-green-600 via-green-500 to-green-400 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left text-white">
      <h1 className="text-5xl font-bold">Get in Touch!</h1>
      <p className="py-6">
        Have questions, feedback, or inquiries? We would love to hear from you! <br />
         Please fill out the form and we’ll get back to you as soon as possible.
      </p>
    </div>
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Your Message" className="textarea textarea-bordered" required></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default ContactUs;
