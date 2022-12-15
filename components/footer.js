import React, { useRef, useState, useEffect, ReactDOM } from "react";
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { green, grey } from '@mui/material/colors';
import Script from "next/script"
import Image from 'next/image'
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


export default function Footer() {

return (
<>

	<footer className="page-footer font-small mdb-color pt-4" style={{ paddingLeft: "0px", background : '#4e5a62' }}>

      <div className="container text-md-left">

        <div className="row text-md-left mt-3 pb-3">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-capitalize mb-4 font-weight-bold">Company</h6>
            <p><a href="">About us</a></p>
			<p><a href="">Become Ecoflux Affiliate</a></p>
			<p><a href="">Become Ecoflux Solartrician</a></p>
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
              <a>129, Ogba Road off obaAkran avenue, opposite Ashade royal palace or court Ogba Agege</a>
            </p>
            <p><a>+234 8034 451 220</a></p>
			<p><a>info@ecofluxng.com</a></p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-capitalize mb-4 font-weight-bold">Follow us</h6>
            <p className="text-white">
              <i className="fas fa-home mr-3 text-white"></i> {`Can't`} find what you looking for?
			</p>
			<ColorButton variant="contained"><EmailIcon />Send us an Email</ColorButton>
			
          </div>
          
        </div>
        
      </div>
     

    </footer>
	
	
		<div className="container-fluid bg-dark">
			<div className="container">
				<div style={{ height:100 }} className="row align-items-center text-white">
					<div className="col-md-12">
						<p className="text-white">Copyright &copy; 2022 All rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	


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

`}
</style>

</>
)
}