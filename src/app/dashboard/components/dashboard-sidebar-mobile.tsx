'use client';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDashboardMobileSidebar } from './dashboard-mobile-sidebar-context';
import { DashboardSidebarContent } from './dashboard-sidebar-content';

export function DashboardSidebarMobile() {
	const isMobile = useIsMobile();
	const { open, setOpen } = useDashboardMobileSidebar();

	if (!isMobile) {
		return null;
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent
				side="bottom"
				className="h-fit w-full bg-sidebar p-0 pb-8 text-sidebar-foreground [&>button]:hidden"
			>
				<SheetHeader className="sr-only">
					<SheetTitle>Sidebar</SheetTitle>
					<SheetDescription>Displays the mobile sidebar.</SheetDescription>
				</SheetHeader>
				<div className="flex w-full flex-col">
					<DashboardSidebarContent />
				</div>
			</SheetContent>
		</Sheet>
	);
}
