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
import { Controller, useForm } from "react-hook-form";
import dynamic from 'next/dynamic'
import { stripHtml } from "string-strip-html";
import UploadIcon from '@mui/icons-material/Upload';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
const RichEditorExample = dynamic(
  () => import('../components/editor'),{ ssr: false }
)


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


export default function Uploadproduct({category, user}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	
const [file, setFile] = useState([])
 const [img,  setImg] = useState([]);
	
	function Opencollapse(){
		canvascollapseref.current.classList.toggle('open')
	}
	
const refreshData = () => {
	router.replace(router.asPath);
}
	
const router = useRouter();
const [openbackdrop, setBackdrop] = useState("")

const [state, setState] = useState({ confirmopen: false, backdrop : false, fquantity : 0, pid : 0, err_message: '',  open: false, vertical: 'top', severity:'success', horizontal: 'right',  });
 
const { confirmopen, backdrop, fquantity, pid, vertical, horizontal, err_message, severity, open } = state;

function handleEvent(event) {
  const parent = event.target;
  console.log(parent);
}

const onSubmit = (data) => {
		
		const formData = new FormData()
		var cook = getCookie('ecotoken')
		var totalfiles = file.length;
		
		for (let i = 0; i < totalfiles; i++){
			formData.append('file[]', img[i]);
		}
		formData.append('name', data.prod_name);
		formData.append('price', data.prod_price);
		formData.append('weight', data.prod_weight);
		formData.append('dimension', data.prod_dimension);
		formData.append('category', data.category);
		formData.append('customcategory', data.customcategory);
		formData.append('email', cook);
		formData.append('description', data.description);
		
		console.log(data);
		setState({ ...state, backdrop:true });
		
		
axios({ method: "POST", url: `${process.env.dbname}/ecoflux/api/productupload/`, data: formData,
  headers:{
    "Content-Type": "multipart/form-data"
  }
}).then(function(response){
	if(response.data.status==1){
		setState({ ...state, open: true, severity:'success', backdrop:false, err_message: response.data.message });
		setTimeout(() => { router.push("/products") }, 4000);
			
		}else{
			console.log(response.data);
		}	
    });
}

const { register, watch, control, formState: { errors }, handleSubmit, reset, setValue, getValues } = useForm({
    mode: "onChange"});

	
	const handleClose = () => {
		setState({ ...state, backdrop: false, confirmopen: false });
	};

const watchShowOthers = watch("category");

function deleteItem(index){
	//var remove = setFile([ ...file.slice(0, index), ...file.slice(index + 1)]);
  if (file !== []){
	setFile((file) => file.filter((item, i) => i !== index));
	setImg((img) => img.filter((item, i) => i !== index));
  }
}


	const changeHandler = (event) => {
        var len = document.getElementById("fileupload").files.length;
        for(var j=0; j<len; j++) {
            var src = "";
            var name = event.target.files[j].name;
            var mime_type = event.target.files[j].type.split("/");
            if(mime_type[0] == "image"){
               src = URL.createObjectURL(event.target.files[j]);
			   setFile((imgs) => [...imgs, src]);
			   setImg((imgs) => [...imgs, event.target.files[j]]);
			 
            } else if(mime_type[0] == "video") {
              src = 'icons/video.png';
            } else {
              src = 'icons/file.png';
            }
        }
	}
	
  return (
	<>
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Upload product</title>
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
	
	<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backdrop} >
		<CircularProgress color="inherit" />
	</Backdrop>

	<Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
		<MuiAlert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
			{err_message}
		</MuiAlert>
	</Snackbar>
	
	<Navbar />
	
	<div className="container-fluid bg-secondary py-5">
		<div className="d-flex flex-column align-items-center justify-content-center">
			<h3 className="fw-bold text-white text-capitalize mt-4 p-4">Upload Product</h3>
		</div>
	</div>
	
	<div className="container py-2">
		<div className="row mt-3 pb-3 justify-center-center">
		
			<div className="col-md-6 mx-auto">
				<div className="card border-0">
					<div className="card-header bg-light text-dark fw-bold">
						<UploadIcon /> Upload product
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-3">
								<label className="form-label">Product name</label>
								<input type="text" name="prod_name" className="form-control" placeholder="Enter product name" {...register("prod_name", { required: "Product name is required"  })}  />
								{errors.prod_name  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.prod_name.message} </div>}
							</div>
							
							<div className="mb-3">
							<label className="form-label">Select category</label>
							<select className="form-control custom-select" name="category"  {...register("category", { required: "Product category is required" })}>
									<option value="">Select Category</option>
									 {category?.map((category) => (
										<option key={category.category} value={category.category}>
											{category.category}
										</option>
									))}
									<option value="others">Others</option>
								</select>
								{errors.category  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.category.message} </div>}
							</div>
							
							{ watchShowOthers === 'others' && <div className="mb-3"><label className="form-label">Create your category</label><input className="form-control" placeholder="Create your category" type="text" {...register("customcategory", { required: "Enter your category" })} />{errors.customcategory  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.customcategory.message} </div>}</div>}
							
								
							<div className="mb-3">
								<label className="form-label">Product weight</label>
								<input type="text" name="prod_weight" className="form-control" placeholder="Enter product weight"  {...register("prod_weight", { required: "Product weight is required" })} />
								{errors.prod_weight  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.prod_weight.message} </div>}
							</div>
							
							<div className="mb-3">
								<label className="form-label">Product dimension</label>
								<input type="text" name="prod_dimension" className="form-control" placeholder="Enter product dimension" {...register("prod_dimension", { required: "Product dimension is required" })} />
								{errors.prod_dimension  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.prod_dimension.message} </div>}
							</div>
							
							<div className="mb-3">
								<label className="form-label">Product price</label>
								<input type="text" min="1" name="prod_price" className="form-control" placeholder="Enter product price" {...register("prod_price", { required: "Product dimension is required" })} />
								{errors.prod_price  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.prod_price.message} </div>}
							</div>
							
							<div className="mb-3">
								<label className="form-label">Product description</label>
								<Controller
									  render={({ field }) => <RichEditorExample {...field} />}
									  name="description"
									  control={control}
									  defaultValue=""
									  rules={{
										validate: {
										  required: (v) =>
											(v && stripHtml(v).result.length > 0) ||
											"Description is required",
										  maxLength: (v) =>
											(v && stripHtml(v).result.length <= 2000) ||
											"Maximum character limit is 2000",
										},
									  }}
									/>
									{errors.description  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon />{errors.description.message} </div>}
							</div>
							
							<div className="mb-3">
							<label htmlFor="fileupload" className="form-label">Product image/s</label>
								<input className="form-control" type="file" multiple accept=".jpg,.png,.jpeg"  {...register("image[]", { required: "Image Upload is required" })} onChange={changeHandler} id="fileupload" />
									{errors.image  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon />{errors.image.message} </div>}
							</div>
							
							<div className="row mb-3">
								 {file && file.map((link, key) => (
									<div key={key} className="col-6 col-lg-4" id="preview">
									<div  className="card mt-2">
										<Image className="img-fluid" loader={() => link } src={link} height={150} width={150} />
										<div className="delete">
										  <DeleteIcon onClick={() => deleteItem(key)} />
										</div>
									</div>
									</div>
									))}
								</div>
							<div className="mb-2">
								<button type="submit" className="btn btn-secondary">Submit</button>
							</div>
						</form>
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

.delete
{
    display:inline-block !important;
    width:1.7em;
    height:1.7em;
    
    position:absolute;
    top:5px;
    right:15px;
    z-index:1000;
    
    font-size:1.2em !important;
    line-height:1.3em;
   
    text-align:center;
    font-weight:bold;
    border:1px solid gray !important;
    border-radius:1.2em;
    color:gray;
    background-color:white;
    opacity:.5;
    
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
	const [fetchcategoryRes,fetchprofileRes] = await Promise.all([
	axios.get(`${process.env.dbname}/ecoflux/api/fetchcategory`), 
    axios.get(`${process.env.dbname}/ecoflux/api/fetchprofile/${cookies}`)
  ]);
  const [category, user] = await Promise.all([
    fetchcategoryRes.data.result || "", 
    fetchprofileRes.data.result
  ]);
  return { props: { category, user } };
	
  } catch (error) {
    console.log(error);
  }
}

