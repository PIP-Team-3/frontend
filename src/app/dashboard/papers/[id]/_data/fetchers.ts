import { fetchAPI } from '../../../../../lib/api';
import { type PaperSchema, paperSchema } from '../../_data/schemas';

export async function getPaper(id: string): Promise<PaperSchema> {
	const papersRes = await fetchAPI(`/papers/${id}`);
	return paperSchema.parse(papersRes);
}
