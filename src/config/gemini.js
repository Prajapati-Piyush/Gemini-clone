const apikey="AIzaSyBN8WArH18IdZAzPnCyJ_s9XZJs-PvR_5c";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
//   const apiKey = process.env.GEMINI_API_KEY;
  const apiKey = "AIzaSyBN8WArH18IdZAzPnCyJ_s9XZJs-PvR_5c";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response=result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default run;