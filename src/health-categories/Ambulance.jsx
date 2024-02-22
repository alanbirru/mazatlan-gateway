import emergencyAmbulance from "../assets/health-categories-images/300.jpg";
const Ambulance = () => {
  return (
    <div className="card-emergency-container" id="ambulance">
      <div className="container">
        <h1 className="section-title">Ambulance</h1>

        <div>
          <p>
            There is the State-run Ambulance service, and it will take you to a
            State-run hospital. Call 911 Several privately owned hospitals have
            their ambulance service. They are often quicker but will bring you
            to their hospital only. Many of these will take medical insurance
            but check to make sure!
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src={emergencyAmbulance} alt="card" />
        <div className="text-emergency">
          <h2>Emergency Ambulance Service Mazatlan</h2>
          <p></p>

          <span className="phone-number">1232323213</span>
          <button>click</button>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Ambulance;
