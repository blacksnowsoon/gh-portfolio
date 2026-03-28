import { useState } from 'react';
import { PROJECTS } from '../../Data';
import Section from '../Section';
import SectionTilte from '../SectionTilte';

function Projects() {
  const [selectedCase, setSelectedCase] = useState(null);

  const themeColors = {
    blue: "bg-blue-50 border-blue-500 text-blue-700",
    green: "bg-green-50 border-green-500 text-green-700",
    purple: "bg-purple-50 border-purple-500 text-purple-700",
  };
  
  const tagBg = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };

  const btnTheme = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    purple: "bg-purple-600 hover:bg-purple-700 text-white",
  };

  const borderTheme = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
  };

  return (
    <Section id={'case-studies'} className="bg-gray-50/50">
      <SectionTilte title={'Case Studies'} subtitle={"Real challenges, strategic solutions, measurable impact."} />
      
      <div className="container mx-auto px-4 mt-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((caseStudy) => (
            <div 
              key={caseStudy.id} 
              className={`relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${borderTheme[caseStudy.theme]} overflow-hidden flex flex-col h-full group`}
              data-aos="fade-up"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img src={caseStudy.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={caseStudy.title} />
                <div className="absolute inset-0 bg-gray-900/85 group-hover:bg-gray-900/75 transition-colors duration-300"></div>
              </div>

              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map(tag => (
                    <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full ${tagBg[caseStudy.theme]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-300 mb-8 flex-grow text-sm">
                  {caseStudy.shorts}
                </p>

                <button 
                  onClick={() => {
                    setSelectedCase(caseStudy);
                    document.getElementById('case_study_modal').showModal();
                  }}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold transition-colors mt-auto ${btnTheme[caseStudy.theme]}`}
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <dialog id="case_study_modal" className="modal modal-bottom sm:modal-middle bg-black/60 backdrop-blur-sm !z-[9999]">
        <div className="modal-box w-11/12 max-w-4xl p-0 rounded-2xl bg-white max-h-[90vh] flex flex-col overflow-hidden">
          {selectedCase && (
            <>
              
              <div className={`p-6 md:p-8 border-b-4 ${borderTheme[selectedCase.theme]} bg-gray-50 flex justify-between items-start shrink-0`}>
                <div className="pr-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedCase.tags.map(tag => (
                      <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full ${tagBg[selectedCase.theme]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                    {selectedCase.title}
                  </h2>
                </div>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:bg-gray-200">✕</button>
                </form>
              </div>

              <div className="p-6 md:p-10 overflow-y-auto flex-1 min-h-0 space-y-10 bg-white">
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">🟡</span> Context
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {selectedCase.context}
                        </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm">
                        <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">🔴</span> The Problem
                        </h4>
                        <ul className="space-y-2">
                            {selectedCase.problem.map((pt, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-red-900/80">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0"></span>
                                <span>{pt}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                    <span className="text-2xl">🧠</span> My Role
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCase.role.map((pt, i) => (
                      <li key={i} className="flex gap-3 items-center bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                        <span className={`h-2 w-2 rounded-full ${btnTheme[selectedCase.theme].split(' ')[0]} shrink-0`}></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                    <span className="text-2xl">🛠️</span> Solution
                  </h4>
                  <ul className="space-y-3">
                    {selectedCase.solution.map((pt, i) => (
                      <li key={i} className="flex gap-3 items-start text-gray-700">
                        <svg className={`w-5 h-5 shrink-0 ${btnTheme[selectedCase.theme].split(' ')[0].replace('bg-', 'text-')} mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <div className={`p-6 rounded-xl border-l-4 ${themeColors[selectedCase.theme]} shadow-sm`}>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="text-2xl">📈</span> Impact
                    </h4>
                    <ul className="space-y-3">
                      {selectedCase.impact.map((pt, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm font-medium">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 opacity-70"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-gray-300 relative z-10">
                      <span className="text-2xl">🎯</span> Key Takeaway
                    </h4>
                    <p className="text-base leading-snug font-medium italic relative z-10 text-gray-100">
                      "{selectedCase.takeaway}"
                    </p>
                  </div>
                </div>

              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
      </dialog>

    </Section>
  )
}

export default Projects;