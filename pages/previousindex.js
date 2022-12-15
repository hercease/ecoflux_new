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
import Carousel from "../components/carousel.js"
import Footer from "../components/footer.js"
import Carousel from 'react-elastic-carousel'
import {consts} from 'react-elastic-carousel'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import CircleIcon from '@mui/icons-material/Circle';
import axios from "axios";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

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
  borderRadius : "33px",
  '&:hover': {
    backgroundColor: green[700],
  },
}));

const ColorButtonSecond = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: "#4e5a62",
  textTransform: 'none',
  padding: '6px 10px',
  color : "white",
  borderRadius : "33px",
  fontSize : 12,
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

export default function Home({data}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	
function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

const user = data

console.log(user)

 const myArrow = ({ type, onClick, isEdge }) => {
      const pointer = type === consts.PREV ? '👈' : '👉'
      return (
        <Button onClick={onClick} disabled={isEdge}>
          {pointer}
        </Button>
      )
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
	
	<Navbar user={user} />
	
	<div className="container-fluid mb-md-0 py-5 hero">
		<div className="container">
			<div className="align-items-center p-4 p-md-5 rounded text-bg-white">
				<div className="col-md-6 px-0">
					<h2 className="fw-bold">Online solar Marketplace for Africans seeking to meet their energy needs</h2>
					<p className="py-2">Ecoflux helps businesses and Individuals in Africa meet their energy needs using `renewable` Solar energy</p>
					<ul>
						<li>Ecoflux energy calculator</li>
						<li>Flexible Payment Plan (Pay Small Small)</li>
						<li>Energy as a Service(EAAS)</li>
						<li>Affiliate Program</li>
					</ul>
					
					<Stack spacing={1} direction="row">
						<ColorButtonSecond fontSize="small" variant="contained">Energy Audit</ColorButtonSecond>
						<ColorButton fontSize="small" variant="contained">Request for Installation</ColorButton>
					</Stack>
				
				</div>
			</div>
		</div>
	</div>
	
	<div style={{ background : 'white' }} className="container-fluid mb-md-0  py-5">
	<div className="container">
		<div className="row align-items-center h-100">
			<div className="col-md-6">
				<h2 className="fw-bold">Energy Assessment</h2>
				<p className="py-2">Do a self-assessment of your energy needs and {`let's`} recommend a custom energy solution for you. With our solar calculator, you can directly calculate the power consumption of your devices and the total number of lightning hours. </p>
				
				<Stack spacing={2} direction="row">
				  <ColorButtonSecond variant="contained">Start now</ColorButtonSecond>
				</Stack>
				
			</div>
			<div className="col-md-6 mt-2">
				<div className="d-flex">
					<div style={{ marginLeft:"20px 0px 0px 0px" }}>
						<Image width={200} height={300} alt="image" className="img-fluid w-100" style={{ borderRadius: "50px 50px 50px 50px" }} src="/energy-assement-ecofluxng.jpg" />
					</div>
					<div style={{ margin:"50px 0px 0px 50px" }}>
						<Image width={200} height={300} alt="image" className="img-fluid w-100" style={{ borderRadius: "50px 50px 50px 50px", marginLeft: "10px" }} src="/energy-assement2-ecofluxng.jpg" />
					</div>
				</div>
			</div>
			
			
		</div>
	 </div>
		<br />
	</div>
	
	<div style={{ background : '#4e5a62' }} className="container-fluid mb-md-0 py-5">
		<div className="container">
			<div className="row align-items-center h-100">
				<div className="col-md-6 col-xl-5 justify-content-center">
					<Image width={400} height={250} alt="image" className="img-fluid w-100" style={{ borderRadius: "50px 50px 50px 50px" }} src="/affordable-energy.jpg" />
				</div>
				<div className="col-md-6 col-xl-7 py-3">
					<h2 style={{ color : "#a9cf46" }} className="fw-bold">Simplifying Access to Affordable and Reliable Energy</h2>
					<p className="py-2 text-light">With Ecoflux, you can experience a 24/7 electricity supply, power all your gadgets and equipments. You never get to worry about the increasing cost of fueling or the defeaning noise of your generators!</p>
					<p className="text-light">Ecoflux is poised to disrupt the energy industry with its innovation-driven solution that enables Africans to make a self-assessment of their energy needs, place an order online for their solar power components and get their products delivered at competitive prices, without stress.</p>
					
					
					<Stack spacing={2} direction="row">
					  <ColorButton variant="contained">Learn More</ColorButton>
					</Stack>
				</div>
			</div>
		</div>
		<br />
	</div>
	
	<div style={{ background : '#eeeeee00' }} className="container-fluid mb-md-0 py-5">
		<div  className="container">
			<div className="row align-items-center h-100">
				<div className="col-md-7 col-xl-7">
					<h2 style={{ color : "#a9cf46" }} className="fw-bold">Energy As a Service (EAAS)</h2>
					<p className="py-2">At Ecoflux, we take care of all your energy power and energy concerns by empowering your homes, stores and businesses withour clean energy solutions. By selecting our Energy as a Service EAAS option, you are guaramteed clean and reliable power without the burden and hassle of installing, maintaining or even owning a solar/powe solution. Begin to enjoy power today at zero upfront cost. You only pay an agrees tariff based on the solution deployed.</p>
					
					<Stack spacing={2} direction="row">
					  <ColorButtonSecond variant="contained">Get Started Now</ColorButtonSecond>
					</Stack>
				</div>
				<div className="col-md-5 col-xl-5 py-3">
					<Image width={400} height={250} alt="image" className="img-fluid w-100" style={{ borderRadius: "50px 50px 50px 50px" }} src="/energy-as-a-service.jpg" />
				</div>
			</div>
		</div>
		
	</div>
	
	<div style={{ background : 'rgb(232 255 171)' }} className="container-fluid py-5">
		<div  className="container">
			<div className="row align-items-center h-100">
				<div className="col-md-5 col-xl-5">
					<Image width={400} height={250} alt="image" className="img-fluid w-100" style={{ borderRadius: "50px 50px 50px 50px" }} src="/payment-plan-solar-ecofluxng.jpg" />
				</div>
				<div className="col-md-7 col-xl-7">
					<h2 style={{ color : "#4e5a62" }} className="fw-bold">Flexible Payment Plan(Pay Small Small)</h2>
					<p className="py-2">Our Pay As You Go payment model empowers our customers to pay in instalments by spreading the payments over a period of time</p>
					
					<Stack spacing={2} direction="row">
					  <ColorButtonSecond variant="contained">Start Now</ColorButtonSecond>
					</Stack>
				</div>
			</div>
		</div>
		
	</div>
	
	<div style={{ background : '#fff8fa' }} className="container-fluid justify-content-md-center mb-md-0 py-5">
		<div  className="container">
			<div className="row align-items-center justify-content-md-center vh-75">
				<div className="col-md-6 col-xl-6">
					<h2 className="fw-bold text-center">Our Testimonials</h2>
					<p className="py-2 text-center"></p>
				</div>
			</div>
			<div className="row align-items-center justify-content-md-center">
				<div className="col-md-12">
					<Carousel breakPoints={breakPoints} showArrows={false} renderArrow={myArrow}
						renderPagination={({ pages, activePage, onClick }) => {
							return (
							  <div className="d-flex">
								{pages.map(page => {
								  const isActivePage = activePage === page
								  return (
									<CircleIcon
									  key={page}
									  onClick={() => onClick(page)}
									  active={`$isActivePage`}
									  sx={{ color: "#b4ff00" }}
									/>
								  )
								})}
							  </div>
							)
						  }}
					    >
						<div style={{ borderRadius: "20px 20px 20px 20px" }} className="card border-0 bg-light">
							<div className="card-body">
								<div className="text">Hello everybody, hope you are doing good at all times, i so much love this platform so much that i can not take my eyes off it any seconds</div>
								<div className="d-flex bd-highlight">
									<div className="p-2 flex-fill bd-highlight">
										<Image objectFit="cover" width="60px" height="60px" alt="image" className="rounded-circle border border-3 border-success" src="/favicon/android-chrome-192x192.png" />
									</div>
									<div className="p-2 flex-fill bd-highlight">
										<h6 className="my-0">Temitayo Ayodele</h6>
										<p>Delar Incoporation</p>
									</div>
									<div className="p-2 flex-fill bd-highlight">
										<FormatQuoteRoundedIcon fontSize="large" sx={{ fontSize: 60, color:"#b4ff00" }} />
									</div>
								</div>
								
							</div>
						</div>
						<div className="card bg-light rounded-pills">
							<div className="card-body">
								2
							</div>
						</div>
						<div className="card bg-light rounded-pills">
							<div className="card-body">
								3
							</div>
						</div>
						<div className="card bg-light rounded-pills">
							<div className="card-body">
								4
							</div>
						</div>
						<div className="card bg-light rounded-pills">
							<div className="card-body">
								5
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	</div>
	
	<Footer />
	

<Script id="jquery_script" src="js/jquery-3.5.0.min.js" type="text/javascript"></Script>
<Script id="bootstrap_script" src="js/bootstrap.bundle.js" type="text/javascript"></Script>
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

li::marker 
{
    font-size: 1.5rem;
    font-weight: bolder;
}

.hero{
	background-image: linear-gradient(to right,rgb(255 255 255),#3fff0000),url(/slider-1-ecofluxng.jpg);
	background-size : cover
}

.my_image{
	border: 3px solid #dee2e6!important;
}
	
`}
</style>
   
    </>
  )
}


export async function getServerSideProps(context) {
	
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
