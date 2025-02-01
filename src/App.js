import React from 'react';
import { AvatarCanvas } from './components/AvatarCanvas';
import './App.css';

// Optionally, you can define the dummy data outside the component:
const dummyBodyTypes = [{ _id: '1', name: 'Athletic', modelPath: '/models/body1.glb' }];
const dummyOutfits = [{ _id: '1', name: 'Casual Shirt', modelPath: '/models/outfit1.glb' }];

function App() {
  // Alternatively, define them here if you want them scoped to the component:
  // const dummyBodyTypes = [{ _id: '1', name: 'Athletic', modelPath: '/models/body1.glb' }];
  // const dummyOutfits = [{ _id: '1', name: 'Casual Shirt', modelPath: '/models/outfit1.glb' }];

  return (
    <div className="App">
      <h1>Test Avatar Canvas</h1>
      {/* Pass the modelPath values to AvatarCanvas as props */}
      <AvatarCanvas 
        bodyModel={dummyBodyTypes[0].modelPath} 
        outfitModel={dummyOutfits[0].modelPath} 
      />
    </div>
  );
}

export default App;
