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

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: "#a9cf46",
  color : "white",
  '&:hover': {
    backgroundColor: green[700],
  },
}));

export default function Login() {
	
  return (
	<>
	
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Login</title>
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
								<h1 className="text-dark">Login</h1>
                            </div>
							<div className="mt-1">
								<form className="m-3">
									<div className="mb-3">
										<FormControl fullWidth >
											<Input placeholder="Email ID" label={'margin="dense"'} required id="input-with-icon-adornment" startAdornment={ <InputAdornment position="start"> <AccountCircle /> </InputAdornment> } />
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth >
										<Input id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Password" startAdornment={ <InputAdornment position="start"> <LockIcon /> </InputAdornment> } />
										</FormControl>
									</div>
									
									<div style={{ marginLeft:"140px" }} className="mt-2">
									    <Link href="/forgot_password"><a style={{ textDecoration:"none" }} className="text-muted">Forgot Password?</a></Link>
                                    </div>
									
									
									<div className="mt-3 d-grid">
									      <ColorButton color="success" type="submit" variant="contained">Login</ColorButton>
                                    </div>
									
									<div className="mt-4 text-center">
									     New to Ecoflux ?<Link href="register"><a style={{ textDecoration:"none" }} className="text-success"> Register</a></Link>
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
