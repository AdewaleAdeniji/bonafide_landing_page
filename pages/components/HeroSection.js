const HeroSection = () => {
  return (
    <div className="hero-section full-12">
      <div className="full-6">
        <div className="hero-text">
          Save, send and recieve digital dollars.<br/> Win $2000 weekly.
        </div>
        <div className="hero-subtext">
        Bonafide is a digital dollar wallet that lets you save, send and recieve digital dollars.
        </div>
        <div className="hero-form">
            <input type='email' placeholder="Enter your email address"/><button>Sign me up</button>
        </div>
        <div className="hero-form-label">
        Enter email address to win $2000
        </div>
        <div className="hero-footer-text">
        Join our <a>Discord</a> channel. Our Android app launches Jan 1
        </div>
      </div>
      <div className="full-6 img-sections">
        <img src="/assets/images/heroimg.svg" />
      </div>
    </div>
  );
};
export default HeroSection;
