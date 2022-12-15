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
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router';
import Script from "next/script"
import Snackbar from '@mui/material/Snackbar';
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useForm } from "react-hook-form";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

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

 const [state, setState] = useState({ sub_status: 'Register', disable_status: false, err_message: '',  open: false, vertical: 'top', severity:'success', horizontal: 'right', });
 
 const { err_message, disable_status, sub_status, severity, vertical, horizontal, open } = state;

const { register, watch, formState: { errors }, handleSubmit, reset, setValue, getValues } = useForm({
    mode: "onChange"});
	
	const onSubmit = (data) => {
		setState({ ...state, sub_status: 'Submitting.......', disable_status: true });
		
		axios.post(`${process.env.dbname}/ecoflux/api/register/` , data).then(function(response){
			
			if(response.data.status==1){
				setState({ ...state, open: true, severity:'error', sub_status: 'Register', disable_status: false, err_message: response.data.message });
			}
			else if(response.data.status==2){
				setState({ ...state, open: true, severity:'error', sub_status: 'Register', disable_status: false, err_message: response.data.message });
			}
			else if(response.data.status==3){
				setState({ ...state, open: true, severity:'error', sub_status: 'Register', disable_status: false, err_message: response.data.message });
			}
			else if(response.data.status==4){
				setState({ ...state, open: true, severity:'success', sub_status: 'Register', disable_status: false, err_message: response.data.message });
			}else{
				setState({ ...state, open: true, severity:'error', sub_status: 'Register', disable_status: false, err_message: response.data });
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
		<title>Ecoflux | Register</title>
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
		<meta name="description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Ecoflux" />
		<meta property="og:description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:url" content="https://ecoflux.com/register" />
		<meta property="og:site_name" content="Ecoflux" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="Ecoflux" />
		<meta name="twitter:description" content="Africa's No 1 Solar Marketplace" />
		<meta name="twitter:image" content="https://ecoflux.com/log.png" />
		<meta name="theme-color" content="#a9cf46" />
		<meta name="keywords" content="" />
		<script id="my_first_script" type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Website",
				"url": "https://ecoflux.com/",
				"potentialAction": { "@type": "SearchAction", "target": "https://ecoflux.com/{search_term_string}/", "query-input": "required name=search_term_string" },
			  }),
			}}
		/>
		<script id="my_second_script" type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Orgnaization",
				"url": "https://ecoflux.com/",
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
								<h1 className="text-dark">Sign Up</h1>
                            </div>
							<div className="mt-1">
								<form onSubmit={handleSubmit(onSubmit)} className="m-3">

									<div className="mb-3">
										<FormControl fullWidth>
											<Input type="email" placeholder="Email Address" label={'margin="dense"'} id="input-with-icon-adornment" startAdornment={ <InputAdornment position="start"> <EmailIcon /> </InputAdornment> } {...register("email", { required: "Email is required", validate: (value) => value.includes("@", ".") || "Email must include '@' and '.' symbol"  })} />
											{errors.email  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.email.message} </div>}
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth>
										<Input type="text" name="name" id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Full name" {...register("name", { required: true })} startAdornment={ <InputAdornment position="start"> <PersonIcon /> </InputAdornment> } />
										{errors.name?.type === 'required' && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Name is required</div>}
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth>
										<Input type="number" name="phone" id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Mobile" {...register("phone", { required: true, minLength: 11, maxLength:11 })}  startAdornment={ <InputAdornment position="start"> <PhoneIcon /> </InputAdornment> } />
										
											{errors.phone?.type === 'required' && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Phone is required</div>}
											{errors.phone?.type === 'minLength' && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Minimum input is 11 characters</div>}
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth>
										<Input type="password" name="password" id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Password" {...register("password", { required: true, minLength: 6, pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/, message: 'Password must contain 1 Uppercase letter, 1 Lowercase, 1 Digit and 1 Special character ',}, })}  startAdornment={ <InputAdornment position="start"> <LockIcon /> </InputAdornment> } />
											
											{errors.password?.type === 'required' && (<div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Password is required </div>) }
											{errors.password?.type === 'minLength' && (<div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Minimum character is 6 </div>) }
											{errors.password && (<div className='text-danger mt-1'> {errors.password.message} </div>) }
										</FormControl>
									</div>
									
									<div className="mt-4">
										<FormControl fullWidth>
										<Input type="password" name="confirmpassword" id="input-with-icon-adornment" label={'margin="dense"'} margin="dense" placeholder="Confirm Password" {...register("confirmpassword", { required: "Please confirm password!", validate: { matchesPreviousPassword: (value) => { const { password } = getValues(); return password === value || "Password confirmation does not match"; }} })} startAdornment={ <InputAdornment position="start"> <LockIcon /> </InputAdornment> } />
										{errors.confirmpassword  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.confirmpassword.message} </div>}
										</FormControl>
									</div>
									
									<div className="mt-3">
									By signing up {`you've`} agreed to our <Link href="/"><a style={{ textDecoration : "none", color: "#a9cf46"  }}>Terms & Conditions</a></Link> and <Link href="/"><a style={{ textDecoration : "none", color: "#a9cf46" }} >Privacy policy</a></Link>
                                    </div>
									
									<div className="mt-3 d-grid">
									      <ColorButton color="success" disabled={disable_status} type="submit" variant="contained">{sub_status}</ColorButton>
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
