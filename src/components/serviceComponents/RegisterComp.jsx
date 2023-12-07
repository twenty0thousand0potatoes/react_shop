import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './registerComponent.css';
import { Link } from 'react-router-dom';

const theme = createTheme();

const defaultDatas = {
  loginData: 'admin',
  passwordData: 'qwerty',
}

export default function RegisterComp() {

  const [link, setLink] = useState('')

  const funClick = () => {
    if (document.getElementById('login').value === defaultDatas.loginData) {
      if (document.getElementById('password').value === defaultDatas.passwordData) {
        setLink('/admin');
      }
    }
  };

  return (
    <div className='registerWrapper'>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className='avatar'></div>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                autoFocus
                onInput={funClick}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onInput={funClick}
              />
              <Link to={link} style={{ textDecoration: 'none' }} onClick={funClick}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enter
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}