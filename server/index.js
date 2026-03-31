const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PRICING_LOGIC = {
  basePerLayer: 20,
  themes: { birthday: 10, wedding: 50, prank: 15, others: 5 },
  flavors: { vanilla: 0, chocolate: 5, "cookies n cream": 10 },
  childrenExtras: { none: 0, barbie: 20, transformer: 20, robot: 15 },
  colors: { white: 0, blue: 2, pink: 2, custom: 5 } // Darker dyes often cost more
};

app.post('/api/calculate', (req, res) => {
  const { theme, layers, flavor, childrenSection, color } = req.body;

  // Calculation Formula: (Base * Layers) + Theme + Flavor + Child Extra + Color
  const total = 
    (PRICING_LOGIC.basePerLayer * parseInt(layers)) +
    (PRICING_LOGIC.themes[theme] || 0) +
    (PRICING_LOGIC.flavors[flavor] || 0) +
    (PRICING_LOGIC.childrenExtras[childrenSection] || 0) +
    (PRICING_LOGIC.colors[color] || 0);

  res.json({ total: total.toFixed(2) });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
