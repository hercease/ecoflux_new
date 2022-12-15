import Carousel from 'react-bootstrap/Carousel';
import React, { useRef, useState, useEffect, ReactDOM } from "react";
import Image from 'next/image';


function Homecarousel() {
	
const size = useWindowSize();
function useWindowSize() {
 
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if(typeof window !== 'undefined') {
		
      function handleResize() {
		if(window.innerWidth > 640){
			setWindowSize({
				width: window.innerWidth,
				height: "400px",
			});
		}else{
			setWindowSize({
				width: window.innerWidth,
				height: "260px",
			});
		}
		  
      }
    
      window.addEventListener("resize", handleResize);
   
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

  return (
    <Carousel indicators={false} id="carouselHero" controls={false} pauseonhover="true">
      <Carousel.Item interval={1000}>
		<div id="display" style={{width: size.width, height: size.height, position:"relative"}}>
			<Image className="d-block w-100" loader={() => 'https://picsum.photos/1200/360'} src={ 'https://picsum.photos/1200/360'} layout='fill' objectFit="cover" />
		</div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
	    <div id="display" style={{ width: size.width, height: size.height, position:"relative"}}>
			<Image className="d-block w-100 h-100" loader={() => 'https://picsum.photos/1200/360?grayscale'} src={ 'https://picsum.photos/1200/360?grayscale'} layout='fill' objectFit="cover" />
		</div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
		<div id="display" style={{width: size.width, height: size.height, position:"relative"}}>
			<Image className="d-block w-100" loader={() => 'https://picsum.photos/seed/picsum/1200/360'} src={ 'https://picsum.photos/seed/picsum/1200/360'} layout='fill' objectFit="cover" />
		</div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		
	
	
  );
  
  
  <style jsx>{`

#carouselHero .carousel-item img {  
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  height:50vh;
}
	
`}
</style>
}



export default Homecarousel;