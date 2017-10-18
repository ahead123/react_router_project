import React, { Component } from 'react'
import Link from 'react-router-redux-dom-link'
import '../css/landingPage/landing-page.css'
import { Story, ListButton } from './common'

class Home extends Component {

  render() {
  
    return (
      <div>

        <header className="intro-header">
          <div className="container">
            <div className="intro-message">
              <h1>TipJar</h1>
              <h3>We're Making Tipping Social!</h3>
              <hr className="intro-divider"></hr>
              <ul className="list-inline intro-social-buttons">
                <ListButton path="/sign-up" text="Sign Up" />
                <ListButton path="/sign-in" text="Sign In" />
                <ListButton path="/about" text="About" />
              </ul>
            </div>
          </div>
        </header>

        <section className="content-section-a">
          <Story 
            heading="Say Bye Bye To The Old School Tip Jar!" 
            lead="Physical tip jars are so 2000. We've heard the stories about... 'not always having cash these days',
            people stealing the tip jar', yadda yadda yadda the list goes on... No worries we got ya covered. We're re-inventing the way
            society views the tip! Tipping will now be a social and digital exchange. Think Facebook + Yelp for Tips!" 
            imageURL="https://goo.gl/nnBYxr"
            order="col-lg-5 mr-auto"
          />
        </section>

        <section className="content-section-b">
          <Story 
            heading="Leave A Tip Easily In The App!" 
            lead="Just download the TipJar app in the Apple and Android app stores.
            We've integrated with popular payment companies like Stripe, and PayPal to make
            leaving a tip in the app a cinch!" 
            imageURL="https://goo.gl/wTmKbV"
            order="col-lg-5 mr-auto order-lg-2"
          />
        </section>

        <section className="content-section-a">
          <Story 
            heading="Become A Big Tipper And Earn Cool Perks!" 
            lead="You'll earn points the more you tip using the TipJar app. You can redeem
            points for cool stuff like special tables at restaurants, and skipping the rsvp queue at the 
            hottest places around town!" 
            imageURL="https://goo.gl/3xzMRp"
            order="col-lg-5 mr-auto"
          />
        </section>

      </div>
    );
  }
}

export default Home;
