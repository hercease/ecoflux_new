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
import Script from "next/script"

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
		<Script type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Website",
				"url": "https://ecoflux.com/register",
				"potentialAction": { "@type": "SearchAction", "target": "https://ecoflux.com/{search_term_string}/", "query-input": "required name=search_term_string" },
			  }),
			}}
		/>
		<Script type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Orgnaization",
				"url": "https://ecoflux.com/register",
				"name": "Ecoflux",
				"logo": "https://ecoflux.com/log.png"
			  }),
			}}
		/>
	</Head>
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
									By signing up {`you've`} agreed to our <Link href="/"><a style={{ textDecoration : "none", color: "#a9cf46"  }}>Terms & Conditions</a></Link> and <Link href="/"><a style={{ textDecoration : "none", color: "#a9cf46" }} >Privacy policy</a></Link>
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
