const Home = () => (
  <section className="hero-nisha" id="home">
    <div className="nisha-left">
      <div className="nisha-hello">HI!</div>
      <div className="nisha-name">
        I'm <span>Nisha</span>
      </div>
      <div className="nisha-role">Your next door Product Manager</div>
      <div className="nisha-tagline">
        I turn messy ideas into products people love. GWU grad, curious builder, always connecting the dots.
      </div>
      <div className="nisha-cta">
        <a
          href="https://github.com/NishaChauhan-ctrl"
          target="_blank"
          className="nisha-btn"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
      </div>
    </div>
    <div className="nisha-right">
      <img
        src="/Portfolio/assets/Nisha.jpeg"
        alt="Nisha Chauhan"
        className="nisha-img"
      />
    </div>
  </section>
);

export default Home;
