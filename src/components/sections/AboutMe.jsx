import Section from '../Section';
import Article from '../Article';
import { timeline } from '../../Data';



const AboutMe = () => {
  
  
  return (
    <Section id={'about-me'} className="" >
      <Article title="About Me" className="text-center">
        <div className="relative ">
          {/* Timeline line */}
          <div className="absolute w-1 h-full transform -translate-x-1/2 bg-blue-200 " data-aos="fade-up"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {/* Intro item */}
            <div className="relative md:flex pl-12 md:pl-0  " data-aos="fade-right">
                <div className=" md:px-6 w-full">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-700">Who I Am</h3>
                    <p className="mt-2 text-gray-600">
                      I&apos;m <span className="font-bold">Gharieb Khalifa</span>, a Business Analyst, Functional Consultant, and Product Owner passionate about ensuring system stability, guaranteeing smooth workflows, and delivering fast, reliable solutions.
                    </p>
                  </div>
                </div>
                {/* <div className="hidden md:block md:w-1/2"></div> */}
            </div>



            {/* Achievement item */}
            <div className="relative md:flex pl-12 md:pl-0  " data-aos="fade-right">
              <div className="md:px-6 w-full">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-700">Key Achievement</h3>
                  <p className="mt-2 text-gray-600">
                      I designed, Built and depolyed an <span className="font-bold">SDLC & Support Governance App</span> using Frappe framework that streamlined documentation, tracked request impacts in real-time, and significantly reduced technical risks during production deployments.
                  </p>
                  </div>
              </div>
              {/* <div className="hidden md:block md:w-1/2"></div> */}
            </div>

            {/* Personal item */}
            <div className="relative md:flex pl-12 md:pl-0  " data-aos="fade-right">
              <div className="md:px-6 w-full">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-700">Beyond Work</h3>
                  <p className="mt-2 text-gray-600">
                      I am a dedicated self-starter who loves organizing workflows to make them easier and more efficient. I continuously explore new tools—from BI platforms to customized frameworks like Frappe—to improve my competencies and deliver real impact.
                  </p>
                </div>
              </div>
              {/* <div className="hidden md:block md:w-1/2"></div> */}
            </div>
          </div>
        </div>

        <div className="mt-32 w-full">
          <div className="text-center mb-16" data-aos="fade-down">
            <h3 className="text-3xl font-bold text-gray-800">🚀 From Support to Product Ownership</h3>
            <p className="mt-4 text-gray-600 italic max-w-2xl mx-auto">
              “A journey from resolving operational issues to owning product decisions in a mission-critical port system.”
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-stretch w-full gap-10 md:gap-4">
            
            {/* Horizontal Line Desktop */}
            <div className="hidden md:block absolute top-[30px] left-0 w-full h-[4px] bg-gray-200"></div>
            <div className="hidden md:block absolute top-[30px] left-0 w-full h-[4px] bg-gradient-to-r from-blue-400 via-green-400 to-purple-500" data-aos="fade-right" data-aos-duration="2000"></div>

            {/* Vertical Line Mobile */}
            <div className="absolute left-[26px] top-0 bottom-0 w-[4px] bg-gray-200 md:hidden"></div>
            <div className="absolute left-[26px] top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-400 via-green-400 to-purple-500 md:hidden" data-aos="fade-down" data-aos-duration="2000"></div>

            {timeline.map((item, index) => {
              const icons = ['🛠️', '📊', '🚀'];
              const borders = ['border-blue-500', 'border-green-500', 'border-purple-500'];
              const texts = ['text-blue-700', 'text-green-700', 'text-purple-700'];
              const bgs = ['bg-blue-50', 'bg-green-50', 'bg-purple-50'];
              const ringCols = ['ring-blue-100', 'ring-green-100', 'ring-purple-100'];

              return (
                <div key={index} className="relative z-10 flex flex-col items-start md:items-center w-full md:w-1/3 group" data-aos="fade-up" data-aos-delay={index * 200}>
                  
                  {/* Icon Node */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border-4 ${borders[index]} shadow-lg flex items-center justify-center text-2xl relative z-20 group-hover:scale-110 transition-transform duration-300 group-hover:ring-8 ${ringCols[index]}`}>
                    {icons[index]}
                  </div>

                  {/* Card Component */}
                  <div className={`mt-0 md:mt-8 ml-20 md:ml-0 bg-white p-6 rounded-xl shadow-lg border-t-4 ${borders[index]} w-[calc(100%-80px)] md:w-[90%] hover:-translate-y-2 transition-transform duration-300 relative text-left h-full flex flex-col`}>
                    
                    <h4 className="text-xl font-bold text-gray-800 md:text-center mb-1">{item.title}</h4>
                    <p className={`text-sm font-semibold mb-5 md:text-center ${texts[index]}`}>{item.subtitle}</p>
                    
                    <ul className="text-sm text-gray-600 mb-6 space-y-2 list-none">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${borders[index].replace('border-', 'bg-')} shrink-0`}></span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-auto w-full text-xs font-bold leading-tight ${texts[index]} ${bgs[index]} px-4 py-3 rounded-lg md:text-center shadow-inner`}>
                      {item.insight}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </Article>

    </Section>
  );
};

export default AboutMe;