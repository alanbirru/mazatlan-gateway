import stevenBackman from "../assets/health-categories-images/338.jpg";

const Chiropractors = () => {
  return (
    <div className="card-emergency-container" id="chiropractors">
      <div className="container">
        <h1 className="section-title">Chiropractors</h1>

        <div>
          <p>
            Chiropractors are healthcare professionals who specialize in
            diagnosing and treating musculoskeletal disorders, particularly
            those related to the spine. They focus on the relationship between
            the nervous system and the spine, believing that proper alignment of
            the spine can positively impact overall health. Chiropractic care
            often involves manual adjustments or manipulations to address
            misalignments in the spine, aiming to alleviate pain, improve joint
            function, and enhance the body's natural healing abilities.
          </p>
        </div>
      </div>

      <article className="card-emergency-numbers">
        <img src={stevenBackman} alt="card" />
        <div className="text-emergency">
          <h2>DR. STEVEN BACKMAN, DC</h2>
          <p>
            Dr, Backman specializes in health and wellness programs that are not
            invasive and are designed to help your body heal itself without the
            use of prescription drugs or surgery.
          </p>

          <p>
            Our personnel are completely bilingual (English and Spanish) and are
            dedicated to helping you reach optimal health. Our priority is to
            bring relief to whatever pain or discomfort, whether it is a chronic
            condition or a recent injury.
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

export default Chiropractors;
