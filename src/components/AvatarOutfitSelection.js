// src/components/AvatarOutfitSelection.js
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./AvatarOutfitSelection.css";

function AvatarOutfitSelection({ scrollToHome }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const outfitSectionRef = useRef(null);
  const finalSectionRef = useRef(null);

  const avatars = [
    { id: "1", name: "Athletic", imagePath: process.env.PUBLIC_URL + "/images/avatar1.png" },
    { id: "2", name: "Casual", imagePath: process.env.PUBLIC_URL + "/images/avatar2.png" },
    { id: "3", name: "Slim", imagePath: process.env.PUBLIC_URL + "/images/avatar3.png" },
  ];
  const outfits = [
    { id: "1", name: "Casual Shirt", imagePath: process.env.PUBLIC_URL + "/images/outfit1.png" },
    { id: "2", name: "T-shirt", imagePath: process.env.PUBLIC_URL + "/images/outfit2.png" },
    { id: "3", name: "Jacket", imagePath: process.env.PUBLIC_URL + "/images/outfit3.png" },
  ];

  const handleAvatarSelection = (avatar) => {
    setSelectedAvatar(avatar);
    setSelectedOutfit(null);
    setTimeout(() => {
      outfitSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleOutfitSelection = (outfit) => {
    setSelectedOutfit(outfit);
    setTimeout(() => {
      finalSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="avatar-outfit-selection">
      <h2>Select Your Avatar and Outfit</h2>

      {!selectedAvatar && (
        <div className="avatar-selection">
          {avatars.map((avatar) => (
            <button
              key={avatar.id}
              onClick={() => handleAvatarSelection(avatar)}
              className="selection-button"
            >
              <img src={avatar.imagePath} alt={avatar.name} className="selection-image" />
              <span>{avatar.name}</span>
            </button>
          ))}
        </div>
      )}

      {selectedAvatar && !selectedOutfit && (
        <div className="outfit-selection" ref={outfitSectionRef}>
          {outfits.map((outfit) => (
            <button
              key={outfit.id}
              onClick={() => handleOutfitSelection(outfit)}
              className="selection-button"
            >
              <img src={outfit.imagePath} alt={outfit.name} className="selection-image" />
              <span>{outfit.name}</span>
            </button>
          ))}
        </div>
      )}

      {selectedAvatar && selectedOutfit && (
        <div className="final-selection" ref={finalSectionRef}>
          <h3>Your Avatar Wearing the Selected Outfit</h3>
          <div className="final-display">
            <img src={selectedAvatar.imagePath} alt="Avatar" className="base-avatar" />
            <img src={selectedOutfit.imagePath} alt="Outfit" className="overlay-outfit" />
          </div>
          <button className="exit-avatar" onClick={scrollToHome}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
}

AvatarOutfitSelection.propTypes = {
  scrollToHome: PropTypes.func.isRequired,
};

export default AvatarOutfitSelection;
