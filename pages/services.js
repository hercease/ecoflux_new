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
import { green, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Script from "next/script"
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from "../components/navbar.js"
import Divider from '@mui/material/Divider';

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
  textTransform: 'none',
  color : "white",
  fontSize : 12,
  width : 200,
  borderRadius : "33px",
  '&:hover': {
    backgroundColor: green[700],
  },
}));

const ColorButtonSecond = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: "#4e5a62",
  textTransform: 'none',
  color : "white",
  borderRadius : "33px",
  fontSize : 12,
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

export default function Services() {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	
function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

  return (
	<>
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Home</title>
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
		<meta name="description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Ecoflux" />
		<meta property="og:description" content="Africa's No 1 Solar Marketplace" />
		<meta property="og:url" content="https://ecoflux.com/" />
		<meta property="og:site_name" content="Ecoflux" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="Ecoflux" />
		<meta name="twitter:description" content="Africa's No 1 Solar Marketplace" />
		<meta name="twitter:image" content="https://ecoflux.com/log.png" />
		<meta name="theme-color" content="#a9cf46" />
		<meta name="keywords" content="" />
		<script id="first_header_script" type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Website",
				"url": "https://ecoflux.com",
				"potentialAction": { "@type": "SearchAction", "target": "https://ecoflux.com/{search_term_string}/", "query-input": "required name=search_term_string" },
			  }),
			}}
		/>
		<script id="second_header_script" type="application/ld+json"
			dangerouslySetInnerHTML= {{
				__html: JSON.stringify({
				"@context": "http://schema.org",
				"@type": "Orgnaization",
				"url": "https://ecoflux.com",
				"name": "Ecoflux",
				"logo": "https://ecoflux.com/log.png"
			  }),
			}}
		/>
	</Head>
	<Navbar />
	
	<div style={{ backgroundImage : `url('https://picsum.photos/1600/400')` }} className="container-fluid mb-md-0 py-5 hero">
		<div className="container">
			<div className="align-items-center p-4 p-md-5 rounded text-bg-white">
				<div className="col-md-6 px-0">
					<h2 style={{ color : "#4e5a62" }} className="fw-bold">Produce Your Own Clean Energy to Save the Environment</h2>
					<p className="font-weight-bold my-3 mt-2">Solar is a great alternative for anyone who values independence and efficiency. Start using flexible, lightweight solar now.</p>
				</div>
			</div>
		</div>
	</div>
	
	<div style={{ background : '#f4f9e7' }} className="container-fluid mb-md-0 py-5">
	<div  className="container justify-content-md-center">
		<div className="row align-items-center justify-content-md-center vh-75">
			<div className="col-md-6 col-xl-6">
				<h2 className="fw-bold text-center">Our Services</h2>
				<p className="py-2 text-center">Ecoflux helps businesses and individuals in Africa meet their energy needs using {'renewable'} Solar energy</p>
			</div>
		</div>
		<div className="row align-items-center justify-content-md-center">
			<div className="col-md-4 col-xl-4 mb-3">
				<div className="img-gradient">
					<Image alt="image" width={300} height={200} style={{ borderRadius: "50px 50px 50px 50px" }} className="text-center" src="https://picsum.photos/300/200?grayscale" />
				</div>
			</div>
			
			<div className="col-md-4 col-xl-4 mb-3">
				<div className="img-gradient">
					<Image alt="image" width={300} height={200} style={{ borderRadius: "50px 50px 50px 50px" }} className="text-center" src="https://picsum.photos/300/200" />
				</div>
			</div>
			<div className="col-md-4 col-xl-4 mb-3">
				<div className="img-gradient">
					<Image alt="image" width={300} height={200} style={{ borderRadius: "50px 50px 50px 50px" }} className="text-center" src="https://picsum.photos/300/200?grayscale" />
				</div>
			</div>
		</div>
	 </div>
		<br />
	</div>

	<div style={{ background : '#fff8fa' }} className="container-fluid justify-content-md-center mb-md-0 py-5">
		<div  className="container">
			<div className="row align-items-center justify-content-md-center vh-75">
				<div className="col-md-6 col-xl-6">
					<h2 className="fw-bold text-center">Produce Your Own Clean Energy</h2>
					<p className="py-2 text-center">Send a request and we will call you back</p>
				</div>
			</div>
			<div className="row align-items-center justify-content-md-center text-center">
			<div className="col-md-6">
				<div className="card bg-light rounded-pills">
					<div className="card-body">
						<form className="mb-4 my-4">
							<div className="row">

								<div className="col-md-6">
									<div className="md-form mb-0">
										<input type="text" id="name" name="name" className="form-control" placeholder="Name" />
										<label htmlFor="name" className=""></label>
									</div>
								</div>
								

								<div className="col-md-6">
									<div className="md-form mb-0">
										<input type="text" id="email" name="email" className="form-control" placeholder="Email" />
										<label htmlFor="email" className=""></label>
									</div>
								</div>

							</div>
							
							<div className="row">
								<div className="col-md-6">
									<div className="md-form mb-4">
										<input type="text" className="form-control" placeholder="Phone" />
									</div>
								</div>
								<div className="col-md-6 mb-0">
									<div className="md-form mb-0">
										<input type="text" className="form-control" placeholder="Interested In" />
									</div>
								</div>
							</div>
							
							<div className="row my-4">
								<div className="col-md-12">
									<ColorButton color="success" size="large" type="submit" variant="contained">SUBMIT INFO</ColorButton>
								</div>
							</div>
							
						</form>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>

	
	<div className="container-fluid mb-md-0 py-5 bg-dark">
		<div  className="container">
			<div className="row align-items-center vh-25">
				<div className="col-md-6 col-xl-6">
					<h1 style={{ color : "#a9cf46" }} className="mb-1 wb-bold">Want to power your home?</h1>
					<h6 className="text-white">Click on the button to get started</h6>
				</div>
				<div className="col-md-6 col-xl-6 text-center">
					<Link href="/services"><ColorButton variant="contained" size="large">Request for Service</ColorButton></Link>
				</div>
			</div>
		</div>
	</div>
	
	<footer className="page-footer font-small mdb-color pt-4" style={{ paddingLeft: "0px", background : '#4e5a62' }}>

      <div className="container text-md-left">

        <div className="row text-md-left mt-3 pb-3">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-capitalize mb-4 font-weight-bold">Company</h6>
            <p><a href="">About us</a></p>
			<p><a href="">How to buy and sell on Ecoflux</a></p>
			<p><a href="">Become a vendor</a></p>
			<p><a href="">Terms and Condition</a></p>
			<p><a href="">Privacy Policy</a></p>
			<p><a href="">Blogs</a></p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-capitalize mb-4 font-weight-bold">Offerings</h6>
            <p>
              <a href="#!">Energy Power Audit</a>
            </p>
            <p>
              <a href="#!">Our Services</a>
            </p>
            <p>
              <a href="#!">Our Products</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-capitalize mb-4 font-weight-bold">Get in touch</h6>
            <p>
              <a>123 Assbifi Road, Ikeja, Lagos, NG</a>
            </p>
            <p><a>+234 8034 451 220</a></p>
			<p><a>info@ecofluxng.com</a></p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-capitalize mb-4 font-weight-bold">Follow us</h6>
            <p className="text-white">
              <i className="fas fa-home mr-3 text-white"></i> {`Can't`} find what you looking for?
				<ColorButton variant="contained" size="large"><EmailIcon />Send us an Email</ColorButton>
			  </p>
			
          </div>
          
        </div>
        
      </div>
     

    </footer>
	

<Script  id="jquery_script" src="js/jquery-3.5.0.min.js" type="text/javascript"></Script>
<Script  id="bootstrap_script" src="js/bootstrap.bundle.js" type="text/javascript"></Script>
<Script id="my-script">{`document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open') })`}</Script>
<style jsx>{`

html,
body {
  overflow-x: hidden; /* Prevent scroll on narrow devices */
}

body {
  padding-top: 56px;
  background : blue;
}

@media (max-width: 991.98px) {
  .offcanvas-collapse {
    position: fixed;
    top: 56px; /* Height of navbar */
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: #f4f9e7;
    transition: transform .3s ease-in-out, visibility .3s ease-in-out;
  }
  .offcanvas-collapse.open {
    visibility: visible;
    transform: translateX(-100%);
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  color: rgba(255, 255, 255, .75);
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-underline .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
  color: #6c757d;
}

.nav-underline .nav-link:hover {
  color: #007bff;
}

.nav-underline .active {
  font-weight: 500;
  color: #343a40;
}

.text-white-50 { color: rgba(255, 255, 255, .5); }

.bg-purple { background-color: #6f42c1; }

@media screen and (max-width: 767px) {
.mobile-space {margin-bottom:100px}
}

@media screen and (max-width: 767px) {
.mobile {margin-top:-100px }
}

.page-footer a{
	text-decoration:none;
	color : white;
}
.page-footer h6{
	color : #c0de06;
}

.img-gradient{
  position:relative;
  display:inline-block;
}

.img-gradient:after {
  content: "";
    position: absolute;
    left: 0px;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
  border-radius: 0px 0px 50px 50px;
   background: -moz-linear-gradient(top, rgba(11,102,75,0.5) 0%, rgba(220, 66, 37, 0.5) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(220, 66, 37, 0.5)), color-stop(100%,rgba(0,47,75,0.5))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(30,75,0,0) 0%,rgba(40, 220, 37, 0.5) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}
.img-gradient img{
  display:block;
}


	
`}
</style>
   
    </>
  )
}
