import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div
        id='carousel'
        class='carousel slide carousel-fade'
        data-ride='carousel'
        data-interval='4000'
      >
        <ol class='carousel-indicators'>
          <li data-target='#carousel' data-slide-to='0' class='active'></li>
          <li data-target='#carousel' data-slide-to='1'></li>
          <li data-target='#carousel' data-slide-to='2'></li>
        </ol>
        <div class='carousel-inner' role='listbox'>
          <div class='carousel-item active'>
            <a href='#'>
              <picture>
                <src
                  src='assets/images/carousel-1800-1.jpg'
                  media='(min-width: 1400px max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-1.jpg'
                  media='(min-width: 768px max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-1.jpg'
                  media='(min-width: 576px max-height: 400px)'
                />
                <img
                  src='assets/images/carousel-1800-1.jpg'
                  alt='this is a cool thing'
                  class='d-block img-fluid'
                />
              </picture>

              <div class='carousel-caption justify-content-center align-items-center'>
                <div>
                  <h2>Welcome to Elder Apothecary</h2>
                  <p>
                    Where you can find products, education, and your favorite
                    store all in one place
                  </p>
                  <span class='btn btn-sm btn-outline-success'>Learn More</span>
                </div>
              </div>
            </a>
          </div>
          <div class='carousel-item'>
            <a href='#'>
              <picture>
                <img
                  src='assets/images/carousel-1800-2.jpg '
                  media='(min-width: 1400px max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-2.jpg '
                  media='(min-width: 768px
                max-height: 400px)'
                />
                <src
                  src='assets/images/carousel-1800-2.jpg '
                  media='(min-width: 576px max-height: 400px)'
                />
                <img
                  src='assets/images/carousel-1800-2.jpg'
                  alt='responsive image '
                  class='d-block img-fluid'
                />
               
              </picture>

              <div class='carousel-caption justify-content-center align-items-center'>
                <div>
                  <h2>Products you can Trust</h2>
                  <p>
                    Trusted Apothecary's in one place for convenience and
                    options
                  </p>
                  <span class='btn btn-sm btn-outline-success'>See More</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
