export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
        
            <h2 className="hero--section--title">
              <span className="hero--section-title--color">Hey,<br/> I'm Bharathi Raja</span>
            
            </h2>
            <p className="section--title">Infrastructure Mangement Specialist</p> 
            <br />
          
            <p className="hero--section-description">
            An Infrastructure Management Specialist oversees the planning, implementation, and maintenance of an organization's IT infrastructure. They ensure the reliability and efficiency of network systems, servers, storage and etc.,
            </p>
          </div>
          <a
              href="BharathiRajaM-Resume.pdf"
              download="Bharathi Raja M Resume.pdf"
            >
          <button className="btn btn-primary">Get Resume</button>
          </a>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  