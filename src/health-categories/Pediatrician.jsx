const Pediatrician = () => {
  return (
    <div className="card-emergency-container" id="pediatrician">
      <div className="container">
        <h1 className="section-title">Pediatricians</h1>

        <div>
          <p>
            Welcome to our Pediatricians section! Our pediatricians specialize
            in providing comprehensive medical care for infants, children, and
            adolescents. With a focus on preventive care and developmental
            milestones, our team is dedicated to promoting the health and
            well-being of your child from infancy through adolescence.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src="#" alt="card" />
        <div className="text-emergency">
          <h2>DR. JORGE FUENTEVILLA WHEATLEY</h2>
          <p>Carnaval 1611, Centro 82000 Mazatlan, Sin</p>

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

export default Pediatrician;
