import { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Project from './projectInfo.json';

function ProjectCard() { 
    return (
         
      <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>         
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

export default ProjectCard;