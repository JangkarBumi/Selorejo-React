import React, { Component } from "react";
import "./slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }
  
  renderSlides = () => {
    const { images, currentIndex } = this.state
    
    const slides = images.map((image, i) => {
      let isActive = (currentIndex === i) ? true : false
      return (
        <Slide 
          key={i} 
          image={image} 
          isActive={isActive} 
        />
      )
    })
    
    return slides
  }
  
  handleDotClick = e => {
    const dotIndex = parseInt(
      e.target.getAttribute('data-index')
    )
    
    // Go back
    if(dotIndex < this.state.currentIndex) {
      return this.setState({ 
        currentIndex: dotIndex, 
        translateValue: -dotIndex * this.slideWidth() 
      })
    }
    
    // Go forward
    this.setState({
      currentIndex: dotIndex,
      translateValue: this.state.translateValue + (this.state.currentIndex - dotIndex) * this.slideWidth() 
    })
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            { this.renderSlides() }
        </div>
            
        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
        
        <Dots 
          images={this.state.images}
          currentIndex={this.state.currentIndex}
          handleDotClick={this.handleDotClick}
        />
      </div>
    );
  }
}


const Slide = ({ image, isActive }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  
  return (
    <div 
      className={`slide ${isActive ? 'active-slide' : ''}`} 
      style={styles} 
    />
  )
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}


const Dots = ({ images, currentIndex, handleDotClick }) => {
  return (
    <div className="dots-container">
      {
        images.map((image, i) => (
          <div 
            className={`${i === currentIndex ? 'dot active' : 'dot'}`} 
            onClick={handleDotClick}
            data-index={i}
            key={i}
           />
        ))
      }
    </div>
  )
}

