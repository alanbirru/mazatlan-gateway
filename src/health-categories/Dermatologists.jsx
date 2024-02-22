import draCeciliaRosa from "../assets/health-categories-images/530.jpg";

const Dermatologists = () => {
  return (
    <div className="card-emergency-container" id="dermatologists">
      <div className="container">
        <h1 className="section-title">Dermatologists</h1>

        <div>
          <p>
            Welcome to our Dermatologists section! Dermatologists specialize in
            diagnosing and treating skin conditions, ranging from acne to skin
            cancer. With expertise in medical and cosmetic dermatology, our team
            offers personalized care to help you achieve healthy, radiant skin.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src={draCeciliaRosa} alt="card" />
        <div className="text-emergency">
          <h2>Dra. Celia Rosa Tejeda Aguirre</h2>
          <p>
            Specialist in: Skin Surgery, Skin Infections, Aesthetic Dermatology
            Diseases Treated: Atopic dermatitis, allergies, Acne
          </p>

          <a href="#" target="_blank">
            <button>Lorem ipsum dolor sit.</button>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Dermatologists;
