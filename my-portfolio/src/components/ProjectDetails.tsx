import React from 'react';
import { useParams } from 'react-router';
import '../styles/ProjectDetails.css';

const projectData = {
  'parleplay': {
    title: 'ParlePlay: French Conversation Buddy',
    description:
      'End to end French Conversation Bot to practice French',
    image: '../assets/images/chatbot.png',
  },
  'nft-marketplace': {
    title: 'NFT Marketplace',
    description:
      'In-depth look at the NFT marketplace architecture, smart contract code, and features like bidding and minting.',
    image: '../assets/images/chatbot.png',
  },
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return <div className="not-found">Project not found</div>;
  }

  return (
    <div className="details-container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="details-image" />
      <p className="details-description">{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
