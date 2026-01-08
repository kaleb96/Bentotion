import { create } from 'zustand';

interface PortfolioState {
  isTeamModalOpen: boolean;
  selectedProject: any | null;
  toggleTeamModal: (open: boolean) => void;
  setProject: (project: any) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  isTeamModalOpen: false,
  selectedProject: null,
  toggleTeamModal: (open) => set({ isTeamModalOpen: open }),
  setProject: (project) => set({ selectedProject: project }),
}));
