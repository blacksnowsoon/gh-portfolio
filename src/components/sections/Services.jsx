import Section from './../Section';
import InnerSec from '../InnerSec';
import SectionTilte from '../SectionTilte';
import { FaChartLine, FaCode, FaDatabase, FaMobileAlt, FaUsers } from 'react-icons/fa';

const services = [
    {
        icon: <FaChartLine className="text-4xl text-blue-600" />,
        borderColor: "hover:border-blue-500",
        bulletColor: "bg-blue-600",
        title: "Business Analysis & Process Design",
        points: [
            "Lead requirements elicitation using structured techniques (BPMN, Root Cause Analysis)",
            "Model and optimize operational workflows (AS-IS / TO-BE)",
            "Identify system gaps and define functional solutions aligned with real business needs",
            "Translate complex operations into scalable system behavior"
        ],
        aos: "fade-right"
    },
    {
        icon: <FaDatabase className="text-4xl text-yellow-500" />,
        borderColor: "hover:border-yellow-500",
        bulletColor: "bg-yellow-500",
        title: "Systems Analysis & Operational Support",
        points: [
            "Ensure stability of mission-critical port systems across terminals and devices (RFID, POS, Scales)",
            "Act as escalation point for production issues, resolving high-impact incidents",
            "Support integrations with external systems (Nafaza / MSW)",
            "Maintain operational continuity in high-volume, real-time environments"
        ],
        aos: "fade-up"
    },
    {
        icon: <FaUsers className="text-4xl text-green-600" />,
        borderColor: "hover:border-green-500",
        bulletColor: "bg-green-600",
        title: "Product Ownership & Delivery",
        points: [
            "Own backlog and define system behavior based on business priorities",
            "Lead UAT cycles and release processes (Patch → Production)",
            "Evaluate system impact and manage change requests",
            "Align stakeholders, technical teams, and operations to deliver measurable value"
        ],
        aos: "fade-left"
    }
];

function Services() {

    return (
        <Section id={'services'} className=''>
            <SectionTilte title={'What I Do'} />
                <InnerSec>
                    <div className="">
                        <div className="text-center" data-aos="fade-down">
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Designing and optimizing mission-critical systems by bridging business operations, technology, and product thinking
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-transparent ${service.borderColor}`}
                                    data-aos={service.aos}
                                    data-aos-delay={index * 100}
                                >
                                    <div className="mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                                    <ul className="text-gray-600 text-sm space-y-3 list-none">
                                        {service.points.map((pt, i) => (
                                          <li key={i} className="flex gap-3 items-start">
                                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${service.bulletColor} shrink-0`}></span>
                                            <span className="leading-snug text-left">{pt}</span>
                                          </li>
                                        ))}
                                    </ul>
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
                </InnerSec>
        </Section>
    )
}

export default Services



