import axios from "axios";

export async function generateAnswer(currentQuestion, recommendedCrop, nitrogen, phosphorus) {

    const fullPrompt = `You are an AI-powered agricultural assistant for farmers. Your primary function is to provide crop recommendations and agricultural advice. When given data about soil composition, analyze it and recommend suitable crops. Maintain a helpful, informative, and professional tone. Answer any general agricultural questions the user may have, but prioritize the data-driven recommendations.
Here is the soil data:
- Nitrogen: ${nitrogen}
- Phosphorus: ${phosphorus}
The recommended crop is: ${recommendedCrop}.
Now, please answer the user's question:
${currentQuestion}`;

    const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
        method: "post",
        data: {
            contents: [{
                role: "user",
                parts: [{ text: fullPrompt }]
            }],
        },
    });

    const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];

    return aiResponse;
}