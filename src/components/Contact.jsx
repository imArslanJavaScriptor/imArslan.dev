import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Mail, MapPin } from "lucide-react";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().min(10, "Message too short").required("Required"),
    }),

     onSubmit: async (values, { resetForm }) => {
    try {
      setFormStatus("sending");

      const templateParams = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      };

      await emailjs.send(
        "service_asvbwpr",     // Service ID
        "template_53yhwb8",    // Template ID
        templateParams,
        "xoCpkf7P-viXCCmdL"    // Public Key
      );

      setFormStatus("success");
      resetForm();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("error");
    }
  },
  });

  return (
    <section id="contact" className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Text Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Looking for a new opportunity or want to say hi? I’m open to
              exciting projects and conversations. Let’s connect!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  imArslan7061@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6 animate-fade-in-right"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstName")}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#222] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none "
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastName")}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#222] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                {...formik.getFieldProps("email")}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#222] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                {...formik.getFieldProps("message")}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#222] border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>

            {formStatus === "success" && (
              <p className="text-green-600 text-center animate-fade-in">
                ✅ Message sent successfully!
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 text-center animate-fade-in">
                ❌ Something went wrong. Try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;