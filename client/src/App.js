import React, { useState } from 'react';

function App() {
  // Add your state variables here (e.g., const [theme, setTheme] = useState('Birthday');)
  
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
            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none">
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
              defaultValue="2"
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none" 
            />
          </div>

          {/* 3. Color */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">3. Color</label>
            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none">
              <option>Pink</option>
              <option>White</option>
              <option>Blue</option>
            </select>
          </div>

          {/* 4. Character */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">4. Children's Character</label>
            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none">
              <option>Barbie</option>
              <option>None</option>
              <option>Transformer</option>
              <option>Robot</option>
            </select>
          </div>

          {/* 5. Base Flavor */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">5. Base Flavor</label>
            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none">
              <option>Chocolate</option>
              <option>Vanilla</option>
              <option>Cookies & Cream</option>
            </select>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Your Estimated Total</p>
          <h2 className="text-4xl font-bold text-pink-500 mt-1">$ 0</h2>
        </div>

      </div>
    </div>
  );
}

export default App;
