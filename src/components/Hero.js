import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ["CS @ University of Waterloo", "Computer Vision + Back-End @ Martinrea", "Software Engineer Intern @ Finastra", "Co-Founder, Director of Tech @ Wat Street"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000
        });

        // Destropying
        return () => {
        typed.destroy();
        };
    }, []);

    return ( 
        <div className='App-header'>
        <main>
            <h1>
                Hi there, I'm Jaimil Dalwadi     <span class="wave">👋🏼</span>
            </h1>
            <h4>
                <span ref={el}></span>
            </h4>
            
            <Stack direction="row" spacing={1} >
                <IconButton aria-label="mail" sx={{ color: '#0BECE5' }} size = "large" href="mailto:jaimil.dalwadi@uwaterloo.ca" target="_blank">
                    <EmailIcon />
                </IconButton>

                <IconButton aria-label="call" sx={{ color: '#0BECE5' }} size = "large" href="tel:+16479820821" target="_blank">
                    <PhoneIcon />
                </IconButton>

                <IconButton aria-label="github" sx={{ color: '#0BECE5' }} size = "large" href="https://github.com/theDe-bugger/" target="_blank">
                    <GitHubIcon />
                </IconButton>

                <IconButton aria-label="linkedin" sx={{ color: '#0BECE5' }} size = "large" href="https://linkedin.com/in/jaimil-dalwadi" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                
            </Stack>
        </main>
        </div>    
    );
}

export default Hero;