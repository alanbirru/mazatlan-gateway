const GeneralDoctors = () => {
  return (
    <div className="card-emergency-container" id="general-doctors">
      <div className="container">
        <h1 className="section-title">General Doctors</h1>

        <div>
          <p>
            Welcome to our General Doctors section! Our team of general
            practitioners provides comprehensive healthcare services for
            patients of all ages. From routine check-ups to managing chronic
            conditions, our doctors offer personalized care to support your
            overall health and well-being.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src="#" alt="card" />
        <div className="text-emergency">
          <h2>Dr Jorge Garcia De La Rosa</h2>
          <p>AV DEL MAR 80, PALOS PRIETOS, 82010 MAZATLAN, SIN</p>

          <span className="phone-number">669 122 4705</span>
          <button>click</button>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default GeneralDoctors;
