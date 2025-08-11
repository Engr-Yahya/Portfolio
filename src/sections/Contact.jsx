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
  FaTimes
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name zaruri hai';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email zaruri hai';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email enter kariye';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject zaruri hai';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message zaruri hai';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message kam se kam 10 characters ka hona chahiye';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const sendEmail = async (formData) => {
    // Simulate email sending with random success/failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 85% success rate for demo
        if (Math.random() > 0.15) {
          resolve({ success: true });
        } else {
          reject({ error: 'Network error' });
        }
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus({
        type: 'error',
        message: 'Kripya sab fields ko sahi tarah se fill kariye'
      });
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });
    
    try {
      await sendEmail(formData);
      
      setFormStatus({
        type: 'success',
        message: 'Your message is sent successfully! wait for my response.'
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Clear success message after 8 seconds
      setTimeout(() => setFormStatus({ type: '', message: '' }), 8000);
      
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Maaf kariye, message send karne mein koi masla hua hai. Kripya dobara try kariye ya direct email kariye.'
      });
      
      // Clear error message after 8 seconds
      setTimeout(() => setFormStatus({ type: '', message: '' }), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearFormStatus = () => {
    setFormStatus({ type: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "yahyashafiq309@gmail.com",
      href: "mailto:yahyashafiq309@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "(+92) 3490464950",
      href: "tel:+923490464950",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nowshera, Pakistan",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-yahya-se25",
      color: "hover:text-blue-600",
      name: "LinkedIn"
    },
    {
      icon: FaGithub,
      href: "https://github.com/Engr-Yahya",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      name: "GitHub"
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/yahya_butt.0",
      color: "hover:text-pink-600",
      name: "Instagram"
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/1A4ZuGougu/",
      color: "hover:text-blue-800",
      name: "Facebook"
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/yahyashafiq.",
      color: "hover:text-indigo-600",
      name: "Discord"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const successAnimation = {
    initial: { scale: 0, opacity: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const errorAnimation = {
    initial: { scale: 0, opacity: 0, x: -20 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50/30 
               dark:from-gray-900 dark:to-blue-900/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
            I'm always open to discussing new opportunities, interesting projects, and creative collaborations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                           border border-gray-200 dark:border-gray-700 hover:shadow-xl 
                           transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl 
                                  flex items-center justify-center shadow-lg group-hover:scale-110 
                                  transition-transform duration-300`}>
                      <contact.icon className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {contact.label}
                      </p>
                      {contact.href === "#" ? (
                        <p className="text-gray-900 dark:text-white font-medium">
                          {contact.value}
                        </p>
                      ) : (
                        <a
                          href={contact.href}
                          className="text-gray-900 dark:text-white hover:text-blue-600 
                                   dark:hover:text-blue-400 transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                       border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow me on social media for updates and behind-the-scenes content
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 
                             rounded-xl text-gray-700 dark:text-gray-300 ${social.color} 
                             transition-all duration-300 hover:shadow-md text-sm font-medium`}
                  >
                    <social.icon size={16} />
                    <span className="hidden sm:inline">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl 
                     border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ready to start a project? Let's discuss your ideas!
              </p>
            </div>

            {/* Form Status with Enhanced Animations */}
            {formStatus.message && (
              <motion.div
                initial={formStatus.type === 'success' ? successAnimation.initial : errorAnimation.initial}
                animate={formStatus.type === 'success' ? successAnimation.animate : errorAnimation.animate}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 relative ${
                  formStatus.type === 'success' 
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700' 
                    : 'bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700'
                }`}
              >
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {formStatus.type === 'success' ? (
                    <FaCheckCircle className="text-xl" />
                  ) : (
                    <FaExclamationCircle className="text-xl" />
                  )}
                </motion.div>
                
                <span className="font-medium flex-1">{formStatus.message}</span>
                
                <motion.button
                  onClick={clearFormStatus}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaTimes className="text-sm" />
                </motion.button>
              </motion.div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ${
                               errors.name 
                                 ? 'border-red-500 dark:border-red-400' 
                                 : 'border-gray-300 dark:border-gray-600'
                             }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address :
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ${
                               errors.email 
                                 ? 'border-red-500 dark:border-red-400' 
                                 : 'border-gray-300 dark:border-gray-600'
                             }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject :
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ${
                             errors.subject 
                               ? 'border-red-500 dark:border-red-400' 
                               : 'border-gray-300 dark:border-gray-600'
                           }`}
                  placeholder="Project Discussion / Collaboration Opportunity"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400 resize-none 
                           transition-all duration-200 ${
                             errors.message 
                               ? 'border-red-500 dark:border-red-400' 
                               : 'border-gray-300 dark:border-gray-600'
                           }`}
                  placeholder="Hi Yahya, I'd love to discuss a project with you. Here are the details..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 
                         bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
                         hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 
                         focus:ring-offset-2 transition-all duration-300 font-semibold 
                         shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Message sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether it's a web application, mobile app, or any digital solution, 
              I'm here to bring your ideas to life with clean code and modern design.
            </p>
            <motion.a
              href="mailto:yahyashafiq309@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 
                       rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold 
                       shadow-lg hover:shadow-xl"
            >
              <FaEnvelope />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}