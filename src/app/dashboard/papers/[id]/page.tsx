import { BreadcrumbSetter } from '../../_components/breadcrumb-context';
import { getStatusIcon } from '../_data/tools';
import { getPaper } from './_data/fetchers';

export default async function PaperPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const paper = await getPaper(id);
	const statusIcon = getStatusIcon(paper.status);
	const IconComponent = statusIcon.icon;

	return (
		<>
			<BreadcrumbSetter slug={paper.title} />

			<div className="w-full max-w-[1200px] p-8">
				<div className="mb-8 flex items-center justify-between gap-4">
					<h1 className="text-2xl">{paper.title}</h1>
					<IconComponent className={`h-12 w-12 ${statusIcon.colorClass}`} />
				</div>
			</div>
		</>
	);
}
