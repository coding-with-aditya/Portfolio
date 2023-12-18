export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aditya</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I have 6 years Experince in This Field for Website Developement
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Click</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/adi.png" alt="Hero Section" />
      </div>
    </section>
  );
}
