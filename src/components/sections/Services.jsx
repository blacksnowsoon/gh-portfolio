import Article from '../Article'
import Section from './../Section';
import { FaChartLine, FaCode, FaDatabase, FaMobileAlt, FaUsers } from 'react-icons/fa';
// import {Link} from 'react-router-dom'
// import CountUp from 'react-countup';


// const progressBar = "▰"

function Services() {

    return (
        <Section id={'services'} className=''>
            <Article title={'What I Offer'} style={''} > 
                <div className="">
                    <div className="text-center" data-aos="fade-down">
                        {/* <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Offer</h2> */}
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

                    <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white" data-aos="zoom-in"
                    >
                    <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Whether you need process automation, a web application, or system integration, I can help transform your requirements into working solutions.
                    </p>
                    <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                        Let&apos;s Discuss Your Project
                    </button>
                    </div>
                </div>
            </Article>
        </Section>
    )
}

export default Services

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
        description: "Build end-to-end web applications using Frappe Framework (Python/JS), React.js, and MySQL. Created a custom task management system that improved cross-department collaboration.",
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
        description: "Connect disparate systems through custom APIs. Integrated payment gateways and RFID devices with PMIS & ERP systems.",
        aos: "fade-left"
    }
];

{/* <div className="stats py-4 stats-vertical md:stats-horizontal shadow-xl mx-auto  w-full ">
                    <div className="stat w-full place-items-center">
                    <p className={`text-6xl`}>
                        <CountUp onEnd={() =>{ setPerformance(true)}}  end={100} duration={6}  separator=" " />
                    </p>
                    {
                        performance ? <p className="stat-title text-center text-green-400 font-semibold">Performance</p> : null
                    }
                    </div>
                    <div className="stat  w-full place-items-center">
                    <p className={`text-6xl`}>
                    <CountUp onEnd={() =>{ setAccessibility(true)}} end={96} duration={5}  separator="" /></p>
                    {
                        accessibility ? <p className="stat-title  text-center text-green-400 font-semibold">Accessibility</p> : null
                    }
                    </div>
                    <div className="stat  w-full place-items-center">
                    <p  className={`text-6xl`}>
                        <CountUp onEnd={() =>{ setBestPractices(true)}} end={96} duration={5}  separator=" " />
                    </p>
                    {
                        bestPractices ? <p className="stat-title text-center text-green-400 font-semibold">Best Practices</p> : null  
                    }
                    </div>
                    <div className="stat  w-full place-items-center">
                        <p className={`text-6xl`} >
                        <CountUp onEnd={() =>{ setSeo(true)}} end={91} duration={4}  separator=" " />
                        </p>
                        {
                        seo  ? <p className="stat-title text-center text-green-400 font-semibold">SEO</p> : null
                        }
                    </div>
                </div>
                <h3 className=" text-center text-green-400 block text-xl font-bold  text-nowrap  m-2 ">
                    Promise To Deliver:👉 Performance🚀  Accuracy🔬  Responsiveness🎭 
                </h3>
                <div className="divider">
                    <Link target='_blank' to={'https://pagespeed.web.dev/analysis/https-gh-portfolio-liard-vercel-app/o7te4fun0g?form_factor=desktop'} 
                    className='text-center btn  rounded  mt-3 glass self-center'>Live Test Preview</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div>[{progressBarStyle(9)}]<span className='text-green-400'>↑</span> +90% System Efficiency </div>
                    <div>[{progressBarStyle(8)}]<span className='text-green-400'>↑</span> +75% Risk Reduction </div>  
                    <div>[{progressBarStyle(9)}]<span className='text-green-400'>↑</span> +90% Full-Stack Development </div>  
                    <div>[{progressBarStyle(8)}]<span className='text-green-400'>↑</span> +80% Stakeholder Collaboration </div>  
    </div> */} 
