import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Typed from "typed.js";
import { useEffect, useState, useRef, forwardRef } from "react";

const Hero = forwardRef(function (props, ref) {
  const el = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading the app
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating a 2-second delay
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "CS @ University of Waterloo",
        "Software Engineer Intern @ Wambi",
        "Computer Vision + Back-End @ Martinrea",
        "Software Engineer Intern @ Finastra",
        "Co-Founder, Director of Tech @ Wat Street",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div ref={ref}>
      {isLoading ? (
        <div className="loading-screen">Loading...</div> // Show loading screen
      ) : (
        <div className="App-header">
          <main className="grid-container">
            <div className="App-info">
              <p style={{ fontSize: 64 }}>
                {" "}
                What's up
                <span class="wave">👋🏼</span>
              </p>

              <h1>I'm Jaimil Dalwadi</h1>
              <h4>
                <span ref={el}></span>
              </h4>

              <Stack
                direction="row"
                spacing={1}
                justifyContent="right"
                alignItems="right"
              >
                <IconButton
                  aria-label="mail"
                  sx={{ color: "#0BECE5" }}
                  size="large"
                  href="mailto:jaimil.dalwadi@uwaterloo.ca"
                  target="_blank"
                >
                  <EmailIcon />
                </IconButton>

                <IconButton
                  aria-label="call"
                  sx={{ color: "#0BECE5" }}
                  size="large"
                  href="tel:+16479820821"
                  target="_blank"
                >
                  <PhoneIcon />
                </IconButton>

                <IconButton
                  aria-label="github"
                  sx={{ color: "#0BECE5" }}
                  size="large"
                  href="https://github.com/theDe-bugger/"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  aria-label="linkedin"
                  sx={{ color: "#0BECE5" }}
                  size="large"
                  href="https://linkedin.com/in/jaimil-dalwadi"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </div>

            <div className="App-face">
              <img
                src={process.env.PUBLIC_URL + "/img/portrait.png"}
                alt="Jaimil"
              />
            </div>
          </main>
        </div>
      )}
    </div>
  );
});

export default Hero;
