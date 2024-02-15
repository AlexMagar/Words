import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <React.Fragment>
      <Toolbar 
        sx={{
          position: 'static',
          backgroundColor: '#525252',
          justifyContent: 'center',
          height: '8vh',
          color: '#fff'
        }}
      >
        &copy; copy right all reserved || Words
      </Toolbar>
    </React.Fragment>
  )
}
