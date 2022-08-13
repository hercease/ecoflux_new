import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import OutlinedInput from '@mui/material/OutlinedInput';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: "#a9cf46",
  color : "white",
  '&:hover': {
    backgroundColor: green[700],
  },
}));

export default function Register() {
	const router = useRouter();
	
  return (
	<>
	
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Register</title>
		<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
	</Head>
	<div className="container">
		<div className="row align-items-center vh-100">
			<div className="col-md-4 offset-md-4">
				<div className="card border-0">
					<div className="card-body">
						<div className="mb-3 mb-md-3 mt-auto">
                            <a href="#" className="">
                                <img src="log.png" alt="" height="60" className="text-center" />
                            </a>
                        </div>
						<div className="mt-auto">
							<div className="ms-auto p-2">
								<h1 className="text-dark">Sign Up</h1>
                            </div>
							<div className="mt-1">
								<form className="m-3">

									<div className="mb-3">
										<FormControl fullWidth>
											<Input placeholder="Email Address" label={'margin="dense"'} required id="input-with-icon-adornment" startAdornment={ <InputAdornment position="start"> <AccountCircle /> </InputAdornment> } />
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth>
										<Input id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Full name" startAdornment={ <InputAdornment position="start"> <LockIcon /> </InputAdornment> } />
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth>
										<Input type="number" id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Mobile" startAdornment={ <InputAdornment position="start"> <PhoneIcon /> </InputAdornment> } />
										</FormControl>
									</div>
									
									<div className="mt-2">
										By sign up you've agreed to our <Link href="/"><a style={{ textDecoration : "none", color: "#a9cf46"  }}>Terms & Conditions</a></Link> and <Link href="/"><a style={{ textDecoration : "none", color: "#a9cf46" }} >Privacy policy</a></Link>
                                    </div>
									
									<div className="mt-3 d-grid">
									      <ColorButton color="success" type="submit" variant="contained">Register</ColorButton>
                                    </div>
									
									<div className="mt-4 text-center">
									    Joined us before ? <Link href="/login"><a style={{ textDecoration:"none" }} className="text-success"> Login</a></Link>
                                    </div>
								</form>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
   
    </>
  )
}
