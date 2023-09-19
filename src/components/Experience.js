import React from 'react'
import "./css/Experience.css"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
export default function Experience() {
  return (
    <div className="Experience">
        <div className='Experience-header'>
          <h1>
              Experience
          </h1>
        </div>
        <div className='Experience-cards'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
            <Grid item xs={2} sm={4} md={4} key={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.PUBLIC_URL + "/img/martinrea.png"}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Computer Vision and Back-End Intern
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Martinrea International Inc.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Built and deployed computer vision models on the production line for a car parts manufacturing company (TSE: MRE).
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stack: Python, PyTorch, OpenCV, NumPy, Django, Docker, Bash, Git
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="link" size="small" as="a" href="https://www.martinrea.com" target="_blank">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4} key={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.PUBLIC_URL + "/img/finastra.jpeg"}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Software Engineer Intern
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Finastra
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Developed web-app and optimized services for Canada's top mortgage tool used by 20,000+ brokers.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stack: JavaScript, TypeScript, Vue.js, Vuex, Express.js, PostgreSQL
                  </Typography>
                </CardContent>
                <CardActions>
                <Button className="link" size="small" as="a" href="https://www.finastra.com/" target="_blank">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4} key={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.PUBLIC_URL + "/img/waterloo.jpeg"}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Co-Founder and Director of Technology
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Wat Street Engineering Design Team
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created first quantitative finance design team at the University of Waterloo. We analyze + predict markets and advise real-world clients.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stack: Python, NumPy, Seaborn, Pandas, React.js, Express.js
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="link" size="small" as="a" href="https://www.linkedin.com/company/wat-street/" target="_blank">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4} key={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.PUBLIC_URL + "/img/speakfluent.jpeg"}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Full-Stack Developer Intern
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Speak Fluent
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created a demo web-app that uses Google Cloud Text-to-Speech to analyze and provide feedback on user speech.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stack: React.js (Next.js), Python (Flask), Google Cloud API
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="link" size="small" as="a" href="https://www.speakfluent.ca/" target="_blank">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4} key={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.PUBLIC_URL + "/img/youthculture.png"}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Technical Project Manager
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Youth Culture Inc.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Supervised and managed summer interns as they built technical projects. Hosted Hack To Tomorrow (with TD) for 70+ participants.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stack: WordPress, HTML/CSS, Git, Figma
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="link" size="small" as="a" href="https://youthculture.com/" target="_blank">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            
            <Grid item xs={2} sm={4} md={4} key={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.PUBLIC_URL + "/img/wizkid.jpeg"}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Coding Instructor
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Wiz Kid Learning
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Taught multiple classes to kids aged 6-12 about topics such as web-development, game-development (Roblox), and more.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stack: HTML/CSS, JavaScript, Roblox Studio
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className="link" size="small" as="a" href="https://www.wizkidlearning.com/" target="_blank">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

          
        </Grid>
        
        </div>
        
    </div>
  )
}
