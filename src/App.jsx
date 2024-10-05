import React from "react";
import cardsData from "./Data";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="cards-container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            wikiUrl={card.wikiUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
