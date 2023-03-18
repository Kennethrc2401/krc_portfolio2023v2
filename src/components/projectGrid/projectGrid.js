import React, { useEffect , useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ProjectCard from './projectCard.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {projectData} from '../../backend/pjtData';
import { flexbox } from '@mui/system';
import Placeholder from 'react-bootstrap/Placeholder';
import styles from './projectGrid.css';

function ProjectGrid() {
  if (projectData) {
    return (
      <Container className="projectsSection" style={{zIndex: '0'}}>
        <Row style={{display: 'flex'}}>
                <>
                  <Row className="projectsRow">
                    <h1 className='projectsHeading' style={{textAlign: 'center', margin: 'auto', padding: '5px'}}>Projects</h1>
                  </Row>
                    
                  <div style={{display: 'flex', flexShrink: '10%', flexFlow: 'wrap'}}>
                    {projectData.map((project) => (
                    <Card style={{ width: '18rem', display: 'flex', margin: '5px auto', padding: '5px'}}>
                        <div>
                        {project.imgSrc}
                        </div>
                        <Card.Body>
                          <Card.Title>
                            {project.title}
                          </Card.Title>
                          <Card.Text>
                            {project.description}
                            <br></br>
                            Created: {project.dateCreated}
                            <br></br>
                            Tools Used: {project.toolsUsed}
                        </Card.Text>
                        <Button variant="primary" href={project.siteUrl} target="_blank" size='sm'>View Project</Button>
                      </Card.Body>
                    </Card>
  
                    ))}
                  </div>
                </>
  
          
          {/* <Col sm={4}>sm=4</Col> */}
        </Row>
      </Container>
    );
  } else {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    )
  }
  
}

export default ProjectGrid;