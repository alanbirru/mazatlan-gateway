import bicinentenarioClinic from "../assets/health-categories-images/400.jpg";

const Clinics = () => {
  return (
    <div className="card-emergency-container" id="clinics">
      <div className="container">
        <h1 className="section-title">Clinics</h1>

        <div>
          <p>
            Welcome to our Clinics section! Our clinics offer comprehensive
            healthcare services, including routine check-ups, preventive care,
            and specialized treatments. With experienced medical professionals
            and state-of-the-art facilities, we prioritize personalized care to
            help you achieve optimal health and wellness.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src={bicinentenarioClinic} alt="card" />
        <div className="text-emergency">
          <h2>Mazatlan Bicentennial Medical Point Clinic</h2>
          <p>
            Av. Bicentenario Juarez #84 col. Francisco Villa, Mazatlan, Mexico
          </p>

          <span className="phone-number">669 157 4997</span>
          <button>click</button>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Clinics;
