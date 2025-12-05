
import React, { useMemo, useState } from 'react'
import { PROJECTS } from '../../Data'
import Section from '../Section'
import SectionTilte from '../SectionTilte';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


function Projects() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => PROJECTS.map(project => ({
    src: project.image,
    title: project.name,
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
        plugins={[Captions]}
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