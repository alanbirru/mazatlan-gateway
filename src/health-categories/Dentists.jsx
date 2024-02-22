import drArturoBarros from "../assets/health-categories-images/401.jpg";

const Dentists = () => {
  return (
    <div className="card-emergency-container" id="dentists">
      <div className="container">
        <h1 className="section-title">Dentists</h1>
        <div>
          <p>
            Certainly! Here's a shorter version of the Dentists section
            description: Welcome to our Dentists section! Dentists specialize in
            maintaining oral health through treatments like cleanings, fillings,
            and cosmetic procedures. Our skilled team is dedicated to providing
            comprehensive care tailored to your needs. Let us help you achieve a
            healthy, beautiful smile!
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src={drArturoBarros} alt="card" />
        <div className="text-emergency">
          <h2>Dr. Arturo Barros de Cima</h2>
          <p>
            Did you know that oral diseases, such as cavities and periodontal
            diseases, are the most common in Mazatlan and, to a large extent,
            can be avoided by having a regular dental check-up? At Dr. Arturo
            Barros de Cima we are concerned about your dental health and we put
            at your disposal the latest technology in hygiene and oral care. We
            offer a wide range of services and a friendly and relaxed
            environment, which are essential factors when taking care of your
            oral health.
          </p>

          <span className="phone-number">+52 669 941 0172</span>
          <button>click</button>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Dentists;
