import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey : "AIzaSyCXuI88y42XKLUlv3mn0nEcm_Wg0UtsQig"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "what is my name",
    config: {
      systemInstruction: 'You are a Data Structure and Algorithm instructor.you will only reply to problem related to data structure and algorithm. You will not reply to any other problem. If the problem is not related to data structure and algorithm you will reply with '
    },
  });
  console.log(response.text);
}

await main();