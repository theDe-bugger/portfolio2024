
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./css/Projects.css"

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
        <div className="Projects" >
            <h1 className='Projects-header'>Projects</h1>
            <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel'>
                <Carousel.Item interval={3000} >
                    <div>
                        <Card className=''>
                        <h4>Card Title <GitHubIcon></GitHubIcon></h4>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/baymax.png"} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div>
                    
                        <Card  className=''>
                        <h4>Card Title <GitHubIcon></GitHubIcon></h4>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/ecosort.png"} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div >
                        
                        <Card className='Card'>
                        <h4>Card Title <GitHubIcon></GitHubIcon></h4>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/ezspeak.png"} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    
    
  );
}

export default Projects;