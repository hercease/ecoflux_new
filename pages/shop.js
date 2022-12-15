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
import Footer from "../components/footer.js"
import Divider from '@mui/material/Divider';
import axios from "axios";

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 10px',
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

export default function Services({data}){
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	
function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

const user = data

  return (
	<>
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Shop</title>
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
	
	<Navbar user={user}  />
	
	<div className="container-fluid mb-md-0 py-5">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="align-items-center p-4 p-md-5 rounded text-bg-white">
						<h2 style={{ color : "#4e5a62" }} className="fw-bold">Produce Your Own Clean Energy to Save the Environment</h2>
						<p className="font-weight-bold my-3 mt-2">Solar is a great alternative for anyone who values independence and efficiency. Start using flexible, lightweight solar now.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="align-items-center p-4 p-md-5 rounded text-bg-white">
						<h2 style={{ color : "#4e5a62" }} className="fw-bold">Produce Your Own Clean Energy to Save the Environment</h2>
						<p className="font-weight-bold my-3 mt-2">Solar is a great alternative for anyone who values independence and efficiency. Start using flexible, lightweight solar now.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div style={{ background : '#f4f9e7' }} className="container-fluid mb-md-0 py-5">
		<div className="container justify-content-md-center">
			<div className="row align-items-center justify-content-md-center vh-75 mb-3">
				<div className="col-md-6 col-xl-6">
					<h2 style={{ color: '#a9cf46'  }} className="fw-bold text-center">Featured Complete Solution</h2>
					<h6 className="py-1 text-center">Power your home with our range of products</h6>
				</div>
			</div>
			<div className="row align-items-center justify-content-md-center">
			
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-0">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/affordable-energy.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center price"> 
								<div className="font-weight-bold">4500 uah</div>
								<div className="font-weight-bold">4500 uah</div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/SOlar-installation-ecofluxng.jpg" />
							</div>
							<div className="position-absolute top-0 start-0"><span className="badge bg-light rounded-pill text-dark ms-2">Solar panel</span></div>
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="font-weight-bold">MonoPv300watts</div>
								<div className="font-weight-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/SOlar-installation-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="font-weight-bold">MonoPv300watts</div>
								<div className="font-weight-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="font-weight-bold">MonoPv300watts</div>
								<div className="font-weight-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</div>
	</div>

	<div style={{ background : '#fff8fa' }} className="container-fluid justify-content-md-center mb-md-0 py-5">
		<div  className="container">
			<div className="row align-items-center justify-content-md-center vh-75">
				<div className="col-md-8 col-xl-8">
					<h2 className="fw-bold text-center">SHOP</h2>
					<h6 className="py-2 text-center">Power your home with our range of products</h6>
				</div>
			</div>
			<div className="row align-items-center justify-content-center text-center">
				<div className="d-flex align-items-center justify-content-center flex-wrap mb-3">
					<Button variant="contained" className="mb-3 ms-2" color="success" size="small">Solar Panel</Button>
					<Button variant="contained" className="mb-3 ms-2" color="success" size="small">Solar Panel</Button>
					<Button variant="contained" className="mb-3 ms-2" color="success" size="small">Solar Panel</Button>
					<Button variant="contained" className="mb-3 ms-2" color="success" size="small">Solar Panel</Button>
					<Button variant="contained" className="mb-3 ms-2" color="success" size="small">Solar Panel</Button>
					<Button variant="contained" className="mb-3 ms-2" color="success" size="small">Solar Panel</Button>
				</div>
			</div>
			<div className="row align-items-center justify-content-md-center">
			
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
		
					<div className="grid_item">
						<figure>
							<a href="product/908762">
								<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
									<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
								</div>
							</a>
						</figure>
						<a href="product-detail-product-908762">
							<h3>Apple iPhone 13 (128GB) </h3>
						</a>
					</div>
					
					
					
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
				
				<div className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
					<div className="card align-items-center justify-content-md-center bg-light border-4 rounded-bottom rounded-3">
						
							<div style={{ width: '100%', height: '150px', position: 'relative', margin:"0px 0px 0px 0px" }}>
								<Image alt="image" layout='fill' objectFit="cover" src="/energy-assement-ecofluxng.jpg" />
							</div>
						
							<div className="card-body pt-3">
								<div className="align-items-center text-center"> 
								<div className="fw-bold fs-6">MonoPv300watts</div>
								<div className="fw-bold"><h6>&#8358;10,000</h6></div>
							</div>
						</div> 
					</div>
				</div>
					
			</div>
			<div className="row align-items-center justify-content-md-center">
				<div className="col-md-12 text-center">
					<Link href="/register"><ColorButton variant="contained" className="justify-content-center">View all</ColorButton></Link>
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
	
	<Footer />
	

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
  border-radius: 50px 50px 50px 50px;
   background: -moz-linear-gradient(top, rgba(11,102,75,0.5) 0%, rgba(220, 66, 37, 0.5) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(220, 66, 37, 0.5)), color-stop(100%,rgba(0,47,75,0.5))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* IE10+ */
  background: linear-gradient(to bottom,rgba(30,75,0,0) 0%,rgb(41 255 37)100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}
.img-gradient img{
  display:block;
}

.hero{
	background-image: linear-gradient(to right,rgb(255 255 255),#3fff0000),url(/masthead-services-ecofluxng.jpg);
	background-size : cover
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: x-large;
  z-index:100000
}

/*.card-img img{padding-top: 10px;width: 100%;height: 150px;object-fit: contain;display: block}*/

.grid_item {
    margin-bottom: 25px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

.grid_item figure img:nth-child(1) {
    visibility: visible;
    opacity: 1;
    transform: translateZ(0);
}

.grid_item figure {
    position: relative;
    overflow: hidden;
    -moz-transition: all 0.7s ease;
    -o-transition: all 0.7s ease;
    -webkit-transition: all 0.7s ease;
    -ms-transition: all 0.7s ease;
    transition: all 0.7s ease;
}

.grid_item a h3 {
    font-size: 14px;
    font-size: 0.875rem;
    margin: 3px 0 0 0;
    color: #444;
    font-weight: 500;
    display: inline-block;
}
	
`}
</style>
   
    </>
  )
}

export async function getServerSideProps(context){
	
const cookies = context.req.cookies['ecotoken'] || ""

try {
	
    const res = await axios.get(`${process.env.dbname}/ecoflux/api/fetchprofile/${cookies}`);
	
	if(!res.data.result){
		return {
			props:{
				error :true
			}
		}
	}

	return {
		props: {
			data: res.data.result
		}
	};
  } catch (error) {
    console.log(error);
  }
}
