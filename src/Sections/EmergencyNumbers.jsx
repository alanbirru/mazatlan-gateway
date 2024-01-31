import React from "react";
import "../css/sections.css";

import logo911 from "../assets/emergency-num-img/911.jpg";
import contactoCiudadano from "../assets/emergency-num-img/contacto-ciudadano.png";
import policiaEstatal from "../assets/emergency-num-img/policia-estatal.jpg";
import policiaFederal from "../assets/emergency-num-img/policia-federal.jpg";
import cruzRoja from "../assets/emergency-num-img/cruz-roja.jpg";
import angelesVerdes from "../assets/emergency-num-img/angeles-verdes.jpg";
import policiaTransito from "../assets/emergency-num-img/policia-transito.jpg";
import traffic from "../assets/emergency-num-img/traffic.jpg";
import chicken from "../assets/emergency-num-img/chicken.jpg";

const EmergencyNumbers = () => {
  const copyToClipboard = (phoneNumber) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => alert(`Phone number ${phoneNumber} copied to clipboard`))
      .catch((error) => console.error("Failed to copy:", error));
  };

  const emergencyCards = [
    {
      title: "Emergency   991",
      img: logo911,
      information:
        "Mazatlán has your back! Our 9-1-1 Emergency Call Attention Service is here to handle all your medical, security, civil protection, and public services emergencies",
      number: "911",
      button: "Copy Phone",
      link: "#",
    },
    {
      title: "Contacting Citizen",
      img: contactoCiudadano,
      information:
        "Contacting Citizen is the ultimate communication hub for all the superheroes of public safety and emergency response! Connect with Public Security, Civil Protection, Fire Station, Red Cross, and Federal Police all in one place. It's the power of unity when it comes to keeping our communities safe and protected.",
      number: "669 986 8126",
      button: "Copy Phone",
      link: "https://adip.cdmx.gob.mx/centros/contacto-cuidadano/padrones",
    },
    {
      title: "Tourist Transit",
      img: policiaTransito,
      information:
        "If you need road support in the city of Mazatlan, the Tourist Transit Police can support you in case of: Car Crash, Flat Tire, Dead Battery.",
      number: "669 984 1087",
      button: "Copy Phone",
      link: "http://wvw.mazatlan.gob.mx/directorio/ayuntamiento/direccion-secretaria-de-seguridad-publica",
    },
    {
      title: "State Police",
      img: policiaEstatal,
      information: "Primero Escolar 10A, Urías, 82099 Mazatlán, Sin.",
      number: "669 982 0020",
      button: "Copy Phone",
      link: "https://www.sspsinaloa.gob.mx/",
    },
    {
      title: "Federal Police",
      img: policiaFederal,
      information:
        "If you are a victim or witness to a kidnapping or extortion in any of its modalities, you can make your complaint 24 hours a day, 365 days a year free of charge.",
      number: "669 985 1451",
      button: "Copy Phone",
    },
    {
      title: "Cruz Roja",
      img: cruzRoja,
      information: "F irst aid station, AV. Gral. Ignacio Zaragoza.",
      number: "088",
      button: "Copy Phone",
      link: "https://www.cruzrojamexicana.org.mx/",
    },
    {
      title: "tourism secretary",
      img: angelesVerdes,
      information:
        "Mechanical assistance and emergency radio communication. Assistance in case of accidents.",
      number: "669 982 8740",
      button: "Copy Phone",
      link: "https://www.gob.mx/sectur/angelesverdes",
    },
  ];

  return (
    <section id="emergency-numbers">
      <div className="container">
        <h1 className="section-title">
          Welcome To Mazatlan, There Is Some Juicy Details Comin' Your Way!
        </h1>

        <div>
          <img src={traffic} alt="traffic" />
          <p>
            Ready to see the sights? Just remember, when it comes to sharing
            the,{" "}
            <strong>
              streets, bikes, motorcycles, cars, and buses have the right
            </strong>{" "}
            of way. So, keep an eye out before you make a move. Safety first, my
            friend! Chickens have a better chance.
          </p>
        </div>

        <div>
          <img src={chicken} alt="traffic" />
          <p>
            Regarding buses in Mazatlán. You can tell where they are going by
            the names written on their windshields. There two types of busses,
            local and green. The local ones take a round about way and the green
            ones are more direct up and down the coast from Cerritos to the
            Ferry in Playa sur.
          </p>
        </div>

        <div>
          <img src={traffic} alt="traffic" />
          <p>
            The way to stop a bus is to wave to then and they stop. Or at very
            intermittent bus stops. The way to get off, is to know where you are
            going and to push the button on poles throughout the bus a block
            before you need to get off.
          </p>
        </div>
      </div>

      <div>
        <div className="card-emergency-container">
          {emergencyCards.map((card, index) => {
            return (
              <article className="card-emergency-numbers" key={index}>
                <img src={card.img} alt="card" />
                <div className="text-emergency">
                  <h2>{card.title}</h2>
                  <p>{card.information}</p>

                  <span className="phone-number">{card.number}</span>
                  <button onClick={() => copyToClipboard(card.number)}>
                    {card.button}
                  </button>

                  <a href={card.link} target="_blank">
                    <button>{card.link ? "More info" : "Unavailable"}</button>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmergencyNumbers;
