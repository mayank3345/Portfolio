"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTag,
  FaPaperPlane,
} from "react-icons/fa";

import { MdMessage } from "react-icons/md";

export default function ContactForm() {
  const theme = useSelector((state) => state.theme.darkMode);
  const contactEndpoint =
    process.env.NEXT_PUBLIC_CONTACT_FORM || "https://formspree.io/f/mzbnkqkr";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      console.log(contactEndpoint);
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className={`py-20 transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-900/40 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Contact Form
          </span>

          <h2
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Send Me a Message
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${
              theme ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project, job opportunity, or collaboration in mind? Fill out
            the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`mt-14 rounded-3xl p-8 shadow-lg transition-colors duration-300 ${
            theme ? "bg-slate-900" : "bg-white"
          }`}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}

            <InputField
              theme={theme}
              icon={<FaUser />}
              label="Full Name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              handleChange={handleChange}
              required
            />

            {/* Email */}

            <InputField
              theme={theme}
              icon={<FaEnvelope />}
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              handleChange={handleChange}
              required
            />

            {/* Phone */}

            <InputField
              theme={theme}
              icon={<FaPhone />}
              label="Phone (Optional)"
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              handleChange={handleChange}
            />

            {/* Subject */}

            <InputField
              theme={theme}
              icon={<FaTag />}
              label="Subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              handleChange={handleChange}
              required
            />
          </div>

          {/* Message */}

          <div className="mt-6">
            <label
              className={`mb-2 block font-medium ${
                theme ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Message
            </label>

            <div className="relative">
              <MdMessage
                className="
absolute
left-4
top-5
text-xl
text-slate-400
"
              />

              <textarea
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`w-full rounded-xl border py-3 pl-12 pr-4 outline-none transition ${
                  theme
                    ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
                    : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>
          </div>

          {/* Status */}

          {status === "success" && (
            <div
              className={`mt-6 rounded-xl border p-4 ${
                theme
                  ? "border-green-800 bg-green-900/20 text-green-400"
                  : "border-green-200 bg-green-50 text-green-700"
              }`}
            >
              ✅ Thank you! Your message has been sent successfully. I'll get
              back to you soon.
            </div>
          )}

          {status === "error" && (
            <div
              className={`mt-6 rounded-xl border p-4 ${
                theme
                  ? "border-red-800 bg-red-900/20 text-red-400"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              ❌ Something went wrong. Please try again later.
            </div>
          )}

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="
mt-8
inline-flex
items-center
rounded-xl
bg-blue-600
px-8
py-3
font-semibold
text-white
transition
hover:bg-blue-700
disabled:cursor-not-allowed
disabled:opacity-70
"
          >
            <FaPaperPlane className="mr-2" />

            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

// Reusable Input Component

function InputField({
  theme,
  icon,
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  required = false,
}) {
  return (
    <div>
      <label
        className={`mb-2 block font-medium ${
          theme ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {label}
      </label>

      <div className="relative">
        <span
          className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"
        >
          {icon}
        </span>

        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full rounded-xl border py-3 pl-12 pr-4 outline-none transition ${
            theme
              ? "border-slate-700 bg-slate-800 text-white placeholder:text-slate-500"
              : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
          }`}
        />
      </div>
    </div>
  );
}
