import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AvatarCanvas } from './components/AvatarCanvas';
import './App.css';

function App() {
  const [bodyTypes, setBodyTypes] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const [selectedOutfit, setSelectedOutfit] = useState('');

  useEffect(() => {
    // Fetch body types and outfits from backend
    axios.get('http://localhost:5000/api/avatar/body-types')
      .then(res => setBodyTypes(res.data))
      .catch(err => console.error(err));

    axios.get('http://localhost:5000/api/avatar/outfits')
      .then(res => setOutfits(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleFeedback = (isGoodFit) => {
    axios.post('http://localhost:5000/api/feedback', {
      bodyTypeId: selectedBodyType,
      outfitId: selectedOutfit,
      isGoodFit
    });
  };

  return (
    <div className="App">
      <h1>Fashion Muse Avatar</h1>
      
      <div className="controls">
        <label>Body Type:</label>
        <select onChange={(e) => setSelectedBodyType(e.target.value)}>
          <option value="">Select Body Type</option>
          {bodyTypes.map(body => (
            <option key={body._id} value={body.modelPath}>
              {body.name}
            </option>
          ))}
        </select>

        <label>Outfit:</label>
        <select onChange={(e) => setSelectedOutfit(e.target.value)}>
          <option value="">Select Outfit</option>
          {outfits.map(outfit => (
            <option key={outfit._id} value={outfit.modelPath}>
              {outfit.name}
            </option>
          ))}
        </select>
      </div>

      {selectedBodyType && (
        <AvatarCanvas
          bodyModel={selectedBodyType}
          outfitModel={selectedOutfit}
        />
      )}

      <div className="feedback-buttons">
        <button onClick={() => handleFeedback(true)}>Fit Good</button>
        <button onClick={() => handleFeedback(false)}>Fit Poor</button>
      </div>
    </div>
  );
}

export default App;