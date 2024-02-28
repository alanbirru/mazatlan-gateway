import guadalajara from "../assets/health-categories-images/Gudalahara.jpg";
import similares from "../assets/health-categories-images/Similares.jpg";

const Pharmacy = () => {
  return (
    <div className="card-emergency-container" id="pharmacy">
      <div className="container">
        <h1 className="section-title">Pharmacy</h1>

        <div>
          <p>
            In Mexico, there are two main types of pharmacies: "Farmacias
            Similares" and traditional pharmacies.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src={guadalajara} alt="card" />
        <div className="text-emergency">
          <h2>Farmacia Guadalajara </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            eveniet at id nostrum, ducimus eum excepturi eos quod?
          </p>

          <span className="phone-number">1232323213</span>
          <button>click</button>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>

      <article className="card-emergency-numbers">
        <img src={similares} alt="card" />
        <div className="text-emergency">
          <h2>Farmacia Similares</h2>
          <p>
            Farmacias Similares operates on a unique business model. They focus
            on providing affordable generic medications and healthcare products.
          </p>

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

export default Pharmacy;
