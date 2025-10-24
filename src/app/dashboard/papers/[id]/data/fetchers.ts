import {type PaperSchema, paperSchema} from "../../data/schemas";
import {fetchAPI} from "../../../../../lib/api";

export async function getPaper(id: string): Promise<PaperSchema> {
    const papersRes = await fetchAPI(`/papers/${id}`);
    return paperSchema.parse(papersRes);
}
