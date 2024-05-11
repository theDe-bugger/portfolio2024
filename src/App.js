import "./App.css";
import { useRef, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./components/css/Navbar.css";

function App() {
  const homeSection = useRef(null);
  const experienceSection = useRef(null);
  const projectsSection = useRef(null);
  const pages = [
    { page: "Home", ref: homeSection },
    { page: "Experience", ref: experienceSection },
    { page: "Projects", ref: projectsSection },
  ];
  const [activeSection, setActiveSection] = useState("Home");

  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.offsetTop - 85, behavior: "smooth" });
  };
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const checkInView = () => {
    const rectHome = homeSection.current.getBoundingClientRect();
    const rectExperience = experienceSection.current.getBoundingClientRect();
    const rectProjects = projectsSection.current.getBoundingClientRect();
    if (rectHome.top < window.innerHeight - 80) {
      setActiveSection("Home");
    }
    if (rectExperience.top <= window.innerHeight - 80) {
      setActiveSection("Experience");
    }
    if (rectProjects.top <= window.innerHeight - 80) {
      setActiveSection("Projects");
    }
    // setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
  };
  useEffect(() => {
    checkInView();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", checkInView);
    return () => {
      document.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#0e1111",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              "& .MuiBox-root": {
                color: "#0BECE5",
              },
              textTransform: "none",
            }}
          >
            {/* <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="Debugger Logo"
              src={process.env.PUBLIC_URL + "logo.png"}
            />
          </IconButton> */}
            {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.page}
                    onClick={() => {
                      scrollHandler(page.ref.current);
                      setActiveSection(page.page);
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography
                      textAlign="center"
                      color={
                        activeSection === page.page ? "#0bece5" : "#fffbfc"
                      }
                    >
                      {page.page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <IconButton sx={{ p: 0 }} disabled>
              <Avatar
                alt="Debugger Logo"
                src={process.env.PUBLIC_URL + "logo.png"}
              />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.page}
                  onClick={() => {
                    // scrollHandler(page.ref.current);
                    handleCloseNavMenu();
                    // experienceSection.current.scrollIntoView({
                    //   behavior: "smooth",
                    //   block: "center",
                    // });
                    scrollHandler(page.ref.current);
                    setActiveSection(page.page);
                  }}
                  sx={{
                    my: 2,
                    color: activeSection === page.page ? "#0bece5" : "#fffbfc",
                    display: "block",
                    fontSize: "20px",
                    textTransform: "none",
                  }}
                >
                  {page.page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Hero ref={homeSection} />
      <Experience ref={experienceSection} />
      <Projects ref={projectsSection} />
    </div>
  );
}

export default App;
