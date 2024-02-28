import { motion } from "framer-motion";
import "../css/coming-soon.css";

const Shopping = () => {
  const shoppingCards = [
    {
      title: "Mercado Pino Suárez",
      information:
        "Dive into the heart of Mazatlán's culture by exploring Mercado Pino Suárez. This bustling market is a treasure trove of local crafts, fresh produce, spices, and traditional Mexican goods. Bargaining is common here, so embrace the lively atmosphere and negotiate for unique souvenirs.",
    },
    {
      title: "Zona Dorada (Golden Zone)",
      information:
        "If you're looking for a more contemporary shopping experience, head to Zona Dorada. This area is known for its modern boutiques, upscale shops, and malls. Here, you'll find a mix of local and international brands, making it a great place for fashion, accessories, and beachwear.",
    },
    {
      title: "Plaza Machado",
      information:
        "Immerse yourself in Mazatlán's historic center at Plaza Machado. Surrounded by colonial architecture, this charming square hosts artisan markets and cultural events. It's a fantastic spot to pick up handmade crafts, jewelry, and local artwork while enjoying the city's rich history.",
    },
    {
      title: "La Gran Plaza Mall",
      information:
        "For a one-stop shopping destination, visit La Gran Plaza Mall. It boasts a variety of stores, from well-known brands to local boutiques. You can shop for clothing, electronics, and souvenirs, making it a convenient option for a diverse shopping experience",
    },
    {
      title: "Artisan Markets",
      information:
        "Mazatlán is famous for its handicrafts, and you'll find numerous artisan markets throughout the city. Look for items like embroidered textiles, pottery, and handcrafted jewelry, which showcase the region's artistic traditions.",
    },

    {
      title: "Tequila and Sinaloa Products:",
      information:
        "Don't forget to explore local liquor stores for a taste of authentic Mexican tequila. Mazatlán is in the state of Sinaloa, known for producing quality ",
    },

    {
      title: "agave-based spirits",
      information:
        "You can also find regional products like vanilla, hot sauces, and spices to bring a touch of Mazatlán back home.",
    },
  ];

  return (
    <motion.section
      id="shopping"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="section-title">
          Welcome to Mazatlán's Marketplace: Your Ultimate Directory for Every
          Need
        </h1>

        <div>
          <p>
            Welcome to Mazatlán, a vibrant coastal city on the Pacific shores of
            Mexico! Shopping in Mazatlán is a delightful experience that blends
            traditional markets with modern shopping centers, offering a diverse
            range of goods and souvenirs. Here's a short intro to shopping in
            Mazatlán
          </p>
        </div>
      </div>

      <div className="card-emergency-container">
        {shoppingCards.map((card, index) => {
          return (
            <article className="card-emergency-numbers" key={index}>
              <div className="text-emergency">
                <h2>{card.title}</h2>
                <p>{card.information}</p>
              </div>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Shopping;
