import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import './BlogDetails.scss';
import './Blog.scss';
import './Comment.scss';
import '../Contact/Contact.scss';
import video from '/casterWheelGUI/demo.mp4'; 

import Carousel from '../Slider/Carousel';

const BlogDetails = () => {
  const blogDetails = {
    heroBg: '/images/background/hero-bg.jpg',
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: [
      {
        imgLink: '/images/anaglyph_images.jpeg',
      },
      {
        imgLink: '/images/hero-bg4.jpg',
      },
    ],
  };
  const anaglyphDetails = {
    heroBg: '/images/background/hero-bg.jpg',
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: [
      {
        imgLink: '/images/anaglyph_images.jpeg',
      },
      {
        imgLink: '/images/anaglyph_images.jpeg',
      },
    ],
  };
  const casterDetails = {
    heroBg: '/images/background/hero-bg.jpg',
    useFor: 'image-slider',
    sliderSetting: {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    sliderImages: [
      {
        imgLink: '/casterWheelGUI/main.png',
      },
      {
        imgLink: '/casterWheelGUI/setToBrake.png',
      }
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="st-content">
      <div
        className="st-page-heading st-bg"
        style={{ backgroundImage: `url(${blogDetails.heroBg})` }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h1 className="st-page-heading-title">
              Projects <br />
            </h1>
            <div className="st-post-label">
              <span>
                 <Link to="">Jacqueline Li</Link>
              </span>

            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-md-1">
            <div className="st-post-details st-style1">
              <h2>Zeta Surgical Frontend/Backend</h2>
              <p>
                As a software engineer at Zeta Surgical, I have been working on
                both the frontend and backend of the Zeta Surgical Navigation System. 
                For the frontend, I work with a Qt interface that integrates figma files. 
                I create all the way from simple button to a whole new workflow for a new project.
              </p>
              <p>

              </p>
              <a href="https://www.zetasurgical.com/">
              <img src="/images/zeta_platform.png" 
     width="400" 
     height="500" />
              </a>
              <h2>Electric Caster Wheels Software/GUI</h2>
              <div className="st-post-info">
                <div className="st-post-text">
                  <p>
                   The Zeta Surgical Navigation System has four electronic caster wheels 
                   as part of the cart. I was in charge of creating a software that controls
                   the servo motor of the caster wheels in which that if there is a state change
                   in one of the wheels, it would cause the other three wheels to chagne to the same 
                   state. The software runs in the background upon turning on the Zeta Navigation System.
                  </p>
                  <Carousel data={casterDetails} />
                  {/* .st-slider */}
                  <p>
                  To help with maintenance, I created a caster wheel graphic user interface using Visual Studio 2019 using C++ and Qt VS Tools.
                  It allows the user to test the caster wheels directly with the GUI. It contains the following features:
                  </p>
              
                  <h5>Features:</h5>
                  <p>
                  <blockquote>
                  <span>State Detection</span>
                    <small>
                       <span> Display the state at which the caster wheels are in. Changes accordingly.</span>
                    </small>
                  </blockquote><br></br>
                  <blockquote>
                  <span>Log File Display</span>
                    <small>
                       <span> A log file is created by the software and keeps a it within same directory - logs every change in state, and error that occurs with the caster wheels. This GUI Displays the the log file upon opening. Has the option to clear out the log file.</span>
                    </small>
                  </blockquote><br></br>
                  <blockquote>
                  <span>Voltage Monitoring</span>
                    <small>
                       <span> Uses QCustomPlot to plot the voltage display of each caster wheel to help troubleshoot.</span>
                    </small>
                  </blockquote><br></br>
                  <blockquote>
                  <span>Demo</span><br></br>
                  <video width="640" height="360" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      
                </video>
                  </blockquote>
                  </p>
                  <h2>Life Tracker</h2>
                  <p>
                    A MacOS application built with Swift/SwiftUI to help track one's fitness goals and give positive affirmations daily. It stores the weight in CoreData and displays all the weights using a graph.
                  </p>
                      <img
                    className="st-zoom-in"
                    src="/images/LifeTracker.png"
                    alt="LifeTracker"
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration some
                    even slightly believable. If you are going to use passage of
                    Lorem Ipsum.
                  </p>
                  <h2>Biopsy Project</h2>
                  <p>
                    Led the software end of the Biopsy Project.
                  </p>
                  <Carousel data={anaglyphDetails} />
                  {/* .st-slider */}
                  <h2>Anaglyph Generator</h2>
                  <p>
                  An 3D anaglyph is the stereoscopic 3D effect created by means of encoding each eye's image using filters of different (usually chromatically opposite) colors. Here in the Anaglyph Generator, it creates this 3D anaglyph by combining a pair of stereo images.
                  </p>
                  <Carousel data={anaglyphDetails} />
                  {/* .st-slider */}
                  <div className="st-height-b20 st-height-lg-b20" />
                  <p>
                    Comes with a menu that offers different types of anaglyph images.
                  </p>
                </div>
                <div className="st-height-b35 st-height-lg-b35" />

                <div className="st-height-b60 st-height-lg-b60" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80" />
    </section>
  );
};

export default BlogDetails;
