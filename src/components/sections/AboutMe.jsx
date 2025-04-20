import Section from '../Section';
import Article from '../Article';



const AboutMe = () => {
  
  
  return (
    <Section id={'about-me'} className="" >
      <Article title="About Me" className="text-center">
        <div className="relative ">
          {/* Timeline line */}
          <div className="absolute w-1 h-full  transform -translate-x-1/2 bg-blue-200 " data-aos="fade-up"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {/* Intro item */}
            <div className="relative md:flex pl-12 md:pl-0  " data-aos="fade-right">
                <div className=" md:px-6 w-full">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-700">Who I Am</h3>
                    <p className="mt-2 text-gray-600">
                      I&apos;m <span className="font-bold">Gharieb Khalifa</span>, a FullStack Developer, Business Analyst and tech enthusiast passionate about turning complex challenges into efficient, data-driven solutions.
                    </p>
                  </div>
                </div>
                {/* <div className="hidden md:block md:w-1/2"></div> */}
            </div>

            {/* Experience item */}
            <div className="relative md:flex pl-12 md:pl-0 " data-aos="fade-left">
                {/* <div className="hidden md:block"></div> */}
                <div className=" md:px-6 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-700">Professional Experience</h3>
                    <p className="mt-2 text-gray-600">
                        With <span className="font-bold">4+ years</span> in Web Development, port operations and logistics, I specialize in process optimization, stakeholder collaboration, building websites, and custom tools to streamline workflows.
                    </p>
                    </div>
                </div>
                
            </div>

            {/* Achievement item */}
            <div className="relative md:flex pl-12 md:pl-0  " data-aos="fade-right">
              <div className="md:px-6 w-full">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-700">Key Achievement</h3>
                  <p className="mt-2 text-gray-600">
                      At <span className="font-bold">Adabia Port</span>, I developed a Frappe Framework-based task management system that <span className="font-bold">reduced workflows process, reporting time by 50%</span> and improved cross-departmental efficiency between 4 different departments.
                  </p>
                  </div>
              </div>
              {/* <div className="hidden md:block md:w-1/2"></div> */}
            </div>

            {/* Skills item */}
            <div className="relative md:flex pl-12 md:pl-0  " data-aos="fade-left">
              
              <div className=" md:px-6 w-full">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-yellow-700">Technical Toolkit</h3>
                  <p className="mt-2 text-gray-600">
                      My skills include <span className="font-bold">SQL, React.js, Python, and JavaScript</span>, which I leverage to bridge the gap between business needs and technical execution.
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
                      I enjoy exploring new technologies, contributing to open-source projects, and mentoring others in tech. My goal? To keep solving real-world problems—one line of code at a time.
                  </p>
                </div>
              </div>
              {/* <div className="hidden md:block md:w-1/2"></div> */}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12" data-aos="zoom-in">
          <p className="text-lg text-gray-700 mb-4">Let&apos;s connect! I&apos;m always open to collaborations or tech discussions.</p>
          <a href='/#contact' className="bg-primary hover:bg-accent text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Contact Me
          </a>
        </div>

      </Article>

    </Section>
  );
};

export default AboutMe;