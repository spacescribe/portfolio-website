// import React from 'react';
// import { useParams } from 'react-router';
// import '../styles/ProjectDetails.css';
// import { projectData } from '../data/projectData';

// const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', { eager: true, as: 'url' });

// const projectData = {
//   'parleplay': {
//     title: 'ParlePlay: French Conversation Buddy',
//     description: 'End to end French Conversation Bot to practice French',
//     image: 'chatbot.png',
//   },
//   'blog-oasis': {
//     title: 'Blog Oasis: Personal Blog Website',
//     description: 'A simple blog platform using React, Express, and MongoDB.',
//     image: 'blog.png',
//   },
// };

// const ProjectDetails: React.FC = () => {
//   const { id } = useParams();
//   const project = projectData[id as keyof typeof projectData];

//   if (!project) {
//     return <div className="not-found">Project not found</div>;
//   }

//   // Dynamically resolve the image URL using the glob import
//   const imagePath = `../assets/images/${project.image}`;
//   const image = images[imagePath];

//   return (
//     <div className="details-container">
//       <h1>{project.title}</h1>
//       <img src={image} alt={project.title} className="details-image" />
//       <p className="details-description">{project.description}</p>
//     </div>
//   );
// };

// export default ProjectDetails;
// src/components/ProjectDetails.tsx
import React from 'react';
import { useParams } from 'react-router';
import { projectData } from '../data/projectData';  // Import the centralized data
import '../styles/ProjectDetails.css';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', { eager: true, as: 'url' });

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return <div className="not-found">Project not found</div>;
  }

  // Dynamically resolve the image URL using the glob import
  const imagePath = `../assets/images/${project.image}`;
  const image = images[imagePath];

  return (
    <div className="details-container">
      <h1>{project.title}</h1>
      <img src={image} alt={project.title} className="details-image" />
      <p className="details-description">{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
