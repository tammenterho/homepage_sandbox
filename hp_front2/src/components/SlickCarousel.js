import React, { Component } from "react";
import Slider from "react-slick";
import "./../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { HashLink as Link } from "react-router-hash-link";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 2,
    };

    return (
      <div className="works" id="works">
        <h2 className="works-header"> Works</h2>
        <Link to="#nav">
          <ArrowCircleUpIcon className="uparrow"></ArrowCircleUpIcon>
        </Link>
        <Slider {...settings}>
          <div>
            <div className="clientcase case1">
              <h3>Client Case 1: WhimsicalWares E-Commerce</h3>
              <img
                src={require("./../images/whimsicalwares.png")}
                alt="cheeky sorbet logo"
              />
              <p>
                For WhimsicalWares, an online store selling unique handcrafted
                goods, we concocted a social media strategy that combined quirky
                product showcases with playful storytelling. By infusing humor
                and relatability into their posts, we boosted engagement and
                transformed their followers into avid customers, turning each
                scroll into a delightful journey.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="clientcase case2">
                <h3>Client Case 2: MemeMasters Gaming</h3>
                <img
                  src={require("./../images/mememasters.png")}
                  alt="cheeky sorbet logo"
                />
                <p>
                  MemeMasters Gaming wanted to level up their social media game.
                  We crafted a campaign that fused gaming humor with viral
                  trends, skyrocketing their follower count and building an
                  enthusiastic community. Our cheeky posts and interactive
                  challenges turned MemeMasters into more than just a game – it
                  became an experience worth sharing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="clientcase case3">
              <h3>Client Case 3: FitFunnies Fitness</h3>
              <br></br>
              <img
                src={require("./../images/acorn-github.png")}
                alt="cheeky sorbet logo"
              />
              <p>
                FitFunnies Fitness sought a way to stand out in the saturated
                fitness market. We devised a content strategy that fused
                motivational workout tips with amusing gym anecdotes. Through
                relatable content, witty captions, and even the occasional
                workout blooper, we helped FitFunnies Fitness become the go-to
                destination for fitness enthusiasts seeking a laugh.
              </p>
            </div>
          </div>
          <div>
            <div className="clientcase case4">
              <h3>Client Case 4: BuzzBites Café </h3>
              <br></br>
              <img
                src={require("./../images/lilmac.jpg")}
                alt="cheeky sorbet logo"
              />
              <p>
                To give BuzzBites Café a distinctive online presence, we whipped
                up a campaign that combined mouthwatering food visuals with
                humor-filled captions. From playful coffee puns to witty
                descriptions of their delectable treats, our strategy
                transformed BuzzBites into an Instagram sensation that not only
                satisfied cravings but also tickled taste buds.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
