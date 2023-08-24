import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="header">
          <img
            src={require("./hp_front2_header_img.jpg")}
            alt="cheeky sorbet logo"
          />
          <h1 className="otsikko">Cheeky Social Sorbet</h1>
          <p className="slogan">
            At Cheeky Social Sorbet, we're not your average digital marketing
            agency – we're the zing in your online presence! Just like a
            refreshing sorbet cleanses your palate, we bring a burst of
            creativity and innovation to your brand.
          </p>
          <div className="nav">
            <p>works</p>
            <p>contact</p>
            <p>about us</p>
          </div>
        </div>
      </div>
      <div className="works">
        <div>
          <h3>Client Case 1: WhimsicalWares E-Commerce</h3>
          <p>
            For WhimsicalWares, an online store selling unique handcrafted
            goods, we concocted a social media strategy that combined quirky
            product showcases with playful storytelling. By infusing humor and
            relatability into their posts, we boosted engagement and transformed
            their followers into avid customers, turning each scroll into a
            delightful journey.
          </p>
        </div>
        <div>
          <h3>Client Case 2: MemeMasters Gaming</h3>
          <p>
            MemeMasters Gaming wanted to level up their social media game. We
            crafted a campaign that fused gaming humor with viral trends,
            skyrocketing their follower count and building an enthusiastic
            community. Our cheeky posts and interactive challenges turned
            MemeMasters into more than just a game – it became an experience
            worth sharing.
          </p>
        </div>
        <div>
          <h3>Client Case 3: FitFunnies Fitness</h3>
          <p>
            FitFunnies Fitness sought a way to stand out in the saturated
            fitness market. We devised a content strategy that fused
            motivational workout tips with amusing gym anecdotes. Through
            relatable content, witty captions, and even the occasional workout
            blooper, we helped FitFunnies Fitness become the go-to destination
            for fitness enthusiasts seeking a laugh.
          </p>
        </div>
        <div>
          <h3>Client Case 4: BuzzBites Café</h3>
          <p>
            To give BuzzBites Café a distinctive online presence, we whipped up
            a campaign that combined mouthwatering food visuals with
            humor-filled captions. From playful coffee puns to witty
            descriptions of their delectable treats, our strategy transformed
            BuzzBites into an Instagram sensation that not only satisfied
            cravings but also tickled taste buds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
