import React, { useEffect , useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ProjectCard from './projectCard.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {projectData} from '../../backend/pjtData';
import { flexbox } from '@mui/system';
  

function ProjectGrid() {
  return (
    <Container>
      <Row>
            {/* <ProjectCard /> */}
            {/* <div>
              {projectData.map((project) => (
                  <div key={projectData.id}> {project.id} </div>
                
              ))}
            </div> */}   
              <Col sm={8}>
              <>
                <div>
                  {projectData.map((project) => (
                  <Card style={{ width: '18rem', display: 'flex'}}>
                      {/* <Card.Img variant="top" src={project.imgSrc} /> */}
                      <div>
                      {project.imgSrc}
                      </div>
                      <Card.Body>
                        <Card.Title>
                          {project.title}
                        </Card.Title>
                        <Card.Text>
                          Created: {project.dateCreated}
                      </Card.Text>
                      <Card.Text>
                          {project.description}
                      </Card.Text>
                      <Button variant="primary" href={project.siteUrl} target="_blank">View Project</Button>
                    </Card.Body>
                  </Card>

                  ))}
                </div>
              </>
            </Col>

          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>         
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
           </Card> */}

        
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}

export default ProjectGrid;