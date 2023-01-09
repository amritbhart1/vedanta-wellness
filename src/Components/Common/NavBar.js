import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPhone} from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import './NavBar.css';














interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['About us', 'Ayurvedic Therapies', 'Diseases & Treatments', 'Membership', 'Contact Us', 'Blogs'];


export default function DrawerAppBar(props:Props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className='nav-full' sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

return (
    <Box className="navbar-full" >
      
      <AppBar position="static" className='navbar-first'>
        <Toolbar className='left-icons'>
          <Typography className="Number" variant="h6" component="div" >
          <img src='./images/phone-icon.png' className="navfirst-icons" alt="no images"/>
          +91-9811669606 
        </Typography>
        <Typography className="Email" variant="h6" component="div" >
        <img src='./images/envelop-icon.png' className="navfirst-icons" alt="no images"/>info@vedanta-wellness.com
        </Typography>
        <Typography className="Sentence" variant="h6" component="div" >
        <img src='./images/address-icon.png' className="navfirst-icons" alt="no images"/>Click here to find the location
        </Typography>
        <Stack className="socialmedia-icon" direction="row" spacing={2}>
        <Button color="inherit" className='facebook'><FaFacebookF/></Button>
        <Button color="inherit" className='twitter'> <FaTwitter/></Button>
        <Button color="inherit" className='linkedinin'><FaLinkedinIn/></Button>
        </Stack>
        </Toolbar>




      


        </AppBar>


     
      {/* --------------------------------------------------------second nav---------------------------------------------------- */}

      <AppBar className="second-nav" component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
           <img src='./images/logo.png' alt=''/>
            <Box sx={{ display: { xs: 'none', sm: 'block', justifyItems:'Left', marginRight:'auto'} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box className='scn-btn'><Link className="btn-text">Book an Appointment</Link></Box>
        </Toolbar>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         
        </Typography>
      </Box>
      
   
    </Box>

  );
}
