import React, { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [selections, setSelections] = useState({
    theme: 'birthday',
    color: 'white',
    childrenSection: 'none',
    layers: 1,
    flavor: 'vanilla'
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getPrice = async () => {
      const response = await fetch(`${API_URL}/api/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selections),
      });
      const data = await response.json();
      setPrice(data.total);
    };
    getPrice();
  }, [selections]);

  const update = (e) => setSelections({...selections, [e.target.name]: e.target.value});

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl max-w-lg w-full overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">🍰 Cake Price Estimator</h1>
          <p className="text-sm opacity-80">Customized just for you</p>
        </div>

        <div className="p-8 space-y-5">
          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">1. Select Theme</label>
              <select name="theme" onChange={update} className="w-full mt-1 p-3 bg-slate-100 rounded-lg border-none focus:ring-2 focus:ring-purple-400">
                <option value="birthday">Birthday</option>
                <option value="wedding">Wedding</option>
                <option value="prank">Prank</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-500 uppercase">2. Layers</label>
                <input type="number" name="layers" min="1" value={selections.layers} onChange={update} className="w-full mt-1 p-3 bg-slate-100 rounded-lg border-none" />
              </div>
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-500 uppercase">3. Color</label>
                <select name="color" onChange={update} className="w-full mt-1 p-3 bg-slate-100 rounded-lg border-none">
                  <option value="white">White</option>
                  <option value="pink">Pink</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">4. Children's Character</label>
              <select name="childrenSection" onChange={update} className="w-full mt-1 p-3 bg-slate-100 rounded-lg border-none">
                <option value="none">None</option>
                <option value="barbie">Barbie</option>
                <option value="transformer">Transformer</option>
                <option value="robot">Robot</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">5. Base Flavor</label>
              <select name="flavor" onChange={update} className="w-full mt-1 p-3 bg-slate-100 rounded-lg border-none">
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="cookies n cream">Cookies & Cream</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm font-medium">Your Estimated Total</p>
            <h2 className="text-5xl font-black text-slate-800 tracking-tight">${price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
