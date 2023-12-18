export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/adii.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          A technology savvy professional with an exceptional capacity to analyze, solve problems and multi-task. 
          Technical expertise in highly scalable distributed systems, self-healing systems, and service-oriented 
          architecture. Technical Skills: Java/J2EE, Spring, Hibernate, Reactive Programming, 
          Microservices, Hystrix, Rest APIs, Java 8, Kafka, Kibana, Elasticsearch, etc.
          </p>
          <p className="hero--section-description">
          Hiring managers spend, on average, six seconds reviewing your resume, so the best way to quickly
           make the case that you’re a great fit for the role is by estimating the impact of the projects    you
          ’ve worked on within your full-stack developer resume.
          </p>
        </div>
      </div>
    </section>
  );
}
