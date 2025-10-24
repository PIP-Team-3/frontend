import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function PapersLoading() {
	return (
		<div className="pointer-events-none w-full max-w-[1200px] p-8">
			{/* Header Skeleton */}
			<div className="mb-8 flex items-center justify-between">
				<Skeleton className="h-8 w-32 rounded-md" />
				<Skeleton className="h-9 w-[119px] rounded-md" />
			</div>

			{/* Papers Grid Skeleton */}
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					<Card key={i} className="transition-colors">
						<CardHeader className="flex flex-row items-center justify-between gap-2">
							<div className="flex-1 space-y-2">
								<Skeleton className="h-6 w-3/4 rounded-md" />
								<Skeleton className="h-4 w-1/2 rounded-md" />
							</div>
							<Skeleton className="h-5 w-5 rounded-md" />
						</CardHeader>
						<CardContent className="space-y-3">
							<Skeleton className="h-4 w-full rounded-md" />
							<Skeleton className="h-4 w-4/5 rounded-md" />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}