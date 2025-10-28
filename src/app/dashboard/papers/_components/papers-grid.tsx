import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { PaperSchema } from '../_data/schemas';
import { getStatusIcon } from '../_data/tools';

export function PapersGrid({ papers }: { papers: PaperSchema[] }) {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
			{papers.map((paper) => (
				<PaperTile paper={paper} key={paper.id} />
			))}
		</div>
	);
}

function PaperTile({ paper }: { paper: PaperSchema }) {
	const statusIcon = getStatusIcon(paper.status);
	const IconComponent = statusIcon.icon;

	return (
		<Link href={`/dashboard/papers/${paper.id}`}>
			<Card className="cursor-pointer transition-colors hover:bg-gray-100">
				<CardHeader className="flex flex-row items-center justify-between gap-2">
					<CardTitle className="min-w-0 flex-1 truncate">
						{paper.title}
					</CardTitle>
					<IconComponent
						className={`h-5 w-5 shrink-0 ${statusIcon.colorClass}`}
					/>
				</CardHeader>
				<CardContent>
					<p>URL: {paper.sourceUrl || 'N/A'}</p>
					<p>Created At: {new Date(paper.createdAt).toLocaleDateString()}</p>
				</CardContent>
			</Card>
		</Link>
	);
}
