import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Hero() {
    return ( 
        <div className='App-header'>
        <main>
            <h1>
                Hi there, I'm Jaimil Dalwadi     <span class="wave">👋🏼</span>
            </h1>
            <h2>Welcome to my workshop! </h2>
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="mail" color = "primary" size = "large" href="mailto:jaimil.dalwadi@uwaterloo.ca" target="_blank">
                    <EmailIcon />
                </IconButton>

                <IconButton aria-label="call" color = "primary" size = "large" href="tel:+16479820821" target="_blank">
                    <PhoneIcon />
                </IconButton>

                <IconButton aria-label="github" color = "primary" size = "large" href="https://github.com/theDe-bugger/" target="_blank">
                    <GitHubIcon />
                </IconButton>

                <IconButton aria-label="linkedin" color = "primary" size = "large" href="https://linkedin.com/in/jaimil-dalwadi" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                
            </Stack>
        </main>
        </div>    
    );
}

export default Hero;