import React, { useRef, useState, useEffect, ReactDOM, Suspense } from "react";
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Script from "next/script"
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from "../components/navbar.js"
import Homecarousel from "../components/carousel.js"
import Owl from "../components/owl.js"
import Footer from "../components/footer.js"
import Carousel from 'react-elastic-carousel'
import {consts} from 'react-elastic-carousel'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { getCookies, getCookie, deleteCookie } from 'cookies-next';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import CircleIcon from '@mui/icons-material/Circle';
import axios from "axios";
import dynamic from 'next/dynamic';
import $ from 'jquery';
import Router, { useRouter } from 'next/router'

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

export default function Home({data,category}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	const router = useRouter();
	
function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

const user = data


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
 
	<Homecarousel />
	<Suspense fallback={<div>Loading...</div>}>
	<div style={{ background : 'white' }} className="container-fluid py-3">
		<div className="container">
		<div style={{ borderBottom:" solid 1px #dadada", marginBottom: "15px" }} className="d-flex">
		  <div className="p-2"><h4 className="">Featured products</h4></div>
		  <div className="ms-auto p-2 fw-bold"><Button onClick={() => router.push("/products")} variant="text">View all <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></Button></div>
		</div>
			<div className="row">
			{data?.length > 0 && data.map((item, key) => {
				return (
				<div key={key} className="col-6 col-md-4 col-xl-3">
					<div className="grid_item">
						<figure>
							<a onClick={() => router.push("/product/"+item.prod_id)}>
								<Image className="figure-img img-fluid" loader={() => `/${item.imagename}`} src={`/${item.imagename}`} height={300} width={300} />
							</a>
						</figure>
						<a onClick={() => router.push("/product/"+item.prod_id)}>
							<h3> {item.prod_name} </h3>
						</a>
					</div>
				</div>
			 );
			})}	
				
			</div>
		</div>
	</div>
	
	<div style={{ background : 'white' }} className="container-fluid py-4">
		<div className="container">
	<div className="item-lg">
		<article className="card card-banner" style={{ height:160, backgroundImage:'url(https://picsum.photos/200/200?grayscale)' }}>
			<div className="card-body caption">
				<h5 className="card-title mb-3"> Great offers {<br/>} just started now </h5>
				<a href="#" className="btn btn-sm btn-warning">Discover</a>
			</div>
		</article>
	</div>
	</div>
	</div>
	
	<div style={{ background : 'white' }} className="container-fluid">
		<div className="container">
			<div style={{ borderBottom:" solid 1px #dadada", marginBottom: "15px" }} className="d-flex">
		  <div className="p-2"><h4 className="">Featured Category</h4></div>
		  <div className="ms-auto p-2 fw-bold"><Button onClick={() => router.push("/category")} variant="text">View all <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></Button></div>
		</div>
		<Owl category={category} />
		</div>
	</div>
	

	
	<Footer />
	 </Suspense>
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

#carouselHero .carousel-item img {  
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  height:50vh;
}

.card-banner {
    display: flex;
    position: relative;
    overflow: hidden;
    border: 0;
    background: #0d6efd;
    background-size: cover;
    background-position: center center;
}

.card-banner .caption {
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    padding: 1.4rem;
    color: #fff;
}

.card-banner .card-body {
    background-size: cover;
    position: relative;
    z-index: 10;
}

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

export async function getServerSideProps({ query, req, res }){

	res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')
	
	const cookies = getCookie('ecotoken', { req, res });
  
  try{
	
	const page =  1
	const search = query.search || ""
	
	const [fetchproductsRes,fetchprofileRes,fetchcategoryRes] = await Promise.all([
    axios.get(`${process.env.dbname}/ecoflux/api/fetchproducts/${page}/${search}`),
    axios.get(`${process.env.dbname}/ecoflux/api/fetchprofile/${cookies}`),
    axios.get(`${process.env.dbname}/ecoflux/api/fetchallcategory/${page}/${search}`)
  ]);
  const [data, user, category] = await Promise.all([
    fetchproductsRes.data.result || [], 
    fetchprofileRes.data.result || [],
    fetchcategoryRes.data.result || []
  ]);
  return { props: { data, user, category } };
	
  } catch (error) {
    console.log(error);
  }
}
