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
import Script from "next/script"

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: "#a9cf46",
  color : "white",
  '&:hover': {
    backgroundColor: green[700],
  },
}));

export default function Forgot() {
	
  return (
	<>
	
		<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Forgot Password</title>
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
		<meta name="description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Ecoflux" />
		<meta property="og:description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:url" content="https://ecoflux.com/forgot_password" />
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
				"url": "https://ecoflux.com/forgot_password",
				"potentialAction": { "@type": "SearchAction", "target": "https://ecoflux.com/{search_term_string}/", "query-input": "required name=search_term_string" },
			  }),
			}}
		/>
		<Script type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Orgnaization",
				"url": "https://ecoflux.com/forgot_password",
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
								<h1 className="text-dark">Forgot Password</h1>
								<p>{`Don't worry,`} it happens. Please enter the address associated with your account</p>
                            </div>
							<div className="mt-1">
								<form className="m-3">

									<div className="mb-3">
										<FormControl fullWidth >
											<Input placeholder="Email ID" label={'margin="dense"'} required id="input-with-icon-adornment" startAdornment={ <InputAdornment position="start"> <AccountCircle /> </InputAdornment> } />
										</FormControl>
									</div>
									
									<div style={{ marginLeft:"100px" }} className="mt-2">
									    <Link href="/login"><a style={{ textDecoration:"none" }} className="text-muted">Remember Password?</a></Link>
                                    </div>
									
									
									<div className="mt-3 d-grid">
									      <ColorButton color="success" type="submit" variant="contained">Submit</ColorButton>
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
