
// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
// import LinkIcon from '@mui/icons-material/Link';
// import "./css/Projects.css"
// import IconButton from '@mui/material/IconButton';
function About() {
    return (
        <div className="Projects" >
            <h1 className='Projects-header'>About Me</h1>
            <Card>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/naturalsquare.png"}/>
                <Card.Text>Jaimil Dalwadi</Card.Text>
                <Card.Text>CS @ University of Waterloo</Card.Text>
                <Card.Text></Card.Text>
            </Card>
            
        </div>

     );
}

export default About;