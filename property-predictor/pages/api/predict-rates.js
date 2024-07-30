// pages/api/predict-rates.js

// Mock data for property rates (replace this with actual data or API call)
const propertyRates = {
  "vijay nagar": { current: 6000, yearOne: 6300, yearTwo: 6615 },
  "bhanwarkuan": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "scheme no. 78": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "rajendra nagar": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "south tukoganj": { current: 5800, yearOne: 6090, yearTwo: 6394.5 },
  "khajrana": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "sukhlia": { current: 5700, yearOne: 5985, yearTwo: 6284.25 },
  "manik bagh": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "pipliyahana": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "a.b. road": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "nehru park": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "chhoti gwaltoli": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "rau": { current: 4800, yearOne: 5040, yearTwo: 5281.5 },
  "bicholi mardana": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "nanda nagar": { current: 5100, yearOne: 5355, yearTwo: 5632.75 },
  "vijay nagar extension": { current: 6000, yearOne: 6300, yearTwo: 6615 },
  "kesar bagh": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "ranjeet hanuman": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "banganga": { current: 5100, yearOne: 5355, yearTwo: 5632.75 },
  "sangam nagar": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "gomti nagar": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "dewas naka": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "usha nagar": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "sudama nagar": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "agarwal colony": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "harsiddhi": { current: 5100, yearOne: 5355, yearTwo: 5632.75 },
  "saket nagar": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "dhar road": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "shivaji nagar": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "nehru nagar": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "khandwa road": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "janjeerwala": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "dewas road": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "kanadia road": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "lig colony": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "eden garden": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "rau pithampur road": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "pipliyapala": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "vijay nagar sector 2": { current: 6000, yearOne: 6300, yearTwo: 6615 },
  "navlakha": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "sardar patel": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "raghuwanshi nagar": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "mangal city": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "rajmohalla": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "royal city": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "amraiwadi": { current: 5100, yearOne: 5355, yearTwo: 5632.75 },
  "sukhliya extension": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "prabhat colony": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "kanchan bagh": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "gandhi nagar": { current: 4800, yearOne: 5040, yearTwo: 5281.5 },
  "shivaji udyog nagar": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "mangalwara": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "baroda": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "ravi nagar": { current: 5100, yearOne: 5355, yearTwo: 5632.75 },
  "shiv nagar": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "kothari": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "sadar bazar": { current: 4800, yearOne: 5040, yearTwo: 5281.5 },
  "new palasia": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "palia": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "shikhar bagh": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "bajrang nagar": { current: 5200, yearOne: 5460, yearTwo: 5733 },
  "subhash nagar": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "chandragupt nagar": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "vijay nagar sector 3": { current: 6000, yearOne: 6300, yearTwo: 6615 },
  "rohit nagar": { current: 4700, yearOne: 4935, yearTwo: 5181.75 },
  "kalani nagar": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "chitrakoot": { current: 5100, yearOne: 5355, yearTwo: 5632.75 },
  "kalkheda": { current: 5300, yearOne: 5565, yearTwo: 5843.25 },
  "amaravati": { current: 5500, yearOne: 5775, yearTwo: 6066.25 },
  "satpura": { current: 4800, yearOne: 5040, yearTwo: 5281.5 },
  "maheshwari": { current: 4900, yearOne: 5145, yearTwo: 5402.25 },
  "kailash colony": { current: 5000, yearOne: 5250, yearTwo: 5512.5 },
  "pologround": { current: 5200, yearOne: 5460, yearTwo: 5733 },
};

  
  // Mock prediction function (replace with actual prediction logic)
  function predictRates(area, currentRate) {
    const yearOneRate = currentRate * 1.05; // 5% increase
    const yearTwoRate = yearOneRate * 1.05; // Another 5% increase
    return { yearOne: yearOneRate, yearTwo: yearTwoRate };
  }
  
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const { area } = req.body;
  
      if (!area) {
        return res.status(400).json({ error: 'Area is required' });
      }
  
      const lowercaseArea = area.toLowerCase();
      const areaData = propertyRates[lowercaseArea];
  
      if (!areaData) {
        return res.status(404).json({ error: 'Area not found' });
      }
  
      const predictions = predictRates(lowercaseArea, areaData.current);
  
      res.status(200).json({
        area: area,
        currentRate: areaData.current,
        predictions: predictions
      });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }