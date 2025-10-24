import { BreadcrumbSetter } from '../components/breadcrumb-context';
import { PapersGrid } from './components/papers-grid';
import { PapersHeader } from './components/papers-header';
import { getAllPapers } from './data/fetchers';

export default async function PapersPage() {
	const papers = await getAllPapers();

	return (
		<div className="w-full max-w-[1200px] p-8">
			<BreadcrumbSetter slug="" />

			<PapersHeader />

			<PapersGrid papers={papers} />
		</div>
	);
}
