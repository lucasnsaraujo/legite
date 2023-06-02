import dotenv from 'dotenv';
dotenv.config();

// Serviço de conexão com API do OpenAI

import { Configuration, OpenAIApi } from 'openai';

const gptPersona = `Você é um assistente jurídico encarregado de gerar petições completas com base nas informações fornecidas. O usuário irá descrever o caso e fornecer detalhes relevantes. O assistente deve gerar uma petição bem estruturada e abrangente com base nas informações fornecidas.`;
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

const ai = new OpenAIApi(configuration);

const petition = async (prompt = '', options = { model: 'gpt-3.5-turbo' }) => {
	if (!prompt) return;

	const response = await ai.createChatCompletion({
		messages: [
			{
				role: 'system',
				content: gptPersona
			},
			{
				role: 'user',
				content: prompt
			}
		],
		model: options.model
	});
	return response;
};

export default { petition };
