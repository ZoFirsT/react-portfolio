import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "React landing page",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique voluptas explicabo saepe dignissimos excepturi temporibus nisi labore molestiae pariatur."
}

function Banner() {
  return (
    <div className="banner-bg">
        <div className="container">
            <div className="banner-con">
                <div className="banner-text">
                    <h1>{bannerData.title}</h1>
                    <p>
                        {bannerData.desc}
                    </p>
                    <a href="#" className="banner-gtn">Learn more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner