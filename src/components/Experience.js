// import * as React from "react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Text } from "react-ui";
import LinkIcon from "@mui/icons-material/Link";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import useWindowDimensions from "./useWindowDimensions";
import "./css/Experience.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          className="Experience-TabPanel"
          sx={{
            "& .MuiBox-root": {
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: "50vh",
            },
            display: "flex",
            padding: "30px",
            height: "80vh",
            maxWidth: "35vw",
          }}
        >
          <Typography
            sx={{
              "& .MuiTypography-root": {
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                maxWidth: "20vw",
                color: "black",
              },
            }}
            color={"black"}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Experience() {
  const [value, setValue] = useState(0);
  const tabContentRef = useRef(null);
  const { height, width } = useWindowDimensions();

  const Experiences = [
    {
      name: "SWE Intern @ Wambi",
      bullets: [
        "• Built AWS Lambda function to auto format and send AWS CloudWatch logs to Slack API enabling real-time monitoring across various environments, resulting in convenient debugging, faster error detection, and saving CTO 4+ hours weekly.",
        "• Led development and seamless migration of email messaging on production environment to AWS Pinpoint for 120,000+ users with dynamic email templates (Handlebars.js), slashing monthly costs by over 80%.",
        "• Reduced Next.js platform build times by 20% through bundle size optimizations including tree-shaking, specific imports, and more.",
      ],
      description:
        "Integrated AWS, optimized back-end, built mobile + web app features for appreciation software for medical workers.",
      dates: "Jan. 2024 - Apr. 2024",
      location: "New York City, NY",
      image: "/img/wambi.jpeg",
      skills: ["AWS", "Next.js", "TypeScript", "Node.js"],
      role: "Software Engineer Intern",
    },
    {
      name: "ML Intern @ Martinrea",
      bullets: [
        "• Developed and released a real-time defect detection computer vision model with PyTorch / YOLO NAS for 12,000 car parts every day with 0.995 mAP, saving the plant $50,000+ annually in QA costs.",
        "• Pioneered in-plant, easily configurable, image capture scripts to auto generate training datasets weekly with over 80,000 labelled and augmented images using Pylogix for PLC communication, OpenCV, and NumPy.",
        "• Collaborated with DEVS, QA, IT, and plant operators to deploy ML models to production line NVIDIA Jetsons leveraging custom Linux System Services and Docker for fault-tolerant, low down-time operations, raising production rates by 7%.",
      ],
      description:
        "Built and deployed computer vision models on the production line for a car parts manufacturing company (TSE: MRE).",
      dates: "May 2023 - Aug. 2023",
      link: "https://www.martinrea.com/",
      location: "Vaughan, ON",
      image: "/img/martinrea.jpeg",
      skills: ["Python", "PyTorch", "OpenCV", "Django", "Docker"],
      role: "Machine Learning Intern - Robotics Vision",
    },
    {
      name: "Co-Founder @ Wat Street",
      bullets: [],
      dates: "May 2023 - Present",
      description:
        "Created first quantitative finance design team at the University of Waterloo. We analyze + predict markets and advise real-world clients.",
      location: "Waterloo, ON",
      link: "https://www.linkedin.com/company/wat-street/",
      image: "/img/watstreet.jpeg",
      skills: ["Python", "NumPy", "Seaborn", "Pandas", "React.js"],
      role: "President + Co-Founder, Lead Developer",
    },
    {
      name: "SWE Intern @ Finastra",
      bullets: [],
      description:
        "Developed web-app and optimized services for Canada's top mortgage tool used by 20,000+ brokers.",
      dates: "May 2022 - Aug. 2022",
      image: "/img/finastra.webp",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6971075190948601859?utm_source=share&utm_medium=member_desktop",
      location: "Toronto, ON",

      skills: [
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "Express.js",
        "PostgreSQL",
      ],
      role: "Software Engineer Intern",
    },

    {
      name: "Full-Stack Intern @ Speak Fluent",
      bullets: [],
      description:
        "Created a demo web-app that uses Google Cloud Text-to-Speech to analyze and provide feedback on user speech.",
      dates: "June 2021 - Aug. 2021",
      image: "/img/speakfluent.jpeg",
      link: "https://www.speakfluent.ca/",
      location: "Toronto, ON",
      skills: ["React.js (Next.js)", "Python (Flask)", "Google Cloud API"],
      role: "Full Stack Developer Intern",
    },
    {
      name: "Project Manager @ Youth Culture",
      bullets: [],
      description:
        "Supervised and managed summer interns as they built technical projects. Hosted Hack To Tomorrow (with TD) for 70+ participants.",
      dates: "June 2020 - Aug. 2021",
      image: "/img/youthculture.jpeg",
      location: "Brampton, ON",
      link: "https://youthculture.com/",
      skills: ["WordPress", "HTML/CSS", "Git", "Figma"],
      role: "Technical Project Manager",
    },
    {
      name: "Coding Instructor @ Wiz Kid",
      bullets: [],
      description:
        "Taught multiple classes to kids aged 6-12 about topics such as web-development, game-development (Roblox), and more.",
      image: "/img/wizkid.png",
      dates: "Sept. 2021 - Dec. 2021",
      link: "https://www.wizkidlearning.com/",
      location: "Waterloo, ON",
      skills: ["HTML/CSS", "JavaScript", "Roblox Studio"],
      role: "Coding Instructor",
    },
    {
      name: "Co-Founder @ NPSS Hack Club",
      bullets: [],
      description:
        "Founded high school's coding club, hosted weekly workshops, first ever school hackathon, and taught over 200 students.",
      image: "/img/npsshackclub.webp",
      dates: "June 2020 - June 2021",
      location: "Brampton, ON",
      link: "https://www.instagram.com/npss.hackclub/",
      skills: ["Python", "React Native", "Leadership"],
      role: "Co-Founder + Co-President",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Experience">
      <div className="Experience-header">
        <Text size={60} color="snow">
          Experience
        </Text>
      </div>
      <div>
        <div className="Experience-box">
          <Box
            sx={{
              "& .MuiBox-root": {
                color: "#0BECE5",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              maxHeight: "80vh",
              maxWidth: "80vw",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              scrollButtons="auto"
              sx={{
                borderRight: 2,
                borderColor: "divider solid",
                color: "#0BECE5",
                backgroundColor: "inherit",
                alignItems: "flex-start",
                textTransform: "none",
                maxHeight: "50vh",
                maxWidth: "80vw",
                "& button": { borderRadius: 2, fontSize: "20px" },
                "& button:hover": { backgroundColor: "#15677A" },
                "& button:active": { backgroundColor: "secondary" },
                "& button:Mui-selected": { color: "secondary" },
                "& .MuiTab-root.Mui-selected": {
                  color: "#0BECE5",
                },
                "& .MuiTab-root": {
                  color: "#FFFBFC",
                  alignItems: "right",
                  textTransform: "none",
                },
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#0BECE5",
                },
              }}
            >
              {Experiences.map((exp, index) => {
                return <Tab label={exp.name} {...a11yProps(index)} />;
              })}
            </Tabs>

            {Experiences.map((exp, index) => {
              return (
                <TabPanel
                  value={value}
                  key="null"
                  index={index}
                  ref={tabContentRef}
                  scrollButtons={true}
                  sx={{
                    p: "10px",
                    "& .MuiTabPanel-root": {
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      textTransform: "none",
                      //   flex: 1,
                      p: "10px",
                      overflow: "auto",
                      overflowY: "auto",
                      maxWidth: "40vw",
                      color: "black",
                    },
                    "& .MuiTabPanel-MuiBox-root": {
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      textTransform: "none",
                      overflowY: "auto",
                      //   flex: 1,
                      padding: "10px",
                      overflow: "auto",
                      maxWidth: "30vw",
                      color: "black",
                    },
                  }}
                >
                  <div style={{ overflowY: "auto" }}>
                    {width > 700 && height > 700 && (
                      <div className="Experience-tabImgWrap">
                        <Avatar
                          className="Experience-tabImg"
                          src={process.env.PUBLIC_URL + exp.image}
                          sx={{
                            width: "100px",
                            height: "100px",
                            marginBottom: "10px",
                          }}
                        />
                      </div>
                    )}
                    <h2>{exp.role} </h2>
                    <h6>
                      {exp.location} | {exp.dates}
                    </h6>
                    {exp.skills.map((skill) => {
                      return (
                        <>
                          <Chip label={skill} sx={{ margin: "2px" }} />
                          {/* <Chip label={skill} variant="outlined" /> */}
                        </>
                      );
                    })}
                    {width > 1000 && height > 750 && (
                      <h6 marginTop="5px">{exp.description}</h6>
                    )}
                    {width > 875 && height > 600 && (
                      <Button
                        variant="contained"
                        endIcon={<LinkIcon />}
                        target="_blank"
                        href={exp.link}
                        sx={{
                          backgroundColor: "#0D8CA5",
                          "&:hover": { backgroundColor: "#0BECE5" },
                          marginTop: "4px",
                        }}
                      >
                        Check it out
                      </Button>
                    )}
                    {/* {exp.bullets.map((bullet) => {
                      return <h6>{bullet}</h6>;
                    })} */}
                  </div>
                </TabPanel>
              );
            })}
          </Box>
        </div>
      </div>
    </div>
  );
}
