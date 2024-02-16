const Hospitals = () => {
  return (
    <div className="card-emergency-container" id="hospitals">
      <div className="container">
        <h1 className="section-title">Hospitals</h1>

        <div>
          <p>
            Welcome to our Hospitals section! Our hospitals provide high-quality
            medical care, advanced treatments, and compassionate support to
            patients in need. With state-of-the-art facilities and a dedicated
            team of healthcare professionals, we are committed to delivering
            exceptional care for your health needs.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src="#" alt="card" />
        <div className="text-emergency">
          <h2>City Hospital/ Medica De La Ciudad</h2>
          <p>Blvd. Marina, Mazatlan # 2207, La Marina</p>

          <span className="phone-number">669 195 9195</span>
          <button>click</button>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Hospitals;
