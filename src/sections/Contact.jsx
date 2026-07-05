import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";

// -----------------------------------------------------------------------------
// Same token system as the rest of the site:
//   bg base #0A0F0D · glass rgba(255,255,255,.03) · border rgba(255,255,255,.1)
//   accent lime #CDFB4E · text primary #F3F4EF · text muted #8B9691
// Success state reuses the lime accent; error state uses a muted coral
// (#F2836B) so it stays legible on dark without turning alarmist-bright red.
// -----------------------------------------------------------------------------

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is important";
    if (!formData.email.trim()) {
      newErrors.email = "Email is important";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is important";
    if (!formData.message.trim()) {
      newErrors.message = "Message is important";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "The message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const sendEmail = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.15) resolve({ success: true });
        else reject({ error: "Network error" });
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus({ type: "error", message: "Please fill in all the fields correctly." });
      return;
    }
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });
    try {
      await sendEmail();
      setFormStatus({ type: "success", message: "Your message is sent successfully! Wait for my response." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTimeout(() => setFormStatus({ type: "", message: "" }), 8000);
    } catch {
      setFormStatus({ type: "error", message: "Sorry, there was an issue sending the message. Please try again or email me directly." });
      setTimeout(() => setFormStatus({ type: "", message: "" }), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearFormStatus = () => setFormStatus({ type: "", message: "" });

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "yahyashafiq309@gmail.com", href: "mailto:yahyashafiq309@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "(+92) 3486787534", href: "tel:+923486787534" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Islamabad, Pakistan", href: "#" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-yahya-se25", color: "#0077B5", name: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/Engr-Yahya", color: "#E9EDE9", name: "GitHub" },
    { icon: FaInstagram, href: "https://instagram.com/yahya_butt.0", color: "#E4405F", name: "Instagram" },
    { icon: FaFacebook, href: "https://www.facebook.com/share/1A4ZuGougu/", color: "#1877F2", name: "Facebook" },
    { icon: FaDiscord, href: "https://discord.gg/yahyashafiq.", color: "#5865F2", name: "Discord" },
  ];

  const inputClasses = (hasError) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-[#F3F4EF] placeholder-[#5C655F] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#CDFB4E]/40 focus:border-[#CDFB4E]/50 ${
      hasError ? "border-[#F2836B]/50" : "border-white/10"
    }`;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-6 bg-[#0A0F0D] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-[440px] h-[440px] rounded-full bg-[#CDFB4E]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#CDFB4E] mb-3">
            Get In Touch
          </p>
          <h2 className="font-['Fraunces',serif] text-4xl md:text-5xl font-semibold text-[#F3F4EF] mb-4">
            Let's build something
          </h2>
          <p className="text-[#8B9691] max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, and creative collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#CDFB4E]/10 flex items-center justify-center flex-shrink-0">
                      <contact.icon className="text-[#CDFB4E]" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#8B9691] mb-1">
                        {contact.label}
                      </p>
                      {contact.href === "#" ? (
                        <p className="text-[#F3F4EF] font-medium">{contact.value}</p>
                      ) : (
                        <a
                          href={contact.href}
                          className="text-[#F3F4EF] hover:text-[#CDFB4E] transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10">
              <h3 className="text-lg font-semibold text-[#F3F4EF] mb-2">
                Connect with me
              </h3>
              <p className="text-[#8B9691] text-sm mb-5">
                Follow along for updates and behind-the-scenes work.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#B9C2BC] text-sm font-medium overflow-hidden"
                  >
                    <social.icon size={14} className="relative z-10 group-hover:text-[#0A0F0D] transition-colors duration-200" />
                    <span className="relative z-10 hidden sm:inline group-hover:text-[#0A0F0D] transition-colors duration-200">
                      {social.name}
                    </span>
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ backgroundColor: social.color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl p-8 bg-white/[0.03] border border-white/10"
          >
            <div className="mb-6">
              <h3 className="font-['Fraunces',serif] text-2xl font-semibold text-[#F3F4EF] mb-1.5">
                Send a message
              </h3>
              <p className="text-[#8B9691] text-sm">
                Ready to start a project? Let's talk through your idea.
              </p>
            </div>

            {formStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 border ${
                  formStatus.type === "success"
                    ? "bg-[#CDFB4E]/10 border-[#CDFB4E]/25 text-[#CDFB4E]"
                    : "bg-[#F2836B]/10 border-[#F2836B]/25 text-[#F2836B]"
                }`}
              >
                {formStatus.type === "success" ? (
                  <FaCheckCircle className="text-lg flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-lg flex-shrink-0" />
                )}
                <span className="text-sm font-medium flex-1">{formStatus.message}</span>
                <button onClick={clearFormStatus} className="p-1 rounded-full hover:bg-white/10 transition-colors">
                  <FaTimes className="text-sm" />
                </button>
              </motion.div>
            )}

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#B9C2BC] mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={inputClasses(errors.name)}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-[#F2836B] text-xs mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#B9C2BC] mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses(errors.email)}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-[#F2836B] text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#B9C2BC] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={inputClasses(errors.subject)}
                  placeholder="Project discussion / collaboration opportunity"
                />
                {errors.subject && <p className="text-[#F2836B] text-xs mt-1.5">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#B9C2BC] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`${inputClasses(errors.message)} resize-none`}
                  placeholder="Hi Yahya, I'd love to discuss a project with you. Here are the details..."
                />
                {errors.message && <p className="text-[#F2836B] text-xs mt-1.5">{errors.message}</p>}
              </div>

              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#CDFB4E] text-[#0A0F0D] font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-[#0A0F0D]/30 border-t-[#0A0F0D] rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={13} />
                    <span>Send message</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="relative rounded-3xl p-10 bg-white/[0.03] border border-[#CDFB4E]/20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[150px] rounded-full bg-[#CDFB4E]/10 blur-[80px]" />
            </div>
            <h3 className="relative font-['Fraunces',serif] text-2xl md:text-3xl font-semibold text-[#F3F4EF] mb-3">
              Ready to build something amazing?
            </h3>
            <p className="relative text-[#8B9691] mb-7 max-w-xl mx-auto">
              Web app, mobile app, or any digital product — I'm here to bring
              your ideas to life with clean code and thoughtful design.
            </p>
            <a
              href="mailto:yahyashafiq309@gmail.com"
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#CDFB4E] text-[#0A0F0D] font-semibold text-sm hover:brightness-95 transition"
            >
              <FaEnvelope size={13} />
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}