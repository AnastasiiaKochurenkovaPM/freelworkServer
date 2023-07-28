import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import Card from '../../components/Card/Card'
import {cards, projects} from "../../data"
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
            <Card item={card} key={card.id}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
            Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              Pay when you're happy
            </div>
            <p>
            Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
            Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
          <div className="item">
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/FYrO_fhx4Y4" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </iframe>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>freelwork <i>business</i></h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed 
              with tools and benefits, 
              dedicated to business</p>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="puplic\img\check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Freelwork Business</button>
            </div>
          <div className="item">
            <img src="https://i.pinimg.com/564x/79/f8/79/79f8799b8091c85b1323712818239900.jpg" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
            <ProjectCard item={card} key={card.id}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home