

const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                
                <p>
                    YOUR FEET DESERVE THE BET AND WE'ARE HERE THE HELP YOU WITH OUR SHOWS.
                    YOUR FEET DESERVE THE BEST AND WE'ARE HERE TO HELP YOU WITH OUR SHOWS.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also available OnLine</p>
                <div className="brand-icon">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    {/* <img src="/images/flipkart.png" alt="flipkartlogo" /> */}
                </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="hero-image" />
            </div>
        </main>

    )
}
export default HeroSection;