
import { useMemo, useState } from 'react'
import { PROJECTS } from '../../Data'
import Section from '../Section'
import SectionTilte from '../SectionTilte';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Share from "yet-another-react-lightbox/plugins/share";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


function Projects() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => PROJECTS.map(project => ({
    src: project.image,
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{project.name}</span>
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Project"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'inherit',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    ),
    share: {
      url: project.link,
    },
    description: project.shorts + (project.description ? " - " + project.description : ""),
  })), []);

  const handleOpen = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const content = useMemo(() => (
    PROJECTS.map((card, index) => {
      return (
        <li key={card.name.slice(3) + index}>
          <ProjectCard card={card} onClick={() => handleOpen(index)} />
        </li>

      )
    })
  ), []);

  return (
    <Section id={'projects'}>
      <SectionTilte title={'Projects'} />
      <ul className={`flex flex-wrap justify-center gap-4 p-4`}>
        {
          content
        }
      </ul>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Captions, Share]}
      />
    </Section>
  )
}

const ProjectCard = ({ card, onClick }) => {


  return (
    <div className="card card-compact bg-base-100 w-80 h-full shadow-xl transition-all 
                  hover:bg-base-200 group duration-300 ease-in-out
                  hover:shadow-2xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <a
        role="button"
        onClick={(e) => e.preventDefault()}
      >
        <img
          loading="lazy"
          src={`${card.image}`}
          alt={card.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div className="card-body relative ">
        <h3 className="card-title m-0 p-0 ">
          {card.name}
        </h3>

      </div>
    </div>
  );
};


export default Projects