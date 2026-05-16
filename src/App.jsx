import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import ContactSection from "./components/ContactSection"; // 🔹 This file contains your new complaint form code
import Vision from "./components/Vision";
import Agenda from "./components/Agenda";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fefbf9]">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            {/* Home Route: Displays Hero, Leadership Cards, and the Complaint Form directly on the homepage */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <CardsSection />
                  <ContactSection /> 
                </>
              } 
            />
            
            {/* Core Feature Pages */}
            <Route path="/vision" element={<Vision />} />
            <Route path="/agenda" element={<Agenda />} />
            
            {/* 🔹 Maps the Navbar's "/complaint" link directly to your complaint form page */}
            <Route path="/complaint" element={<ContactSection />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;