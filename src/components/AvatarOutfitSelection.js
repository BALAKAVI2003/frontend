import React, { useState } from 'react';
import './AvatarOutfitSelection.css'; // Custom styles for this component

// Placeholder paths for avatar and outfit models
const avatars = {
  avatar1: '/models/male_model_design.gltf',
  avatar2: '/models/male_model_design2.gltf',
  avatar3: '/models/male_model_design3.gltf'
};

const outfits = {
  outfit1: '/models/outfit1.gltf',
  outfit2: '/models/outfit2.gltf',
  outfit3: '/models/outfit3.gltf'
};

function AvatarOutfitSelection() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [showOutfitSelection, setShowOutfitSelection] = useState(false);

  // Show avatar selection
  const showAvatarSetup = () => {
    return (
      <div id="avatar-setup">
        <h2>Select Your Avatar</h2>
        <button className="avatar" onClick={() => handleSelectAvatar('avatar (1)')}>Avatar 1</button>
        <button className="avatar" onClick={() => handleSelectAvatar('avatar (2)')}>Avatar 2</button>
        <button className="avatar" onClick={() => handleSelectAvatar('avatar (3)')}>Avatar 3</button>
      </div>
    );
  };

  // Handle avatar selection
  const handleSelectAvatar = (avatarId) => {
    setSelectedAvatar(avatars[avatarId]);
    setShowOutfitSelection(true);
  };

  // Show outfit selection
  const showOutfitSetup = () => {
    return (
      <div id="outfit-setup">
        <h2>Select Your Outfit</h2>
        <button className="outfit" onClick={() => handleSelectOutfit('outfit1')}>Outfit 1</button>
        <button className="outfit" onClick={() => handleSelectOutfit('outfit2')}>Outfit 2</button>
        <button className="outfit" onClick={() => handleSelectOutfit('outfit3')}>Outfit 3</button>
      </div>
    );
  };

  // Handle outfit selection
  const handleSelectOutfit = (outfitId) => {
    setSelectedOutfit(outfits[outfitId]);
    displayFinalAvatarWithOutfit();
  };

  // Display the final avatar wearing the selected outfit
  const displayFinalAvatarWithOutfit = () => {
    return (
      <div id="final-setup">
        <h2>Your Selected Avatar Wearing Outfit</h2>
        <div id="avatar-display">
          <h3>Avatar Model: {selectedAvatar}</h3>
          <h3>Outfit Model: {selectedOutfit}</h3>
          {/* Here you can render the 3D model if needed */}
        </div>
      </div>
    );
  };

  return (
    <div>
      {showOutfitSelection ? showOutfitSetup() : showAvatarSetup()}
      {selectedAvatar && selectedOutfit && displayFinalAvatarWithOutfit()}
    </div>
  );
}

export default AvatarOutfitSelection;
