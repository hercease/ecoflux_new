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
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { getCookies, getCookie, deleteCookie } from 'cookies-next';
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Router, { useRouter } from 'next/router'

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

export default function Products({data, user}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	const router = useRouter();
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState(router.query['search'] || "");
	
	const refreshData = () => {
		router.replace(router.asPath);
	}
	const handleChange = (event, value) => {
		setPage(value);
		router.push({ pathname: '/products', query: { page: value, search : search } })
	};
	
		
	function Search(e){
		var s = e.target.value
		setSearch(s)
		router.push({ pathname: '/products', query: { page : page, search: s } })
	}
	

function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

const myLoader = ({ src, width, quality }) => {
  return `${process.env.dbname}/ecoflux/public/${src}?w=${width}&q=${quality || 75}`
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
	<div className="container-fluid bg-secondary py-5">
		<div className="d-flex flex-column align-items-center justify-content-center">
			<h3 className="fw-bold text-white text-capitalize mt-4 p-4">All Products</h3>
		</div>
	</div>
	
	<div className="container-fluid bg-light py-3">
		<div className="row">
		<div className="col-md-8">
			
		</div>
		<div className="col-md-4 float-end">
			<input type="search" onChange={Search} placeholder="Search Products" className="border-1 text-black form-control" />
		</div>
		</div>
	</div>
	
	<div className="container-fluid mb-md-0">
		<div className="container">

			<div className="row">
		
				{data?.length > 0 && data.map((item, key) => {
				return (
			
				<div key={key} className="col-6 col-md-3 col-lg-3 col-sm-4 mb-3">
						
					<div className="grid_item">
						<figure>
							<a onClick={() => router.push("/product/"+item.prod_id)}>
								<div style={{ width: '100%', height: "100px", position: 'relative', margin:"0px 0px 0px 0px" }}>
									<Image alt="image" loader={myLoader} layout='fill' objectFit="contain" src={item.imagename} />
								</div>
							</a>
						</figure>
						<a onClick={() => router.push("/product/"+item.prod_id)}>
							<h3> {item.prod_name} </h3>
						</a>
						<div className="price_box">
							<span className="new_price">&#8358;{item.price}</span>
						</div>
					</div>
					
				</div>
			  );
			})}
			</div>
			
			<div className="d-flex justify-content-center mb-3">
				<Pagination count={data?.length > 0 ? data[0].total_page : 0} page={page} onChange={handleChange} shape="rounded" color="success" />
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
.grid_item .price_box {
    margin-bottom: 5px;
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

.new_price {
    color: #5eaf35;
    font-weight: 500;
    font-size: 16px;
    font-size: 1rem;
}
	
`}
</style>
   
    </>
  )
}


export async function getServerSideProps({ query, req, res }) {

	res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')
  
  try{
	const page = query.page || 1
	const search = query.search || ""
	
	const [fetchproductsRes] = await Promise.all([
    		axios.get(`${process.env.dbname}/ecoflux/api/fetchproducts/${page}/${search}`)
  	]);
	  const [data] = await Promise.all([
		fetchproductsRes.data.result || []
	  ]);
  return { props: { data } };
	
  } catch (error) {
    console.log(error);
  }
}
