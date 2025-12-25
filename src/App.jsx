import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import ContactSection from "./components/ContactSection";
import Vision from "./components/Vision";
import Agenda from "./components/Agenda";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CardsSection />
                <ContactSection />
              </>
            } />
            <Route path="/vision" element={<Vision />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/join" element={<CardsSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
