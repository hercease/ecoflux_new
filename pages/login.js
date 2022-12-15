import React, { useRef, useState, useEffect, ReactDOM } from "react";
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
import Script from "next/script";
import Snackbar from '@mui/material/Snackbar';
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: "#a9cf46",
  color : "white",
  '&:hover': {
    backgroundColor: green[700],
  },
}));

export default function Login() {
	
	const router = useRouter();

 const [state, setState] = useState({ sub_status: 'Sign in', disable_status: false, err_message: '',  open: false, vertical: 'top', severity:'success', horizontal: 'right', });
 
 const { err_message, disable_status, sub_status, severity, vertical, horizontal, open } = state;

const { register, watch, formState: { errors }, handleSubmit, reset, setValue, getValues } = useForm({
    mode: "onChange"});
	
	const onSubmit = (data) => {
		setState({ ...state, sub_status: 'Checking.......', disable_status: true });
		
		axios.post(`${process.env.dbname}/ecoflux/api/login/` , data).then(function(response){
			
			if(response.data.status==1){
				setState({ ...state, open: true, severity:'error', sub_status: 'Login', disable_status: false, err_message: response.data.message });
			}
			else if(response.data.status==2){
				setCookie(null, 'ecotoken', response.data.message, { maxAge: 365 * 24 * 60 * 60, path: '/', })
				router.push('/products');
			}
			else if(response.data.status==4){
				setState({ ...state, open: true, severity:'error', sub_status: 'Sign in', disable_status: false, err_message: response.data.message });
			}
			else if(response.data.status==3){
				setState({ ...state, open: true, severity:'error', sub_status: 'Sign in', disable_status: false, err_message: response.data.message });
			}else{
				setState({ ...state, open: true, severity:'error', sub_status: 'Sign in', disable_status: false, err_message: response.data });
			}
			
        }); 		 
		
	
	}
	
const handleClose = () => {
	setState({ ...state, open: false });
};


	
  return (
	<>
		<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Login</title>
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
		<meta name="description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Ecoflux" />
		<meta property="og:description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:url" content="https://ecoflux.com/login" />
		<meta property="og:site_name" content="Ecoflux" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="Ecoflux" />
		<meta name="twitter:description" content="Africa's No 1 Solar Marketplace" />
		<meta name="twitter:image" content="https://ecoflux.com/log.png" />
		<meta name="theme-color" content="#a9cf46" />
		<meta name="keywords" content="" />
		<script type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Website",
				"url": "https://ecoflux.com/login",
				"potentialAction": { "@type": "SearchAction", "target": "https://ecoflux.com/{search_term_string}/", "query-input": "required name=search_term_string" },
			  }),
			}}
		/>
		<script type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Orgnaization",
				"url": "https://ecoflux.com/login",
				"name": "Ecoflux",
				"logo": "https://ecoflux.com/log.png"
			  }),
			}}
		/>
	</Head>
	
	<Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
		<MuiAlert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
			{err_message}
		</MuiAlert>
	</Snackbar>
		
	<div className="container">
		<div className="row align-items-center vh-100">
			<div className="col-md-4 offset-md-4">
				<div className="card border-0">
					<div className="card-body">
						<div className="mb-3 mb-md-3 mt-auto">
                            <div style={{ width: '200px', height: '60px', position: 'relative' }}>
                                <Image alt="image" src="/log.png" layout='fill' className="text-center" />
                            </div>
                        </div>
						<div className="mt-auto">
							<div className="ms-auto p-2">
								<h1 className="text-dark">Login</h1>
                            </div>
							<div className="mt-1">
								<form onSubmit={handleSubmit(onSubmit)}  className="m-3">
									<div className="mb-3">
										<FormControl fullWidth >
											<Input name="email" placeholder="Email ID" label={'margin="dense"'} id="input-with-icon-adornment" startAdornment={ <InputAdornment position="start"> <AccountCircle /> </InputAdornment> }  {...register("email", { required: "Email is required"  })} />
											
											{errors.email  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.email.message} </div>}
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth >
										<Input name="password" type="password" id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Password" startAdornment={ <InputAdornment position="start"> <LockIcon /> </InputAdornment> } {...register("password", { required: "Password is required"  })} />
										{errors.password  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.password.message} </div>}
										</FormControl>
									</div>
									
									<div style={{ marginLeft:"140px" }} className="mt-2">
									    <Link href="/forgot_password"><a style={{ textDecoration:"none" }} className="text-muted">Forgot Password?</a></Link>
                                    </div>
									
									
									<div className="mt-3 d-grid">
									      <ColorButton disabled={disable_status} color="success" type="submit" variant="contained">{sub_status}</ColorButton>
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
