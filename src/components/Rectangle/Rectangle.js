import vector13 from '../../images/vector-13@2x.png';
import rectangle from '../../images/rectangle-8@1x.png';
import rectangleOne from '../../images/rectangle@2x.png';
import rectangleTwo from '../../images/rectangle-1@2x.png';
import rectangleNine from '../../images/rectangle-9@2x.png';
import hr from '../../images/hr@1x.png';
import vectorArrow from '../../images/vector-16@2x.png';
import vectorSix from '../../images/vector-5@2x.png';
import vectorFive from '../../images/vector-8@2x.png';
import React from 'react';
import './Rectangle.css';
import leftArrow from '../../images/vector@2x.png';
import rightArrow from '../../images/vector-1@2x.png';
import ellipseOne from '../../images/ellipse-1@2x.png';
import ellipseTwo from '../../images/ellipse-2@2x.png';
import footer from '../../images/footer@1x.png';
// import {Link} from 'react-router-dom';
import Header from '../Header/Header';
const Body = (props)=>{
    return(
      <>
      <Header />
        <div className="container-center-horizontal">
            <div className="home1 screen">
              
            <div className="overlap-group">
              <img
                className="rectangle-8"
                src={rectangle}
                alt="rec"
              />
              <div className="group-53">
                <div className="overlap-group2">
                  <img
                    className="rectangle"
                    src={rectangleOne}
                    alt="one"
                  />
                  <img
                    className="rectangle-1"
                    src={rectangleTwo}
                    alt="two"
                  />
                </div>
              </div>
              <div className="group-55">
                <AngleLeft src={leftArrow} alt="Not Found"/>
                <div className="angle-right-1">
                  <img
                    className="vector-1"
                    src={rightArrow}
                    alt="rightArrow"
                  />
                </div>
              </div>
            </div>

           
        <h1 className="text-1">Essential Mobile App Landing for Workspaces</h1>

        <p className="text-2">
          A mobile app landing page is important and essential for right amount of information about your product. Start
          increasing your user base upon the launch of your product
        </p>


        <div className="button">
          <div className="explore-demos">Explore Demos</div>
          <div className="arrow-right">
            <img
              className="vector-2"
              src={vector13}
              alt="Not Found"
            />
          </div>
        {/* <button className="explore-demos"> Explore Demos</button> */}
        </div>

        <div className="explore-our-demos poppins-bold-black-20px">Explore our demos</div>
        <p className="text-9 poppins-normal-black-14px">
          Explore our landing Page demos on different kind of topics. More Demos are coming soon.
        </p>
         


        <div className="flex-row">
          <img
            className="rectangle-9"
            src={rectangleNine}
            alt="Not Found"
          />
                   
                   
                   <div className="overlap-group1">
            <img
              className="vector-3"
              src={leftArrow}
              alt="Not Found"
            />
          </div> 
         
          <AngleLeft
            src={rightArrow}
            className="angle-right"
            alt="Not Found"
          />
        </div>
        <div className="flex-row-1">
          <div className="website-landing poppins-bold-black-18px">Website Landing</div>
          <div className="app-modern-landing poppins-bold-black-18px">App Modern Landing</div>
        </div>
        

        <img
          className="hr-1"
          src={hr}
          alt="Not Found"
        />


          <div className="text-7 poppins-semi-bold-black-20px">Start your business journey with Soprano</div>
        <p className="text-8 poppins-normal-black-14px">
          Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.
        </p>



        <div className="group-54">
          <div className="move-ur-bussiness">
            <div className="globe-africa">
              <div className="overlap-group2-1">
                <div className="location-arrow">
                  <img
                    className="vector-4"
                    src={vectorArrow}
                    alt="Not Found"
                  />
                </div>
              </div>
            </div>
            <div className="text-4 poppins-bold-black-14px">Move Your Business Online</div>
            <p className="text-5 poppins-normal-black-10px">
              Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.
            </p>
          </div>
          <div className="swicth">
            <div className="user-friends">
              <img
                className="vector-5"
                src={vectorFive}
                alt="Not Found"
              />
            </div>
            <div className="switch-to-soprano poppins-bold-black-14px">Switch to Soprano</div>
            <p className="text-6 poppins-normal-black-10px">
              Bring your business to Soprano, no matter which ecommerce platform you’re currently using.
            </p>
          </div>
          <div className="enjoy">
            <div className="smile">
              <img
                className="vector-6"
                src={vectorSix}
                alt="Not Found"
              />
            </div>
            <div className="enjoy-ur-benefits poppins-bold-black-14px">Enjoy ur benefits</div>
            <p className="text-3 poppins-normal-black-10px">
              Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.
            </p>
          </div>
        </div>


                  



        <div className="button-1">
          <div className="overlap-group3">
            <div className="start-free-trail">Start Free Trail</div>
          </div>
        </div>
        <img
          className="hr-2"
          src={hr}
          alt="Not Found"
        />

                    <div className="text-10 poppins-bold-black-20px">What Clients say about our product</div>
       

                    
                    <div className="flex-row-2">
          <div className="group-58">
            <div className="overlap-group4">
              <div className="group-57">
                <div className="overlap-groupTwo border-1px-fuchsia">
                  <div className="name poppins-bold-black-25px">Allen Jones</div>
                  <p className="text-11 poppins-normal-black-14px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore
                    features that Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <img
                className="ellipse-1"
                src={ellipseOne}
                alt="Not Found"
              />
            </div>
          </div>
          <div className="group-56">
            <div className="overlap-groupF border-1px-fuchsia">
              <div className="flex-row-3">
                <img
                  className="ellipse-2"
                  src={ellipseTwo}
                  alt="Not Found"
                />
                <div className="name-1 poppins-bold-black-25px">Allen Jones</div>
              </div>
              <p className="text-12 poppins-normal-black-14px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore
                features that Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>


            
            
          </div>
     </div>


             
<div className="group60">
          <div className="overlapgroup6">
            <div className="flex-col-1">
              <div className="text-13">Subscribe our newsletter</div>
              <p className="text-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore
              </p>
            </div>
            <div className="group-59">
              <div className="flex-col-2">
                <div className="email-address">Email Address</div>
                <div className="rectangle-14"></div>
              </div>
              <div className="button-2">
                <div className="overlap-group2-3">
                  <div className="get-access">Get Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
                
        <img
          className="hr3"
          src={hr}
          alt="Not Found"
        />
        <img
          className="footer1"
          src={footer}
          alt="Not Found"
        />
        
</>
    )
}

export default Body;

function AngleLeft(props) {
  const { src, className } = props;

  return (
    <div className={`angle-left ${className || ""}`}>
      <img className="vector" src={src} alt="Not Found"/>
    </div>
  );
}
