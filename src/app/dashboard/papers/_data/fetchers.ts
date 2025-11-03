import { z } from 'zod';
import { fetchAPI } from '@/lib/api';
import { type PaperSchema, paperSchema } from './schemas';

export async function getAllPapers(): Promise<PaperSchema[]> {
	const papersRes = await fetchAPI('/papers');
	return z.array(paperSchema).parse(papersRes);
}

export async function getPaper(id: string): Promise<PaperSchema> {
	const paperRes = await fetchAPI(`/papers/${id}`);
	return paperSchema.parse(paperRes);
}
