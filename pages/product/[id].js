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
import Navbar from "../../components/navbar.js"
import Footer from "../../components/footer.js"
import Divider from '@mui/material/Divider';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from "axios";
import parse from 'html-react-parser';
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import Router, { useRouter } from 'next/router'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

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

export default function Productdetail({fetchsingleproduct}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	const router = useRouter();
	
	console.log(fetchsingleproduct);
	const cookies = getCookie('ecotoken');
	const [user, setUser] = useState("");
	
	const [state, setState] = useState({ disable_status: '', err_message: '',  open: false, vertical: 'top', severity:'success', horizontal: 'right', comeup: false });
 
    const { err_message, disable_status, severity, vertical, horizontal, open, comeup, first_rating, second_rating, third_rating,forth_rating, fifth_rating, all_rating} = state;
	
	async function getProfile(){
		await axios.get(`${process.env.dbname}/ecoflux/api/fetchprofile/${cookies}`).then(function(response){
			setUser(response.data.result);
		});
	}
	
	function Processcart(){
		
		setState({ ...state, disable_status: 'disabled', });
		
		axios.post(`${process.env.dbname}/ecoflux/api/addtocart/` , { product_id : router.query['id'], email : cookies}).then(function(response){
			
			if(response.data.result==1){
				setState({ ...state, open: true, severity:'success', disable_status: '', err_message: response.data.message });
			}else if(response.data.result==3){
				setState({ ...state, comeup: true, severity:'error', disable_status: '', err_message: response.data.message });
			}else if(response.data.result==2){
				setState({ ...state, open: true, severity:'info', disable_status: '', err_message: response.data.message });
			}else{
				setState({ ...state, open: true, severity:'error', disable_status: '', err_message: response.data });
			}
			
        }); 
	}
	
	useEffect(() => {
	   if(cookies){
			getProfile();
	   }
  }, [cookies]);
  
  	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		setState({...state, open:false, comeup:false });
	};
	
	const action = (
    <React.Fragment>
      <Button color="inherit" size="small" onClick={() => router.push("/cart")}>
        View cart
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
	
	
function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

const title = fetchsingleproduct.result[0].prod_name;

  return (
	<>
	<Head>
		<meta charSet="utf-8" />
		<title>{`Ecoflux | ${title}`}</title>
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
		<meta name="description" content={fetchsingleproduct.result[0].description} />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={`${fetchsingleproduct.result[0].prod_name}`}  />
		<meta property="og:description" content={fetchsingleproduct.result[0].description} />
		<meta property="og:url" content={"https://ecoflux.com/product/" + fetchsingleproduct.result[0].prod_id} />
		<meta property="og:site_name" content="Ecoflux" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={`${fetchsingleproduct.result[0].prod_name}`} />
		<meta name="twitter:description" content={fetchsingleproduct.result[0].description} />
		<meta name="twitter:image" content="https://ecoflux.com/log.png" />
		<meta name="theme-color" content="#a9cf46" />
		<meta name="keywords" content={`${fetchsingleproduct.result[0].prod_name}`} />
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
	
	<Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message={err_message}
		anchorOrigin={{ vertical, horizontal }}
        action={action}
    />
	  
	<Snackbar anchorOrigin={{ vertical, horizontal }} open={comeup} autoHideDuration={6000} onClose={handleClose}>
		<MuiAlert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
			{err_message}
		</MuiAlert>
	</Snackbar>
	
	<Navbar />
	
	<div className="container-fluid bg-secondary py-5">
		<div className="d-flex flex-column align-items-center justify-content-center">
			<h3 className="fw-bold text-white text-capitalize mt-4 p-4">{title}</h3>
		</div>
	</div>
	
	<div className="container py-3">
		<div className="row">
			<nav style={{ bsBreadcrumbDivider: '.' }} aria-label="breadcrumb">
			  <ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark">Shop</a></li>
				<li className="breadcrumb-item" aria-current="page">Category</li>
				<li className="breadcrumb-item" aria-current="page">{fetchsingleproduct.result[0].category}</li>
				<li className="breadcrumb-item active" aria-current="page">{fetchsingleproduct.result[0].prod_name}</li>
			  </ol>
			</nav>
		</div>
	</div>
	
	<div className="container py-5">
		<div className="row align-items-center justify-content-center">
			<div className="wrapper row">
					<div className="preview col-md-6">
						<div className="preview-pic tab-content">
							{fetchsingleproduct.result[0].image.map((item, key) =>
						
								<div key={key} className={key==0 ? "tab-pane active" : "tab-pane" } id={"pic-" + key}>
									<div style={{ width: '100%', height: '250px', position: 'relative', margin:"0px 0px 0px 0px" }}>
										<Image alt="image" layout='fill' objectFit="contain" src={"/" + item.imagename} />
									</div>
								</div>
							)}
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
							{fetchsingleproduct.result[0].image.map((item, key) =>
							
								<li  key={key} className={key==0 ? "active" : "" }>
									<a data-bs-target={"#pic-" + key} data-bs-toggle="tab">
										<div style={{ width: '100%', height: '100px', position: 'relative', margin:"0px 0px 0px 0px" }}>
											<Image alt="image" layout='fill' objectFit="cover" src={"/" + item.imagename} />
										</div>
									</a>
								</li>
								
							)}
						</ul>
					</div>
					<div className="details col-md-6 mb-5">
						<h3 className="product-title">{fetchsingleproduct.result[0].prod_name} </h3>
						<h6 className="product-description">{parse(fetchsingleproduct.result[0].description)}</h6><hr />
						<h6 className="text-capitalize fw-bold"><span>&#8358;{fetchsingleproduct.result[0].amount}</span></h6><hr />
						<div className="d-flex flex-wrap"><h6 className="text-capitalize fw-bold">Weight: </h6><div className="ms-5">{fetchsingleproduct.result[0].weight}</div></div><hr />
						<div className="d-flex flex-wrap"><h6 className="text-capitalize fw-bold">Dimension: </h6><div className="ms-5">{fetchsingleproduct.result[0].dimension}</div></div><hr />
						
						<button onClick={function(event){ Processcart() }} className="btn btn-block btn-color btn-lg fw-bold" disabled={disable_status} id=""><i className="fas fa-cart-plus"></i> Add to Cart - &#8358;{fetchsingleproduct.result[0].amount}</button>
					</div>
				</div>
			</div><hr />
			
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
	
<Script  id="jquery_script" src="../js/jquery-3.5.0.min.js" type="text/javascript"></Script>
<Script  id="bootstrap_script" src="../js/bootstrap.bundle.js" type="text/javascript"></Script>
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

export async function getStaticPaths() {
	
	const resp = await axios.get(`${process.env.dbname}/ecoflux/api/fetchproductid/`);
	const userData = resp.data.result;
	//const paths = "";
	
    const paths = userData.map(data =>({
       params: { id: data.id.toString() },
    }))
	console.log(paths)
    return {
		paths,
        fallback: true
    }
}


export async function getStaticProps(context){
  const Id = context.params.id
  //const cookies = context.req.cookies['ecotoken'] || ""
  
  const [fetchsingleproductRes,fetchprofileRes] = await Promise.all([
    axios.get(`${process.env.dbname}/ecoflux/api/fetchsingleproduct/${Id}`)
  ]);
  const [fetchsingleproduct] = await Promise.all([
    fetchsingleproductRes.data
  ]);
  return { props: { fetchsingleproduct }, revalidate : 60  };
  
  
}
