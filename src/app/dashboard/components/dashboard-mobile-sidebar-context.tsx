'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface DashboardMobileSidebarContextType {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const DashboardMobileSidebarContext = createContext<DashboardMobileSidebarContextType | undefined>(undefined);

export function DashboardMobileSidebarProvider({ children }: { children: ReactNode }) {
	const [open, setOpen] = useState(false);

	return (
		<DashboardMobileSidebarContext.Provider value={{ open, setOpen }}>
			{children}
		</DashboardMobileSidebarContext.Provider>
	);
}

export function useDashboardMobileSidebar() {
	const context = useContext(DashboardMobileSidebarContext);
	if (!context) {
		throw new Error('useDashboardMobileSidebar must be used within DashboardMobileSidebarProvider');
	}
	return context;
}