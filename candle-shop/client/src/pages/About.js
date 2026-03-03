import React from 'react';
import '../styles/About.css';
import logo from '../assets/logo.png';
import { FaLeaf, FaHandSparkles, FaMapMarkerAlt, FaGem } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p className="subtitle">Handcrafting moments of calm and beauty</p>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Where It All Began</h2>
            <p>
              <strong>Niara Nest</strong> is a homegrown brand founded by Monisha Samanta,
              specializing in handcrafted, eco-friendly scented candles designed to bring
              warmth, serenity, and aesthetic charm into everyday living.
            </p>

            <p>
              Founded with a passion for mindful living and sensory experiences,
              Our mission is simple — to create candles that don’t just light up a room,
              but elevate mood, evoke emotion, and create cozy, memorable spaces.
            </p>

            <p>
              Whether you're gifting, decorating, or indulging in self-care,
              Niara Nest offers a soothing escape — from melt to magic.
            </p>
          </div>
         <div className="about-image">
              <img src={logo} alt="Niara Nest Logo" className="about-logo" />
         </div>
        </div>
      </section>

      <section className="values">
  <h2>Our Values</h2>
  <div className="values-grid">

    <div className="value-card">
      <FaLeaf className="value-icon" />
      <h3>Sustainable</h3>
      <p>Eco-friendly materials and ethical sourcing in everything we do</p>
    </div>

    <div className="value-card">
      <FaHandSparkles className="value-icon" />
      <h3>Handcrafted</h3>
      <p>Every candle is poured by hand with love and attention to detail</p>
    </div>

    <div className="value-card">
      <FaMapMarkerAlt className="value-icon" />
      <h3>Made in India</h3>
      <p>Proudly supporting local artisans and communities</p>
    </div>

    <div className="value-card">
      <FaGem className="value-icon" />
      <h3>Premium Quality</h3>
      <p>Only the finest ingredients for the best burn and scent throw</p>
    </div>

  </div>
</section>
    </div>
  );
};

export default About;
