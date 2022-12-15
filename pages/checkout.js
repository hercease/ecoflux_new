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
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
		<title>Ecoflux | Products</title>
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
	
	<div className="container-fluid mb-md-0 py-5 bg-light">
		<div className="container">
			<div className="row">
				<div className="col-md-6 align-items-center align-self-center">
					<div className="align-self-center mt-4">
						<h2 style={{ color : "#4e5a62" }} className="fw-bold">Ecoflux Shop</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div className="container py-2">
		<div className="row">
			<nav style={{ bsBreadcrumbDivider: '.' }} aria-label="breadcrumb">
			  <ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark">Shop</a></li>
				<li className="breadcrumb-item" aria-current="page">Checkout</li>
			  </ol>
			</nav>
		</div>
	</div>
	
	<div className="container py-5">
		<div className="row mt-3 pb-3 justify-center-center">
			<div className="col-md-12">
				<div className="card shadow-none border-0 mb-0">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Order Summary</h4>
							<div className="table-responsive">
                                <table className="table align-middle mb-0 table-nowrap">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Product Desc</th>
                                            <th scope="col">Price</th>
                                        </tr>
									</thead>
                                    <tbody>
										<tr>
                                            <th scope="row">
												<Image width={"100%"} height={"150px"} alt="image" src="/energy-assement-ecofluxng.jpg" />
											</th>
                                            <td>
                                                <h5 className="font-size-14 text-truncate"><a href="#" className="text-dark text-decoration-none">Half sleeve T-shirt  (64GB) </a></h5>
                                                <p className="text-muted mb-0">$ 450 x 1</p>
                                            </td>
                                            <td>$ 450</td>
                                        </tr>
                                        <tr>
											<th scope="row">
												<Image width={"100%"} height={"150px"} alt="image" src="/energy-assement-ecofluxng.jpg" />
											</th>
                                            <td>
                                                <h5 className="font-size-14 text-truncate">
													<a href="#" className="text-dark  text-decoration-none">Wireless Headphone </a>
												</h5>
                                                <p className="text-muted mb-0">$ 225 x 1</p>
                                            </td>
                                            <td>$ 225</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <h6 className="m-0 text-end">Sub Total:</h6>
                                            </td>
                                            <td>
                                                $ 675
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <h6 className="m-0 text-end">Total:</h6>
											</td>
                                            <td>
												$ 675
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                   </div>
				</div>
			</div>
			<div className="row mt-4">
                <div className="col-sm-6">
                    <Link href="cart"><a className="btn text-muted d-none d-sm-inline-block btn-link text-decoration-none">
						<ArrowBackIcon /> Back to Shopping Cart </a></Link>
                </div>
                <div className="col-sm-6">
                    <div className="text-end">
                        <a href="" className="btn btn-success">
                        <LocalShippingIcon /> Proceed to Pay </a>
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

img {
  max-width: 100%; }

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

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

.btn-color{
	background-color: #a9cf46;
	color: black;
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

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }
	
`}
</style>
   
    </>
  )
}
