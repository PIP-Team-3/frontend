import type { ReactNode } from 'react';
import { SidebarInset, SidebarProvider } from '../../components/ui/sidebar';
import { DashboardHeader } from './components/dashboard-header';
import { DashboardSidebar } from './components/dashboard-sidebar';
import { DashboardSidebarMobile } from './components/dashboard-sidebar-mobile';
import { DashboardMobileSidebarProvider } from './components/dashboard-mobile-sidebar-context';
import { BreadcrumbProvider } from './components/breadcrumb-context';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<BreadcrumbProvider>
			<DashboardMobileSidebarProvider>
				<SidebarProvider className="flex flex-col">
					<DashboardHeader />
					<DashboardSidebarMobile />
					<div className="flex flex-1">
						<DashboardSidebar />
						<SidebarInset>
							<div className="flex flex-1 flex-col items-center">{children}</div>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</DashboardMobileSidebarProvider>
		</BreadcrumbProvider>
	);
}
