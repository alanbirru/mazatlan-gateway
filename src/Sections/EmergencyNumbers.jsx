import React, { useEffect } from "react";
import "../css/emergency-numbers.css";
import logo911 from "../assets/emergency-num-img/911.jpg";
import contactoCiudadano from "../assets/emergency-num-img/contacto-ciudadano.png";
import policiaEstatal from "../assets/emergency-num-img/policia-estatal.jpg";
import policiaFederal from "../assets/emergency-num-img/policia-federal.jpg";
import cruzRoja from "../assets/emergency-num-img/cruz-roja.jpg";
import angelesVerdes from "../assets/emergency-num-img/angeles-verdes.jpg";
import policiaTransito from "../assets/emergency-num-img/policia-transito.jpg";

const EmergencyNumbers = () => {
  const emergencyCards = [
    {
      title: "991 Emergency",
      img: logo911,
      information:
        "Mazatlán has your back! Our 9-1-1 Emergency Call Attention Service is here to handle all your medical, security, civil protection, and public services emergencies",
      number: "911",
      button: "More info",
      link: "#",
    },
    {
      title: "Contacting Citizen",
      img: contactoCiudadano,
      information:
        "Contacting Citizen is the ultimate communication hub for all the superheroes of public safety and emergency response! Connect with Public Security, Civil Protection, Fire Station, Red Cross, and Federal Police all in one place. It's the power of unity when it comes to keeping our communities safe and protected.",
      number: "669 9868126",
      button: "More info",
      link: "https://adip.cdmx.gob.mx/centros/contacto-cuidadano/padrones",
    },
    {
      title: "Tourist Transit",
      img: policiaTransito,
      information:
        "If you need road support in the city of Mazatlan, the Tourist Transit Police can support you in case of: Car Crash, Flat Tire, Dead Battery.",
      number: "+52 669 984-1087",
      button: "More info",
      link: "http://wvw.mazatlan.gob.mx/directorio/ayuntamiento/direccion-secretaria-de-seguridad-publica",
    },
    {
      title: "State Police",
      img: policiaEstatal,
      information: "Primero Escolar 10A, Urías, 82099 Mazatlán, Sin.",
      number: "+52 669 982-0020",
      button: "More info",
      link: "https://www.sspsinaloa.gob.mx/",
    },

    {
      title: "Federal Police",
      img: policiaFederal,
      information:
        "If you are a victim or witness to a kidnapping or extortion in any of its modalities, you can make your complaint 24 hours a day, 365 days a year free of charge.",
      number: "669 985 1451",
      button: "More info",
    },

    {
      img: cruzRoja,
      information: "AV. Gral. Ignacio Zaragoza.",
      number: "Phone: 088 or 11036000",
      button: "More info",
      link: "https://www.cruzrojamexicana.org.mx/",
    },

    {
      title: "tourism secretary",
      img: angelesVerdes,
      information:
        "Mechanical assistance and emergency radio communication. Assistance in case of accidents.",
      number: "669 982 8740, 669 983 8875",
      button: "More info",
      link: "https://www.gob.mx/sectur/angelesverdes",
    },
  ];

  return (
    <section id="emergency-numbers">
      <div>
        <div className="card-emergency-container">
          {emergencyCards.map((card) => {
            return (
              <article className="card-emergency-numbers">
                <img src={card.img} alt="card" />
                <div className="text-emergency">
                  <h2>{card.title}</h2>
                  <p>{card.information}</p>
                  <span>{card.number}</span>
                  <a href={card.link} target="_blank">
                    <button>{card.button}</button>
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
