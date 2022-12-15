import React from "react";
import Image from 'next/image'
import Link from "next/link"
import Router, { useRouter } from 'next/router'
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider({category}) {
	const router = useRouter();
const Responsive = {
	0:{
		items: 2,
		margin: 10,
	},
	580:{
		items: 2,
		margin: 10,
	},
	768:{
		items: 3,
		margin: 10,
	},
	900:{
		items: 3,
		margin: 10,
	},
	1200:{
		items: 5,
		margin: 0,
	},
	1400:{
		items: 4,
		margin: 0,
	},
}
  return (
    <div>
      <OwlCarousel
		loop ={false}
		nav={false}
		responsive={Responsive}
		autoplay={true}
		autoplayHoverPause={false}
		autoplaySpeed={3000}
	  >
	  {category?.length > 0 && category.map((item, key) => {
			return (
        <div key={key} className="item">
			<div style={{ marginBottom: "25px", textAlign: "center", position:"relative", cursor:"pointer"  }} className="grid_item">
				<figure className="figure">
					<a onClick={() => router.push("/category?search="+item.category)}>
						<Image className="figure-img img-fluid" loader={() => `/${item.prod_image}` } src={ `/${item.prod_image}`} height={200} width={200} />
					</a>
					<figcaption className="figure-caption text-center h3 py-3">{item.category}</figcaption>
				</figure>
			</div>
        </div>
		 );
		})}	
		
      </OwlCarousel>
    </div>
  );
  
<style jsx>{`

.item {
    height: 10rem;
 background: #4dc7a0;
 padding: 1rem;
 color: white;
 font-family: Arial, Helvetica, sans-serif;
}

`}
</style>

}