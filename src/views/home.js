import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import PortofolioCard from '../components/portofolio-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Creative Agency Page</title>
        <meta property="og:title" content="Creative Agency Page" />
      </Helmet>
      <Navigation rootClassName="navigationroot-class-name"></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text10 Heading1">
                <span>We are a Innovative Management Firm based </span>
                <span>in India</span>
              </h1>
              <span className="home-text13">under maintenance</span>
              <button className="home-primary1 button-primary button-lg button">
                Get in touch with us
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container2">
                <img
                  alt="image"
                  src="/rectangle%2095-1000w.png"
                  className="home-image1"
                />
              </div>
              <div className="home-container3">
                <img
                  alt="image"
                  src="/rectangle%2095%20%5B1%5D-1000w.png"
                  className="home-image2"
                />
                <img
                  alt="image"
                  src="/rectangle%2095%20%5B2%5D-1000w.png"
                  className="home-image3"
                />
              </div>
              <div className="home-container4">
                <img
                  alt="image"
                  src="/rectangle%2095%20%5B3%5D-1000w.png"
                  className="home-image4"
                />
                <div className="home-container5">
                  <img
                    alt="image"
                    src="/rectangle%2095%20%5B4%5D-1000w.png"
                    className="home-image5"
                  />
                  <img
                    alt="image"
                    src="/rectangle%2095%20%5B5%5D-1000w.png"
                    className="home-image6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container2">
              <div className="home-text-container1"></div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-cards-container"></div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <span className="home-text14">our work</span>
              <h2 className="home-text15 Heading2">
                <span>Explore our portfolio</span>
              </h2>
              <button className="button-secondary button-lg button">
                See all projects
              </button>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text17 tab-selector-btn">Advertising</span>
              <span className="home-text18 tab-selector-btn">Social Media</span>
              <span className="home-text19 tab-selector-btn">Branding</span>
              <span className="home-text20 tab-selector-btn">UI / UX</span>
              <span className="home-text21 tab-selector-btn">Packaging</span>
              <span className="tab-selector-btn">Product Design</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                imageSrc="/unsplash_qj15unotnh0-400h.png"
                rootClassName="portofolio-cardroot-class-name"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="/unsplash_wwqrpsnbpq4-400h.png"
                projectTitle="A brand-new advertising idea"
                rootClassName="portofolio-cardroot-class-name5"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-text-container3">
              <span className="home-text23">about us</span>
              <h2 className="home-text24 Heading2">
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className="home-text28">
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className="home-checklist">
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text29">
                    Quality services and support all time
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text30">
                    Long term strategy development
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text31"> Brand Audit for startups</span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text32">
                    Over 3 years in the business
                  </span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text33">Future-Proofing Projects</span>
                </div>
                <div className="home-check-item6">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text34">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/rectangle%20109-1000w.png"
                className="home-image7"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text35">Our process</span>
            <h2 className="home-text36 Heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step1">
              <span className="home-text40">01</span>
              <div className="home-container6">
                <span className="home-text41">Finding the best idea</span>
                <span className="home-text42">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text43">02</span>
              <div className="home-container7">
                <span className="home-text44">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text45">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-text46">03</span>
              <div className="home-container8">
                <span className="home-text47">Strong design execution</span>
                <span className="home-text48">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog section-container">
          <img
            alt="image"
            src="/capture%20epf1-600h.png"
            className="home-image8"
          />
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text49">what are you waiting?</span>
            <h2 className="home-text50 Heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <button className="home-primary3 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text52">Product</span>
                <span className="home-text53">About</span>
                <span className="home-text54">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="home-navigate-container">
                <span className="home-text56">Navigate</span>
                <span className="home-text57">Copyrights</span>
                <span className="home-text58">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="home-contact-container">
                <span className="home-text60">Contact Us</span>
                <span className="home-text61">
                  Balaji Nagar, Visakhapatnam, A.P. India 530046
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <span className="home-text62">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width8 max-content-container">
          <span className="home-text63">
            <span>All rights recived @</span>
            <span>
              MYKULA CORPORATION (OPC) PRIVATE LIMITED.                         
                         Email ID: mykula.connect@gmail.com
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link">
        <div aria-label="Sign up to TeleportHQ" className="home-container9">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon26"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text67">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
