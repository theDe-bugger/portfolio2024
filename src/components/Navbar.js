// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import "./css/Navbar.css";

// // import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Home", "Experience", "Projects"];

// function Navbar({ ref }) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const refs = props.refs;
//   const scrollFunc = props.scrollFunc;
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: "#0e1111",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{
//             "& .MuiBox-root": {
//               color: "#0BECE5",
//             },
//             textTransform: "none",
//           }}
//         >
//           {/* <IconButton sx={{ p: 0 }}>
//             <Avatar
//               alt="Debugger Logo"
//               src={process.env.PUBLIC_URL + "logo.png"}
//             />
//           </IconButton> */}
//           {/* <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography> */}

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <IconButton sx={{ p: 0 }}>
//             <Avatar
//               alt="Debugger Logo"
//               src={process.env.PUBLIC_URL + "logo.png"}
//             />
//           </IconButton>

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "center",
//             }}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={() => {
//                   scrollFunc(refs[pages.indexOf(page)]);
//                   handleCloseNavMenu();
//                 }}
//                 sx={{
//                   my: 2,
//                   color: "white",
//                   display: "block",
//                   fontSize: "20px",
//                   textTransform: "none",
//                 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;
