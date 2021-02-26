import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Media } from 'reactstrap';
import 'react-multi-carousel/lib/styles.css';







class Home extends Component {
  render() {
    return (
      <div
        id='carousel'
        className='carousel slide carousel-fade carousel-active'
        data-ride='carousel'
        data-interval='2000'
      >
        <ol className='carousel-indicators'>
          <li data-target='#carousel' data-slide-to='0' className='active'></li>
          <li data-target='#carousel' data-slide-to='1'></li>
          <li data-target='#carousel' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner' role='listbox'>
          <div className='carousel-item active'>
            <a href='#'>
              <picture>
                <src
                  src='assets/images/carousel-1800-1.jpg'
                  media='(min-width: 1400px
                     max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-1.jpg'
                  media='(min-width: 768px 
                    max-height: 400px)'
                />
                <src
                src='assets/images/carousel-1800-1.jpg'
                  media='(min-width: 576px 
                    max-height: 400px)'
                />
                <img
                  src='assets/images/carousel-1800-1.jpg'
                  alt='this is a cool thing'
                  className='d-block img-fluid'
                />
              </picture>

              <div className='carousel-caption justify-content-left align-items-center'>
                <div>
                  <h2>Welcome to Elder Apothecary</h2>
                  <p>
                    Where you can find products, education, and your favorite
                    store all in one place
                  </p>
                  <span className='btn-sm btn-outline-warning'>Learn More</span>
                </div>
              </div>
            </a>
          </div>
          </div>
          <div className='carousel-item'>
            <a href='#'>
              <picture>
                <src
                  src='assets/images/carousel-1800-2.jpg '
                  media='(min-width: 1400px 
                    max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-2.jpg '
                  media='(min-width: 768px
                max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-2.jpg '
                  media='(min-width: 576px 
                    max-height: 400px)'
                />
                <img
                  src='assets/images/carousel-1800-2.jpg'
                  alt='responsive image'
                  className='d-block img-fluid'
                />
              </picture>
              <div className='carousel-caption justify-content-left'>
                <div>
                  <h2>Products you can Trust</h2>
                  <p>
                    Trusted Apothecary's in one place for convenience and
                    options
                  </p>
                  <span className='btn btn-sm btn-outline-success'>See More</span>
                </div>
              </div>
            </a>
          </div>
        
        <div className='carousel-item'>
            <a href='#'>
              <picture>
                <src
                  src='assets/images/carousel-1800-3.jpg '
                  media='(min-width: 1400px 
                    max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-3.jpg '
                  media='(min-width: 768px
                max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-3.jpg '
                  media='(min-width: 576px 
                    max-height: 400px)'
                />
                <img
                  src='assets/images/carousel-1800-3.jpg'
                  alt='responsive image '
                  className='d-block img-fluid'
                />

              </picture>

              <div className='carousel-caption justify-content-left align-items'>
                  <div>
                    <h2>Why Elder Apothecary?</h2>
                    <p>It's simple! We care about your health and your time!</p>
                    <span className='btn btn-sm btn-outline-success'>See More</span>
                  </div>
              </div>
            </a>
          </div>
          </div>
    );
  }
}

export default Home;
