import React, { useRef, useState, useEffect, ReactDOM } from "react";
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { green, grey } from '@mui/material/colors';
import Script from "next/script"
import Image from 'next/image'
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import UploadIcon from '@mui/icons-material/Upload';
import PersonIcon from '@mui/icons-material/Person';
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
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


export default function Navbar() {
	
	const router = useRouter();
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	const [user, setUser] = useState([])
	const cookies = getCookie('ecotoken') || "";
	
	function Opencollapse(){
		canvascollapseref.current.classList.toggle('open')
	}
	
  
    async function getProfile(value){
        await axios.post(`${process.env.dbname}/ecoflux/api/fetchprofile/`, { email : value } ).then(function(response){
            setUser(response.data.result);
        });
    }
	
	useEffect(() => {
	   if(cookies){
		getProfile(cookies);
	   }
	}, [cookies]);

	
return (
<>

<div className="container-fluid my-4">	
	<div className="row">
		<div className="col-12">
			<nav style={{ background : '#f4f9e7' }}  className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
				<div className="container">
					<Link href="/"><a className="navbar-brand" href="#"><Image src="/log.png" alt="image" width={180} height={50} /></a></Link>
					<button  className="navbar-toggler p-0 border-0" onClick={ Opencollapse } type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div ref={canvascollapseref} className="navbar-collapse offcanvas-collapse justify-content-md-center" id="navbarsExampleDefault">
						<ul className="navbar-nav">
							<li className="nav-item px-3">
							  <Link href="/about_us"><a className="nav-link fw-bold">About us</a></Link>
							</li>
							<li className="nav-item px-3">
							  <Link href="/services"><a className="nav-link fw-bold">Our Services</a></Link>
							</li>
							<li className="nav-item px-3">
							  <Link href="/shop"><a className="nav-link fw-bold text-success-light">Shop</a></Link>
							</li>
							<li className="nav-item px-3">
							  <Link href="/category"><a className="nav-link fw-bold text-success-light">Categories</a></Link>
							</li>
							
							{ user == "" ?

							<>
								<li className="nav-item px-3">
								 <Link href="/login"><a className="nav-link active fw-bold" aria-current="page">Sign in</a></Link>
								</li>
								<li className="nav-item px-3">
								  <Link href="/register"><ColorButton variant="contained">Sign up</ColorButton></Link>
								</li>
							</>					
							
							: 
							
							<li className="nav-item dropdown px-3 fw-bold">
							  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								 Account
							  </a>
							  <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
								<li><Link href="/profile"><a className="dropdown-item"><AccountCircle /> My Profile</a></Link></li>
								<li><Link href="/cart"><a className="dropdown-item" href="#"><ShoppingCartCheckoutIcon /> Cart <span className="badge text-bg-secondary float-end">{user.total_cart_count}</span></a></Link></li>
								<li><a className="dropdown-item" href="#"><LocalShippingRoundedIcon /> Orders</a></li>
								<li><Link href="/upload_product"><a className="dropdown-item" href="#"><UploadIcon /> Upload product</a></Link></li>
								<li><Link href="/my_products"><a className="dropdown-item" href="#"><PersonIcon /> My products</a></Link></li>
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" onClick={function(event){ destroyCookie(null, 'ecotoken'); router.push('/login'); }}><ExitToAppIcon /> Logout</a></li>
							  </ul>
							</li>
							
							}
							
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
</div>


<Script
id="my_script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
`,
  }}
/>
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
    top: 83px; /* Height of navbar */
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

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #ffffff;
  background-color: #6c757d;
}

`}
</style>

</>
)
}
