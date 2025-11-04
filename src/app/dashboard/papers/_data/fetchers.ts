import { z } from 'zod';
import { fetchAPI, uploadFileAPI } from '@/lib/api';
import { type PaperSchema, paperSchema } from './schemas';

export async function getAllPapers(): Promise<PaperSchema[]> {
	const papersRes = await fetchAPI('/papers');
	return z.array(paperSchema).parse(papersRes);
}

export async function getPaper(id: string): Promise<PaperSchema> {
	const paperRes = await fetchAPI(`/papers/${id}`);
	return paperSchema.parse(paperRes);
}

export async function uploadPaper(file?: File, url?: string): Promise<PaperSchema> {
	const formData = new FormData();

	if (file) {
		formData.append('file', file);
	}

	if (url) {
		formData.append('source_url', url);
	}

	const paperRes = await uploadFileAPI('/papers/', formData);
	return paperSchema.parse(paperRes);
}
