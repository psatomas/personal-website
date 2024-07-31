import React, { useState, useEffect } from "react";
import "./Navbar.css";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});

  const sections = ["home", "about", "portfolio", "contact"]; // Ensure correct section IDs

  const updateSlider = (index) => {
    const items = document.querySelectorAll(".nav-item");
    const activeItem = items[index];
    setSliderStyle({
      width: `${activeItem.offsetWidth}px`,
      left: `${activeItem.offsetLeft}px`,
      marginLeft: `${parseInt(
        window.getComputedStyle(activeItem).marginLeft
      )}px`,
    });
  };

  const changeTab = (index) => {
    setActiveIndex(index);
    updateSlider(index);
    scrollToSection(sections[index]);
  };

  useEffect(() => {
    updateSlider(activeIndex);
    const handleResize = () => {
      updateSlider(activeIndex);
    };
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
      const newActiveIndex = sections.findIndex(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return false;
        const { top, bottom } = section.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;
        return sectionTop <= scrollPosition && sectionBottom >= scrollPosition;
      });

      if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
        updateSlider(newActiveIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  return (
    <nav>
      
      <div className="navbar">
        <ul>
          <li className="nav-item">
            <button onClick={() => changeTab(0)}>Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => changeTab(1)}>About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => changeTab(2)}>portfolio</button>
          </li>
          <li className="nav-item">
            <button onClick={() => changeTab(3)}>Contact</button>
          </li>
        </ul>
        {activeIndex !== null && (
          <div className="slider" style={sliderStyle}></div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
