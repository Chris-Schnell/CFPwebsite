import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Merch() {
  // State variables to manage user selections
  const [selectedSize, setSelectedSize] = useState(''); // To store selected size
  const [address, setAddress] = useState(''); // To store user's address
  const [paymentInfo, setPaymentInfo] = useState({}); // To store payment information
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
}, []);



  function plusSlides(n) {
    
    showSlides(slideIndex + n);
    
    console.log(slideIndex);
  };
  
  // Thumbnail image controls
  function currentSlide(n) {

    
    showSlides( n);
    
  };

  function showSlides(n) {
    let i;
    let temp = n;
    let slides = document.getElementsByClassName("joggersImg");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {temp = 1}
    if (n < 1) {temp = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log("here", temp);
    slides[temp-1].style.display = "block";
    dots[temp-1].className += " active";
    setSlideIndex( temp);
    
  };

  return (
    <div className="merchContainer">
      <Link to="/">
                <img src="./921.ico" className="backButton"/>
                </Link>

        <div className="merchMiddleContainer">
      {/* Product Images (You can use a carousel library or custom implementation) */}

        <div className="joggersContainer">
      <img src="./Chrome_Joggers_3.png" className="joggersImg"/>
      

      
      <img src="./Chrome_Joggers_1.png" className="joggersImg"/>
      

      
      <img src="./Chrome_Joggers_2.png" className="joggersImg"/>
      </div>


    
    <div className='merchButtonsContainer'>

      <div className="dotsContainer" style={{"textAlign":"center"}}>
  <span className="dot" onClick={() => currentSlide(1)}></span>
  <span className="dot" onClick={() => currentSlide(2)}></span>
  <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>


        <div className='nextButtonsContainer'>
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>

    <a className='artistButtons' href="https://chromeflipphonestore.etsy.com">Purchase On Our <span style={{"textDecoration": "underline"}} >E</span>tsy Shop</a>


      </div>

      </div>
    </div>
  );
}

export default Merch;
