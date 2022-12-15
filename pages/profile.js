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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faUserEdit,faSync } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export default function Profile({data, user}) {
	
	const canvasbuttonref = useRef();
	const canvascollapseref = useRef();
	const router = useRouter();
	 const [img,  setImg] = useState("");
	 const [file,  setFile] = useState("");
	const [state, setState] = useState({ pass_btn_value: 'Change password', pass_btn_disable: '', err_message: '',  open: false, vertical: 'top', severity:'success', horizontal: 'right', pro_btn_disable: '', pro_btn_value: 'Update' });
	const cookies = getCookie('ecotoken') || "";
 
    const { err_message, pass_btn_value, pass_btn_disable, severity, vertical, horizontal, open, pro_btn_disable, pro_btn_value } = state;
	
	const refreshData = () => {
		router.replace(router.asPath);
	}
	
	const { register, watch, control, formState: { errors }, handleSubmit, reset, setValue, getValues } = useForm({
    mode: "onChange"});

	
	const Changepassword = (data) => {
		setState({ ...state, pass_btn_value: <FontAwesomeIcon icon={faSync} className='fa-spin' />, pass_btn_disable: 'disabled' });
		data.user = cookies;
		axios.post(`${process.env.dbname}/ecoflux/api/changepassword/` , data).then(function(response){
			
			if(response.data.status==1){
				setState({ ...state, open: true, severity:'error', pass_btn_value: 'Change password', pass_btn_disable: '', err_message: response.data.message });
			}
			else if(response.data.status==3){
				setState({ ...state, open: true, severity:'success', pass_btn_value: 'Change password', pass_btn_disable: '', err_message: response.data.message });
				setTimeout(() => { destroyCookie(null, 'ecotoken'); router.push('/login'); }, 4000);
			}
			else if(response.data.status==2){
				setState({ ...state, open: true, severity:'error', pass_btn_value: 'Change password', pass_btn_disable: '', err_message: response.data.message });
			}else{
				setState({ ...state, open: true, severity:'error', pass_btn_value: 'Change password', pass_btn_disable: '', err_message: response.data });
			}
			
        });
	}
	
const Changeprofile = (e) => {
	e.preventDefault();
	const formData = new FormData();
	
	let address = document.getElementById('address').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	formData.append('email', cookies);
	formData.append('name', name);
	formData.append('phone', phone);
	formData.append('address', address);
	formData.append('image', img);
	
	console.log(formData);
	
	const config = {
		onUploadProgress: progressEvent => console.log(progressEvent.loaded)
	}
	
	console.log(img);
	
	setState({ ...state, pro_btn_value: 'Processing.......',  pro_btn_disable: 'disabled' });
	

axios({ method: "POST", url: `${process.env.dbname}/ecoflux/api/updateprofile/`, data: formData, config, headers:{
    "Content-Type": "multipart/form-data"
  } 
  }).then(function(response){
			if(response.data.status==1){
				setState({ ...state, open: true, severity:'error', pro_btn_value: 'Update', pro_btn_disable: '', err_message: response.data.message });
			}
			else if(response.data.status==2){
				setState({ ...state, open: true, severity:'error', pro_btn_value: 'Update', pro_btn_disable: '', err_message: response.data.message });
			}else if(response.data.status==3){
				setState({ ...state, open: true, severity:'error', pro_btn_value: 'Update', pro_btn_disable: '', err_message: response.data.message });
			}else if(response.data.status==4){
				setState({ ...state, open: true, severity:'success', pro_btn_value: 'Update', pro_btn_disable: '', err_message: response.data.message });
					refreshData();
			}else{
				console.log(response.data);
			}	
    });
}
	

function Opencollapse(){
	canvascollapseref.current.classList.toggle('open')
}

const handleClose = () => {
	setState({ ...state, open: false });
};

const changeHandler = (event) => {
	if(event.target.value==''){
		setState({...state, img: "/profile.jpg" }) ;
	}else{
		var src = URL.createObjectURL(event.target.files[0]);
		setImg(event.target.files[0]);
		setFile(src);
	}
	
	
}
	

  return (
	<>
	<Head>
		<meta charSet="utf-8" />
		<title>Ecoflux | Profile</title>
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
	
	   <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
			<MuiAlert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
				{err_message}
			</MuiAlert>
	    </Snackbar>
		
	<Navbar user={user} />
	<section style={{ marginTop:62 }} className="p-3 bg-secondary container">
	<figure className="icontext align-items-center mr-5 align-self-center">
	{ user?.profile ? <Image loader={() => `/${data.profile}` } src={ `/${user.profile}` } className="figure-img img-fluid rounded-circle border-2 icon icon-md" height={60} width={60} alt="" loader={() => `/${user.profile}` } /> : <Image className="figure-img img-fluid rounded-circle border-2 icon icon-md" loader={() => '/profile.jpg'} src={'/profile.jpg'} height={60} width={60} />}
		<figcaption className="text text-dark m-2">
			<p className="h5 title mb-1 text-white text-capitalize">{user.name}</p>
		</figcaption>
	</figure>
</section>
	
	<div className="container-fluid mb-md-0">
	<div className="container">
	<div className="col-md-12">
	<div className="m-2">
    <ul className="nav nav-tabs border-0 mb-3" id="myTab">
        <li className="nav-item">
            <a href="#home" className="nav-link active" data-bs-toggle="tab">Profile</a>
        </li>
        <li className="nav-item">
            <a href="#profile" className="nav-link" data-bs-toggle="tab">Change</a>
        </li>
        <li className="nav-item">
            <a href="#messages" className="nav-link" data-bs-toggle="tab">Edit profile</a>
        </li>
    </ul>
    <div className="tab-content">
        <div className="tab-pane fade show active" id="home">
            <h4 className="mt-2 bg-light py-3 p-3">
			<FontAwesomeIcon icon={faUser} /> Profile details</h4>
            <table className="table table-striped">
				<tbody>
					<tr>
						<th>Name:</th>
						<td>{user.name}</td>
					</tr>
					<tr>
						<th>Email:</th>
						<td>{user.email}</td>
					</tr>	
					<tr>
						<th>Phone:</th>
						<td>{user.phone}</td>
					</tr>
					<tr>
						<th>Date joined:</th>
						<td>{user.date}</td>
					</tr>						
				</tbody>	
			</table>
        </div>
		
        <div className="tab-pane fade" id="profile">
            <h4 className="mt-2 bg-light py-3 p-3">
			<FontAwesomeIcon icon={faKey} /> Change password</h4>
			 <form onSubmit={handleSubmit(Changepassword)} className="mb-5">
              
                <div className="mb-3">
                  <label className="form-label">Old password</label>
                  <input className="form-control" name="old_password" type="password" placeholder="Old password" {...register("old_password", { required: true, minLength: 6 })} />
				  
				  {errors.old_password?.type === 'required' && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Kindly enter your old password</div>}
                </div>
				
                <div className="mb-3">
                  <label className="form-label">New password</label>
                  <input className="form-control" type="password" name="password" placeholder="New password" {...register("password", { required: true, minLength: 6, pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/, message: 'Password must contain 1 Uppercase letter, 1 Lowercase, 1 Digit and 1 Special character ',}, })} />
				  
				  {errors.password?.type === 'required' && (<div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Please enter your new password </div>) }
				  {errors.password?.type === 'minLength' && (<div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Minimum character is 6 </div>) }
				  {errors.password && (<div className='text-danger mt-1'> {errors.password.message} </div>) }
                </div>
				
                <div className="mb-3">
                  <label className="form-label">Retype new password</label>
                  <input className="form-control" type="password" name="confirmpassword" placeholder="Retype new password" {...register("confirmpassword", { required: "Please retype your new password!", validate: { matchesPreviousPassword: (value) => { const { password } = getValues(); return password === value || "Password confirmation does not match"; }} })} />
				  {errors.confirmpassword  && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.confirmpassword.message} </div>}
                </div>
				
                <div className="col-12">
                  <button disabled={pass_btn_disable} className="btn btn-primary" type="submit">{pass_btn_value}</button>
                </div>
            </form>
			
        </div>
		
        <div className="tab-pane fade" id="messages">
            <h4 className="mt-2 bg-light py-3 p-3">
			<FontAwesomeIcon icon={faUserEdit} /> Edit profile</h4>
           <form encType="multipart/form-data" onSubmit={ Changeprofile } >
		   
			  <div className="icontext">
					<div className="icon m-3">
					{file && <Image className="figure-img img-fluid rounded-circle border-2 icon icon-md" loader={() => img } src={file} height={70} width={70} /> }
					</div>
					<div className="text">
						<label htmlFor="formFile" className="form-label">Change image</label>
						<input className="form-control" type="file" name="image" onChange={changeHandler} id="formFile" accept=".jpg,.png,.jpeg" />
					</div>
				
				</div>
			   <div className="mb-3">
					<label className="form-label">Name</label>
					<input type="text" className="form-control" name="name" id="name" onChange={ e =>setState({ ...state, name: e.target.value })} placeholder="Your name" {...register("name", { required: "Please enter your name"  })} defaultValue={user && user.name} />
					 {errors.name && (<div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.name.message} </div>) }
				</div>
				
				 <div className="mb-3">
					<label className="form-label">Phone</label>
					<input type="text" className="form-control" name="phone" id="phone" onChange={ e =>setState({ ...state, phone: e.target.value })} placeholder="Your Phone no" defaultValue={user && user.phone} {...register("phone", { required: true, minLength: 11, maxLength:11 })}  />
					{errors.phone?.type === 'required' && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Phone is required</div>}
					{errors.phone?.type === 'minLength' && <div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> Minimum input is 11 characters</div>}
				</div>
				
				 <div className="mb-3">
					<label className="form-label">Address</label>
					<input type="text" className="form-control" id="address" name="address" placeholder="Your address" defaultValue={user && user.address} {...register("address", { required: "Enter your address" })}  />
					
					{errors.address && (<div className='text-danger mt-1'><ErrorOutlineRoundedIcon /> {errors.address.message} </div>) }
				</div>
				
				<div className="mb-3">
					<button type="submit" disabled={pro_btn_disable} className="btn btn-secondary">{pro_btn_value}</button>
				</div>
		   </form>
        </div>
		
    </div>
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

.rounded-circle {
    border-radius: 50% !important;
}

.icontext {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
}

.icon-md {
    width: 60px;
    height: 60px;
    line-height: 60px!important;
    font-size: 28px;
}
	
`}
</style>
   
    </>
  )
}


export async function getServerSideProps({ query, req, res }){

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
	
	const page = query.page || 1
	const search = query.search || ""
	
	const [fetchproductsRes,fetchprofileRes] = await Promise.all([
    axios.get(`${process.env.dbname}/ecoflux/api/fetchproducts/${page}/${search}`),
    axios.get(`${process.env.dbname}/ecoflux/api/fetchprofile/${cookies}`)
  ]);
  const [data, user] = await Promise.all([
    fetchproductsRes.data.result || [], 
    fetchprofileRes.data.result || []
  ]);
  return { props: { data, user } };
	
  } catch (error) {
    console.log(error);
  }
}
