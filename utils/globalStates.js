import { create } from 'zustand';

export const useIsDarkStore = create((set) => ({
	isDark: true,
	darkenTheme: () => set({ isDark: true }),
	lightenTheme: () => set({ isDark: false }),
}));
