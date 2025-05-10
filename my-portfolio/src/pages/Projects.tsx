import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';
// import chatbot from '../assets/images/chatbot.png'

const projects = [
  {
    id: 'parleplay',
    title: 'ParlePlay: French Conversation Buddy',
    description: 'End to end French Conversation Bot to practice French',
    image: '../assets/images/chatbot.png',
  },
  {
    id: 'blog-oasis',
    title: 'Blog Oasis: Personal Blog Website',
    description: 'Decentralized platform for minting and trading NFTs...',
    image: '/images/nft-project.jpg',
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'Decentralized platform for minting and trading NFTs...',
    image: '/images/nft-project.jpg',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
