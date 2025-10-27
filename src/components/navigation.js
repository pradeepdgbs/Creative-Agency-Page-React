import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation-header ${props.rootClassName} `}
    >
      <div className="navigation-max-width">
        <div className="navigation-nav1">
          <NavigationLinks rootClassName="navigation-linksroot-class-name17"></NavigationLinks>
          <button className="button-secondary button button-md">
            {props.button}
          </button>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation-nav2">
            <div className="navigation-container1">
              <img alt={props.imageAlt1} src={props.imageSrc1} />
              <div
                data-role="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="navigation-linksroot-class-name18"></NavigationLinks>
            <button className="button-secondary button button-md">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
      <div className="mykula-logo-container">
        <div className="mykula-logo-icon">
          <svg
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <span className="mykula-logo-text">mykula</span>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes mykula-logo-pulse {0%,100% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.05);
opacity: 0.8;}}
        </style> `}
          ></Script>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
  button: 'Get in touch',
  imageAlt1: 'image',
  imageSrc1: '/logo1-1200w.png',
  button2: 'Get in touch',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button2: PropTypes.string,
}

export default Navigation
