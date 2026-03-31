import React, { useState } from 'react';

function App() {
  // 1. Set up state variables to track user selections
  const [theme, setTheme] = useState('Birthday');
  const [layers, setLayers] = useState(2);
  const [color, setColor] = useState('Pink');
  const [character, setCharacter] = useState('None');
  const [flavor, setFlavor] = useState('Chocolate');

  // 2. Calculate the total price based on selections
  const calculateTotal = () => {
    let total = 20; // Base starting price

    // Add $10 for every layer
    total += Number(layers) * 10;

    // Wedding cakes cost a bit more
    if (theme === 'Wedding') total += 30;

    // Add $5 if they choose a character
    if (character !== 'None') total += 5;

    return total;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border-t-8 border-pink-400">
        
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
          🍰 Cake Price Estimator
        </h1>
        <p className="text-gray-500 text-center mb-8">Customized just for you</p>

        <div className="space-y-4">
          {/* 1. Theme */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">1. Select Theme</label>
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Prank</option>
              <option>Others</option>
            </select>
          </div>

          {/* 2. Layers */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">2. Layers</label>
            <input 
              type="number" 
              min="1"
              value={layers}
              onChange={(e) => setLayers(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none" 
            />
          </div>

          {/* 3. Color */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">3. Color</label>
            <select 
              value={color} 
              onChange={(e) => setColor(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option>Pink</option>
              <option>White</option>
              <option>Blue</option>
            </select>
          </div>

          {/* 4. Character */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">4. Children's Character</label>
            <select 
              value={character} 
              onChange={(e) => setCharacter(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option>None</option>
              <option>Barbie</option>
              <option>Transformer</option>
              <option>Robot</option>
            </select>
          </div>

          {/* 5. Base Flavor */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">5. Base Flavor</label>
            <select 
              value={flavor} 
              onChange={(e) => setFlavor(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option>Chocolate</option>
              <option>Vanilla</option>
              <option>Cookies & Cream</option>
            </select>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Your Estimated Total</p>
          {/* Display the calculated total here */}
          <h2 className="text-4xl font-bold text-pink-500 mt-1">$ {calculateTotal()}</h2>
        </div>

      </div>
    </div>
  );
}

export default App;
