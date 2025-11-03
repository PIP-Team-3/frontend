import { BreadcrumbSetter } from '../../_components/breadcrumb-context';
import { getStatusIcon } from '../_data/tools';
import { getPaper } from './_data/fetchers';

export default async function PaperPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

    try {
        const paper = await getPaper(id);
        const statusIcon = getStatusIcon(paper.status);
        const IconComponent = statusIcon.icon;

        // Helper function to format the timestamp for readability
        const formatDate = (dateString: string) => {
            // Handle cases where the timestamp might be null or malformed
            if (!dateString) return 'N/A'; 
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short',
            });
        };

        return (
            <>
                <BreadcrumbSetter slug={paper.title} />

                <div className="w-full max-w-[1200px] p-8">
                    
                    {/* Header: Title and Status Icon */}
                    <div className="mb-8 flex items-center justify-between gap-4 border-b pb-4">
                        <h1 className="text-3xl font-extrabold text-gray-900">{paper.title}</h1>
                        <div className="flex items-center gap-2">
                            <span className={`text-lg font-semibold capitalize ${statusIcon.colorClass}`}>
                                {paper.status.replace('_', ' ')}
                            </span>
                            <IconComponent className={`h-8 w-8 ${statusIcon.colorClass}`} />
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                        
                        {/* Status */}
                        <DetailItem title="Processing Status">
                            <span className={`font-medium capitalize ${statusIcon.colorClass}`}>
                                {paper.status}
                            </span>
                        </DetailItem>
                        
                        {/* Date Added */}
                        <DetailItem title="Date Added">
                            <time dateTime={paper.createdAt} className="text-gray-700">
                                {formatDate(paper.createdAt)}
                            </time>
                        </DetailItem>
                        
                        {/* Paper ID (For debugging/reference) */}
                        <DetailItem title="Paper ID">
                            <code className="bg-gray-100 p-1 rounded text-sm text-gray-600 break-all">
                                {paper.id}
                            </code>
                        </DetailItem>

                        {/* Source URL (Conditional Rendering) */}
                        {paper.sourceUrl && (
                            <div className="md:col-span-2 lg:col-span-3">
                                <DetailItem title="Source URL">
                                    <a 
                                        href={paper.sourceUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-600 hover:text-blue-800 break-all underline transition duration-150"
                                    >
                                        {paper.sourceUrl}
                                    </a>
                                </DetailItem>
                            </div>
                        )}

                    </div>
                </div>
            </>
        );
    } catch (error) {
        // 🌟 404 error
        if (error instanceof Error && error.message.includes('404 Not Found')) {
            return (
                <>
                    <BreadcrumbSetter slug="Not Found" />
                    <div className="w-full max-w-[1200px] p-10 text-center">
                        <h1 className="text-4xl font-extrabold text-red-600 mb-4">404 - Document Not Found</h1>
                        <p className="text-xl text-gray-700 mb-6">
                            Cannot find paper with given ID (<code className="bg-gray-100 p-1 rounded">{id}</code>).
                        </p>
                        <p className="text-gray-500">
                            Check the url or return to the dashboard to view your documents.
                        </p>
                    </div>
                </>
            );
        }

        // Other errors
        return (
            <>
                <BreadcrumbSetter slug="Error" />
                <div className="w-full max-w-[1200px] p-10 text-center">
                    <h1 className="text-4xl font-extrabold text-red-600 mb-4">API Error</h1>
                    <p className="text-xl text-gray-700 mb-6">
                        An error occurred while fetching the paper details.
                    </p>
                    <code className="bg-gray-100 p-4 rounded text-left inline-block text-sm text-gray-700 whitespace-pre-wrap">
                        {error instanceof Error ? error.message : "Unknown error occurred"}
                    </code>
                </div>
            </>
        );
    }
}

// Simple reusable component for cleaner JSX
const DetailItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">{title}</h3>
        <p className="text-lg font-medium text-gray-900">{children}</p>
    </div>
);