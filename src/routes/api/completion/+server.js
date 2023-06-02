import { json, error } from '@sveltejs/kit';
import ai from '$lib/services/openai.js';

export async function POST({ request, cookies }) {
	const { prompt } = await request.json();

	if (!prompt) throw error(400, 'must have a prompt');

	try {
		const answer = await ai.ask(prompt);

		const content = answer.data.choices[0].message.content;

		const response = {
			content,
			usage: answer.data.usage,
			requested_at: answer.data.created
		};

		return json(response);
	} catch (error) {
		console.log(error);
	}
}
