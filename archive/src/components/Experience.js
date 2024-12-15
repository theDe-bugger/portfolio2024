import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./css/Experience.css";

const Experience = forwardRef(function (props, ref) {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleOpen = (experience) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedExperience(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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

  const professionalRoles = Experiences.filter(exp => 
    ["Software Engineer Intern", "Machine Learning Intern", "Full Stack Developer"].some(role => 
      exp.role.includes(role)
    )
  );
  
  const leadershipRoles = Experiences.filter(exp => 
    ["Co-Founder", "Project Manager", "Instructor"].some(role => 
      exp.role.includes(role)
    )
  );

  return (
    <div className="Experience" ref={ref}>
      <div className="Experience-header">
        <Typography variant="h4" color="snow">
          Some places I've worked at in the past...
        </Typography>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          centered
          sx={{
            '& .MuiTab-root': { color: '#FFFBFC' },
            '& .Mui-selected': { color: '#0BECE5' },
            '& .MuiTabs-indicator': { backgroundColor: '#0BECE5' },
          }}
        >
          <Tab label="Professional Experience" />
          <Tab label="Leadership & Teaching" />
        </Tabs>
      </Box>

      <div className="Experience-content">
        {activeTab === 0 ? (
          <ul className="Experience-list">
            {professionalRoles.map((exp, index) => (
              <li
                key={index}
                className="Experience-item"
                onClick={() => handleOpen(exp)}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <div>
                    <Typography variant="h6">{exp.role}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.location} | {exp.dates}
                    </Typography>
                  </div>
                  <div className="Experience-skills">
                    {exp.skills.slice(0, 3).map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill} 
                        sx={{ 
                          margin: "2px",
                          backgroundColor: 'transparent',
                          border: '1px solid #0BECE5',
                          color: '#0BECE5',
                        }} 
                      />
                    ))}
                  </div>
                </Box>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="Experience-list">
            {leadershipRoles.map((exp, index) => (
              <li
                key={index}
                className="Experience-item"
                onClick={() => handleOpen(exp)}
              >
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.location} | {exp.dates}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {exp.description}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box className="Experience-modal">
          {selectedExperience && (
            <>
              <Typography variant="h4">{selectedExperience.role}</Typography>
              <Typography variant="h6">
                {selectedExperience.location} | {selectedExperience.dates}
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedExperience.description}
              </Typography>
              {selectedExperience.bullets.length > 0 && (
                <Box sx={{ mb: 2 }}>
                  {selectedExperience.bullets.map((bullet, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                      {bullet}
                    </Typography>
                  ))}
                </Box>
              )}
              <div className="Experience-skills">
                {selectedExperience.skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    sx={{ 
                      margin: "2px",
                      backgroundColor: 'transparent',
                      border: '1px solid #0BECE5',
                      color: '#0BECE5',
                    }} 
                  />
                ))}
              </div>
              {selectedExperience.link && (
                <Button
                  variant="contained"
                  href={selectedExperience.link}
                  target="_blank"
                  sx={{ 
                    marginTop: "10px",
                    backgroundColor: '#0BECE5',
                    color: '#0E1111',
                    '&:hover': {
                      backgroundColor: '#0BECE5',
                      opacity: 0.9,
                    }
                  }}
                >
                  Learn More
                </Button>
              )}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
});

Experience.propTypes = {
  // ... your prop types ...
};

export default Experience;
