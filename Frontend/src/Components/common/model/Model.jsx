import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {

  const [open, setOpen] = React.useState(false);
  const [count , setCount] = useState(3)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  setTimeout(()=>{
    window.location="/authentication";
  },3000)

  useEffect(() => {
    const s = setInterval(()=>{
        console.log("hello")
      setCount((prevState)=> prevState -1 )
    },1000)
  
    return () => {
      clearInterval(s)
    }
  }, [count])
  
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        keepMounted
        open={true}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Please Login for This Feature
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Redirecting To the Login Page In {count} seconds
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}