import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  generatePrompt(req.body)
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body),
    temperature: 0.6,
    max_tokens: 1000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt({diplome, poste}) {
  return `Ecris une lettre de motivation pour un poste de ${poste}, avec un diplome de ${diplome}`;
}
