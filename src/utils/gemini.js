export const generatePrediction = async (userData) => {
  const API_KEY = import.meta.env.VITE_GEMINI_KEY;

  try {
    // Ye line check karegi ki aapki key ko kaun-kaun se models allow hain
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
    const listRes = await fetch(listUrl);
    const listData = await listRes.json();
    
    console.log("Available Models for your Key:", listData);

    // Agar models mil gaye, toh pehla available model uthao
    if (listData.models && listData.models.length > 0) {
      // Hum wahi model use karenge jo list mein sabse upar hai (usually flash)
      const activeModel = listData.models.find(m => m.name.includes("flash")) || listData.models[0];
      
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/${activeModel.name}:generateContent?key=${API_KEY}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Give a short 50-word astrology reading for ${userData.name}` }] }]
        }),
      });

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } else {
      return "Error: No models assigned to this API Key. Please create a new key in AI Studio.";
    }
  } catch (err) {
    return "Celestial Connection Failed.";
  }
};