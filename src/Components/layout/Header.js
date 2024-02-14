import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

export const Header = () => {
  return (
    <React.Fragment>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton 
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1, textAlign:'left'}} >Words</Typography>
                <Button color='inherit'>SignIn</Button>
                <Button color='inherit'>Register</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
