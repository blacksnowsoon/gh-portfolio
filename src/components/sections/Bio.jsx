import React from 'react';
import { FaChartLine, FaCode, FaDatabase, FaMobileAlt, FaUsers } from 'react-icons/fa';
import Section from '../Section';

const Services = () => {
  const services = [
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Business Process Optimization",
      description: "Analyze and streamline workflows using data-driven approaches. Reduced operational inefficiencies by 30% at Adabia Port through custom solutions.",
      aos: "fade-right"
    },
    {
      icon: <FaCode className="text-3xl text-purple-600" />,
      title: "Full-Stack Development",
      description: "Build end-to-end web applications using Frappe Framework (Python/JS), React.js, and PostgreSQL. Created a custom task management system that improved cross-department collaboration.",
      aos: "fade-up"
    },
    {
      icon: <FaDatabase className="text-3xl text-green-600" />,
      title: "Custom ERP Solutions",
      description: "Develop tailored business management systems with Frappe Framework. Integrated logistics modules that increased port operational efficiency by 50%.",
      aos: "fade-left"
    },
    {
      icon: <FaMobileAlt className="text-3xl text-yellow-600" />,
      title: "Responsive Web Development",
      description: "Design and build modern, mobile-friendly interfaces with React.js, Bootstrap, and CSS. Portfolio includes real-time monitoring dashboards and user-friendly web apps.",
      aos: "fade-right"
    },
    {
      icon: <FaUsers className="text-3xl text-red-600" />,
      title: "Technical Consultation",
      description: "Bridge business needs with technical solutions. Train teams on new systems and provide ongoing support for smooth digital transitions.",
      aos: "fade-up"
    },
    {
      icon: <FaCode className="text-3xl text-indigo-600" />,
      title: "API Integration",
      description: "Connect disparate systems through custom APIs. Integrated payment gateways and RFID devices at Adabia Port for seamless operations.",
      aos: "fade-left"
    }
  ];
// className="py-16 px-4 bg-gray-50"
  return (
    <Section >
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridging business analysis with full-stack development to deliver comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
              data-aos={service.aos}
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you need process automation, a web application, or system integration, I can help transform your requirements into working solutions.
          </p>
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Services


