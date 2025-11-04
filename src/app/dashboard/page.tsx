import { Brain, CheckCircle, Clock, FileText, Upload } from 'lucide-react';

export default function DashboardOverview() {
	return (
		<div className="min-h-screen space-y-10 bg-white p-8">
			{/* Title */}
			<h1 className="font-semibold text-3xl text-black">Dashboard Overview</h1>

			{/* --- Overview Cards --- */}
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{/* Papers Processed */}
				<div className="flex items-center justify-between rounded-2xl border border-[#4E6BC2]/30 bg-white p-6 shadow-sm transition hover:shadow-md">
					<div>
						<h2 className="font-medium text-black/70 text-sm uppercase tracking-wide">
							Papers Processed
						</h2>
						<p className="mt-1 font-bold text-4xl text-[#4E6BC2]">8</p>
					</div>
					<FileText className="h-10 w-10 text-[#4E6BC2]/70" />
				</div>

				{/* Last Upload */}
				<div className="flex items-center justify-between rounded-2xl border border-[#4E6BC2]/30 bg-white p-6 shadow-sm transition hover:shadow-md">
					<div>
						<h2 className="font-medium text-black/70 text-sm uppercase tracking-wide">
							Last Upload
						</h2>
						<p className="mt-1 font-semibold text-2xl text-[#4E6BC2]">
							Nov 3, 2025
						</p>
					</div>
					<Clock className="h-10 w-10 text-[#4E6BC2]/70" />
				</div>
			</div>

			{/* --- Recent Activity --- */}
			<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
				<h2 className="mb-4 font-semibold text-black text-xl">
					Recent Activity
				</h2>

				<table className="w-full text-gray-700 text-sm">
					<thead>
						<tr className="border-gray-200 border-b text-left">
							<th className="pb-2">Date</th>
							<th className="pb-2">Action</th>
							<th className="pb-2 text-center">Status</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-gray-100 border-b transition hover:bg-[#4E6BC2]/5">
							<td className="py-2">Nov 3</td>
							<td>
								Uploaded{' '}
								<span className="font-medium text-[#4E6BC2]">
									huang_2017_densenet.pdf
								</span>
							</td>
							<td className="flex items-center justify-center gap-1 py-2 text-green-600">
								<CheckCircle size={16} /> Completed
							</td>
						</tr>
						<tr className="border-gray-100 border-b transition hover:bg-[#4E6BC2]/5">
							<td className="py-2">Nov 2</td>
							<td>Applied Storybook module</td>
							<td className="flex items-center justify-center gap-1 py-2 text-[#4E6BC2]">
								<Brain size={16} /> Processed
							</td>
						</tr>
						<tr className="border-gray-100 border-b transition hover:bg-[#4E6BC2]/5">
							<td className="py-2">Nov 1</td>
							<td>Added Comparison analysis</td>
							<td className="flex items-center justify-center gap-1 py-2 text-yellow-600">
								<Clock size={16} /> Running
							</td>
						</tr>
						<tr className="transition hover:bg-[#4E6BC2]/5">
							<td className="py-2">Oct 30</td>
							<td>
								Uploaded{' '}
								<span className="font-medium text-[#4E6BC2]">
									miller_2018_hot_hand.pdf
								</span>
							</td>
							<td className="flex items-center justify-center gap-1 py-2 text-green-600">
								<CheckCircle size={16} /> Completed
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* --- How to Use --- */}
			<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
				<h2 className="mb-4 font-semibold text-black text-xl">
					How to Use Paper2Notebook
				</h2>

				<div className="grid gap-4 md:grid-cols-2">
					{[
						{
							icon: <Upload className="h-6 w-6 text-[#4E6BC2]" />,
							title: 'Upload',
							text: 'Add your research paper (PDF, text, or markdown).',
						},
						{
							icon: <Brain className="h-6 w-6 text-[#4E6BC2]" />,
							title: 'AI Extraction',
							text: 'Automatically identify claims, methods, and results.',
						},
						{
							icon: <FileText className="h-6 w-6 text-[#4E6BC2]" />,
							title: 'Generate Notebook',
							text: 'Create structured Jupyter-ready notebooks.',
						},
						{
							icon: <CheckCircle className="h-6 w-6 text-[#4E6BC2]" />,
							title: 'Apply Modules',
							text: 'Add analysis modules like Storybook or Summary.',
						},
					].map((item, idx) => (
						<div
							key={idx}
							className="rounded-xl border border-[#4E6BC2]/10 bg-[#4E6BC2]/5 p-4 transition hover:border-[#4E6BC2]/30"
						>
							<div className="mb-2 flex items-center gap-3">
								{item.icon}
								<h3 className="font-semibold text-black">{item.title}</h3>
							</div>
							<p className="text-gray-600 text-sm">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
