'use client';
import styled from 'styled-components';
import CardContainer from '../../components/card-container';
import Card from '../../components/card';
const ProjectsWrapper = styled.div``;

const Projects = ({}: {}) => {
  const projectList = [
    {
      text: 'Construction of Stone Masonry Works',
      src: '/assets/1.jpg',
      alt: 'alt',
    },
    {
      text: 'Installation of Tiles for PDIC Building',
      src: '/assets/2.jpg',
      alt: 'alt',
    },
    { text: 'Prefabricated Container Van', src: '/assets/3.jpg', alt: 'alt' },
    { text: 'Structural Steel Works', src: '/assets/4.jpg', alt: 'alt' },
    {
      text: 'Supply and Installation of Phenolic Board Protection',
      src: '/assets/5.jpg',
      alt: 'alt',
    },
    { text: '3-Unit Residential Apartment', src: '/assets/6.jpg', alt: 'alt' },
    { text: 'Coffee Shop Renovation', src: '/assets/7.jpg', alt: 'alt' },
    {
      text: 'Kyu-Kyu Ramen Restaurant Renovation',
      src: '/assets/8.jpg',
      alt: 'alt',
    },
  ];
  return (
    <ProjectsWrapper>
      <CardContainer columns={3}>
        {projectList.map((list) => (
          <Card
            height={500}
            width={500}
            text={list.text}
            imgSrc={list.src}
            alt={list.alt}
          />
        ))}
      </CardContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
