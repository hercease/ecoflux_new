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
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function Cart({data, user}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	
	function Opencollapse(){
		canvascollapseref.current.classList.toggle('open')
	}
	
	const refreshData = () => {
		router.replace(router.asPath);
	}
	
const router = useRouter();
const [openbackdrop, setBackdrop] = useState("")

const [state, setState] = useState({ confirmopen: false, backdrop : false, fquantity : 0, pid : 0  });
 
const { confirmopen, backdrop, fquantity, pid } = state;

console.log(data)

function handleEvent(event) {
 const parent = event.target;
  console.log(parent);
}

  
	async function updateCart(id, quantity){
		setState({ ...state, backdrop : true })
        await axios.post(`${process.env.dbname}/ecoflux/api/updatecart/`, { id : id, quantity : quantity }).then(function(response){
            if(response.data.message == 1){
				setState({ ...state, backdrop : false  })
				refreshData();
			}else{
				console.log(response)
			}
        });
    }
	
	async function Deletecart(id){
        await axios.post(`${process.env.dbname}/ecoflux/api/deletecart/`, { id : id } ).then(function(response){
            //setUser(response.data.message);
			setState({ ...state, confirmopen: false })
			refreshData();
        });
    }
	
	const handleClose = () => {
		setState({ ...state, backdrop: false, confirmopen: false });
	};

const handleParentClick = (event) => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      console.log(event.currentTarget.parentElement);
	  //console.log(event.target);
	  let c = event.target.parentElement.children[1].value;
	  let d = event.target.parentElement.children[1].id;
	 
	  if(c == ""){
		  c = 0;
		  console.log(0)
	  }
	  if(event.target.textContent === "+" ){
		 var newVal = parseFloat(c) + 1;
	  }else{
		  if (c > 1) {
				var newVal = parseFloat(c) - 1;
			} else {
				newVal = 1;
			}
	  }
	  //c = newVal;
	  event.target.parentElement.children[1].value = newVal;
	  //console.log(d)
	  //setState({ ...state, fquantity : newVal, pid : d })
	  
	  updateCart(d, newVal);
	  
    }
  };
	

  return (
	<>
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Carts</title>
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
	
	<Dialog
        open={confirmopen}
		keepMounted
		TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
		>
        <DialogTitle>{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={() => setState({ ...state, confirmopen : false }) }>No</Button>
          <Button variant="contained" color="info" onClick={() => Deletecart(pid) }>Yes</Button>
        </DialogActions>
    </Dialog>
	
	<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backdrop} >
		<CircularProgress color="inherit" />
	</Backdrop>

	
	<Navbar />
	
	<div className="container-fluid bg-secondary py-5">
		<div className="d-flex flex-column align-items-center justify-content-center">
			<h3 className="fw-bold text-white text-capitalize mt-4 p-4">Cart</h3>
		</div>
	</div>
	
	<div className="container py-2">
		<div className="row mt-3 pb-3 justify-center-center">
			<div className="col-md-8">
				<div className="card border-0">
					<div className="card-header bg-dark text-white">
						Items in Cart
					</div>
					<div className="card-body">
						<div className="table-responsive">
							<table className="table align-middle mb-0 table-nowrap">
								<thead>
									<tr>
										<th className="h6">Product</th>
										<th className="h6">Product desc</th>
										<th className="h6">Price</th>
										<th className="h6">Quantity</th>
										<th className="h6">Total</th>
										<th className="h6"></th>
									</tr>
								</thead>
								<tbody>
								{ data?.length > 0 && data.map((item, key) => {
									return (
	 
									<tr key={key}>
										<td>
											<Image width={"100%"} height={"150px"} alt="image" src={"/" + item.imagename} />
										</td>
										<td className="">{item.product_name}</td>
										<td className="h6">&#8358; {item.price}</td>
										<td className="">
											<div className="input-group input-group-sm input-spinner">
												<div onClick={ handleParentClick } className="btn btn-secondary button_inc">-</div>
													<input disabled className="qty-text form-control" type="number" id={item.id} min="1" defaultValue={item.quantity} name="qty[]" />
												<div onClick={ handleParentClick } className="btn btn-secondary button_inc">+</div>
											</div>
										</td>
										<td>&#8358; {item.sub_total}</td>
										<td><DeleteIcon role="button" onClick={function(event){ setState({ ...state, confirmopen: true, pid : item.id }) }} /></td>
									</tr>
									
								);
								})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="card border-0">
					<div className="card-header bg-light text-dark fw-bold">
						Payment Summary
					</div>
					<div className="card-body">
						<table className="table table-borderless">
							<tbody>
								<tr>
									<th>Order Subtotal</th>
									<td className="h6">&#8358; {data?.length > 0 && data[data.length - 1].total_price}</td>
								</tr>
							</tbody>
						</table><hr />
						<p>Delivery and Taxes are calculated at Checkout</p>
					</div>
					<button className="btn btn-block btn-dark h6 rounded">Checkout</button>
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
	
.input-spinner {
    width: 160px;
    flex-wrap: nowrap;
    display: inline-flex;
    vertical-align: middle;
}

.input-spinner input.form-control {
    text-align: center;
    max-width: 60px;
    flex-basis: 60px;
    border-color: #dee2e6;
    flex-grow: 0;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
	
`}
</style>
   
    </>
  )
}

export async function getServerSideProps({ query, req, res }) {

	res.setHeader('Cache-Control','public, s-maxage=10, stale-while-revalidate=59')
	
	const cookies = getCookie('ecotoken', { req, res });
	
if(!cookies){
    return {
      redirect: {
        permanent: false,
        destination: "/login"
    }
  }
}
  
  
  try{
	const [fetchcartRes,fetchprofileRes] = await Promise.all([
    axios.get(`${process.env.dbname}/ecoflux/api/fetchcart/${cookies}`),
    axios.get(`${process.env.dbname}/ecoflux/api/fetchprofile/${cookies}`)
  ]);
  const [data, user] = await Promise.all([
    fetchcartRes.data.result || "", 
    fetchprofileRes.data.result
  ]);
  return { props: { data, user } };
	
  } catch (error) {
    console.log(error);
  }
}

