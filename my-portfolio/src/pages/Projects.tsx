// import React from 'react';
// import ProjectCard from '../components/ProjectCard';
// import '../styles/Projects.css';

// // Map of all images in the folder
// const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', { eager: true, as: 'url' });

// const projectData = [
//   {
//     id: 'parleplay',
//     title: 'ParlePlay: French Conversation Buddy',
//     description: 'End to end French Conversation Bot to practice French',
//     imageName: 'chatbot.png',
//   },
//   {
//     id: 'blog-oasis',
//     title: 'Blog Oasis: Personal Blog Website',
//     description: 'A simple blog platform using React, Express, and MongoDB.',
//     imageName: 'blog.png',
//   },
//   {
//     id: 'texas-datanetworks',
//     title: 'NFT Marketplace',
//     description: 'Deployed a secure, resilient cloud infrastructure on AWS for Texas Dataworks website',
//     imageName: 'cloud.png',
//   },
// ];

// const Projects: React.FC = () => {
//   return (
//     <div className="projects-container">
//       <h1 className="projects-heading">My projects</h1>
//       <div className="projects-grid">
//         {projectData.map((proj, index) => {
//           const imagePath = `../assets/images/${proj.imageName}`;
//           const image = images[imagePath];
//           return <ProjectCard key={index} {...proj} image={image} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Projects;
// src/components/Projects.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projectData';  
import '../styles/Projects.css';

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', { eager: true, as: 'url' });

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My projects</h1>
      <div className="projects-grid">
        {Object.keys(projectData).map((projKey) => {
          const proj = projectData[projKey as keyof typeof projectData];
          const imagePath = `../assets/images/${proj.image}`;
          const image = images[imagePath]; 

          return (
            <ProjectCard
              key={projKey}
              id={projKey}
              title={proj.title}
              description={proj.description}
              image={image}  
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
