import React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import './Subscribe.css';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';





function Subscribe() {
  return (
    <div className="subscribe">

      
      <Box className="nws-left">
        <Box className="subs" component='span'>
          <h1>SUBSCRIBE TO <br />
            {/* <hr id='hr'/> */}
            <Divider className="horizontal-rule" />
            <span>OUR </span>
            <span className="newsletter">NEWSLETTER</span>
          </h1>
        </Box>
      </Box>


      <Box className="nws-right">
        <Box component="form-last" noValidate autoComplete="off">
          <form className="subscribe-form">
            <div class="form-group">
              <label for="exampleInputEmail1" className="email-label">EMAIL</label><br />
              <input type="email" className="email" /><br />
              <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </Box>
      </Box>
    </div>

  )
}

export default Subscribe;