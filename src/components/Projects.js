import { useState, forwardRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Text } from "react-ui";
import LinkIcon from "@mui/icons-material/Link";
import "./css/Projects.css";
import IconButton from "@mui/material/IconButton";

const Projects = forwardRef(function (props, ref) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Projects" ref={ref}>
      <Text size={40} color="snow">
        Stuff I did for fun...
      </Text>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="Carousel"
      >
        <Carousel.Item interval={3000}>
          <div>
            <Card className="">
              <h4>EcoSort </h4>
              <h6>Top 10 of 250+ teams globally</h6>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/ecosort.png"}
              />
              <Card.Body>
                <Card.Title>
                  View Here{" "}
                  <IconButton
                    href="https://devpost.com/software/ecosort-jhrp0e"
                    target="_blank"
                  >
                    <LinkIcon></LinkIcon>
                  </IconButton>
                </Card.Title>
                <Card.Text>
                  Computer vision web-app that automatically sorts waste for
                  you.
                </Card.Text>
                <h6>Stack: Microsoft Azure AI, HTML/CSS, JavaScript, Git</h6>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div>
            <Card className="">
              <h4>BaymaxBot </h4>
              <h6>1st Place at JamHacks 2021</h6>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/baymax.png"}
              />
              <Card.Body>
                <Card.Title>
                  View Here{" "}
                  <IconButton
                    href="https://devpost.com/software/baymaxbot"
                    target="_blank"
                  >
                    <LinkIcon></LinkIcon>
                  </IconButton>
                </Card.Title>
                <Card.Text>
                  Discord bot to detect suicidal ideation that can notify admins
                  and provide resources.
                </Card.Text>
                <h6>Stack: Discord.js, Node.js, Git</h6>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div>
            <Card className="Card">
              <h4>Quantum TSP Solver</h4>
              <h6>1st Place at IEEE Services 2021</h6>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/quantumtsp.png"}
              />
              <Card.Body>
                <Card.Title>
                  View Here{" "}
                  <IconButton
                    href="https://github.com/theDe-bugger/IEEE-quantum-hackathon"
                    target="_blank"
                  >
                    <LinkIcon></LinkIcon>
                  </IconButton>
                </Card.Title>{" "}
                <Card.Text>
                  Used IBM Qiskit to solve NP-Hard travelling salesman problem
                  with quantum computing.
                </Card.Text>
                <h6>
                  Stack: Python, IBM Qiskit Runtime API, Jupyter Notebook, Git
                </h6>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div>
            <Card className="Card">
              <h4>MyCalCount</h4>
              <h6>RU Hacks 2021</h6>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/mycalcount.png"}
              />
              <Card.Body>
                <Card.Title>
                  View Here{" "}
                  <IconButton
                    href="https://devpost.com/software/mycalcount"
                    target="_blank"
                  >
                    <LinkIcon></LinkIcon>
                  </IconButton>
                </Card.Title>{" "}
                <Card.Text>
                  Computer vision web-app to automatically count calories from
                  pictures of food.
                </Card.Text>
                <h6>
                  Stack: Google Cloud Vision API, HTML/CSS, JavaScript, Git
                </h6>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div>
            <Card className="Card">
              <h4>Water Quality Analysis Using Particle-Accelerator</h4>
              <h6>Canadian Light Source Research + Seminar</h6>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/img/sotb.png"}
              />
              <Card.Body>
                <Card.Title>
                  View Here{" "}
                  <IconButton
                    href="https://www.youtube.com/watch?v=t7FBt7txZDc&ab_channel=CanadianLightSource"
                    target="_blank"
                  >
                    <LinkIcon></LinkIcon>
                  </IconButton>
                </Card.Title>{" "}
                <Card.Text>
                  Detected Iron, Zinc, and other metal anomolies in water
                  samples from Lake Ontario.
                </Card.Text>
                <h6>Skills: Data Collection + Analysis, R, Public Speaking</h6>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
});
export default Projects;
