import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfact freelance services for your business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="puplic\img\Search_Icon.svg.png" alt="" />
                        <input type="text"  placeholder='Try "building mobile app"'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="puplic\img\featuredd.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured