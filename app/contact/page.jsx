"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (469) 269-8726",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kevanmehta2511@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "7815 McCallum Blvd, Dallas, TX, 75252",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    };

    // First Name validation
    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s-]{2,}$/.test(formData.firstname)) {
      newErrors.firstname = "Please enter a valid first name";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s-]{2,}$/.test(formData.lastname)) {
      newErrors.lastname = "Please enter a valid last name";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let's work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input 
                    name="firstname" 
                    value={formData.firstname} 
                    onChange={handleChange} 
                    placeholder="First Name"
                    className={errors.firstname ? "border-red-500" : ""}
                  />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                </div>
                <div>
                  <Input 
                    name="lastname" 
                    value={formData.lastname} 
                    onChange={handleChange} 
                    placeholder="Last Name"
                    className={errors.lastname ? "border-red-500" : ""}
                  />
                  {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                </div>
                <div>
                  <Input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <Select onValueChange={(value) => {
                  setFormData({ ...formData, service: value });
                  setErrors({ ...errors, service: "" });
                }}>
                  <SelectTrigger className={`w-full ${errors.service ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>
                        <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                        <SelectItem value="Performance Optimization">Performance Optimization</SelectItem>
                        <SelectItem value="Machine Learning Solutions">
                          Machine Learning Solutions
                        </SelectItem>
                        <SelectItem value="Cloud Deployment & DevOps Automation">
                          Cloud Deployment & DevOps Automation
                        </SelectItem>
                      </SelectLabel>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`h-[200px] ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Type your message here."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;