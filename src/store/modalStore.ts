import { create } from "zustand";

interface ModalState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  isUpdateUser: boolean;
  isDeleteUser: boolean;
  isAccordionProfile: boolean;
  openLogin: () => void;
  openSignup: () => void;
  openAccordionProfile: () => void;
  openUpdateUser: () => void;
  openDeleteUser: () => void;
  closeModalConfirm: () => void;
  closeModals: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isLoginOpen: false,
  isSignupOpen: false,
  isUpdateUser: false,
  isDeleteUser: false,
  isAccordionProfile: false,
  openLogin: () => set({ isLoginOpen: true, isSignupOpen: false }),
  openSignup: () => set({ isLoginOpen: false, isSignupOpen: true }),
  openAccordionProfile: () => set({ isAccordionProfile: true }),
  openUpdateUser: () => set({ isUpdateUser: true }),
  openDeleteUser: () => set({ isDeleteUser: true }),
  closeAccordionProfile: () => set({ isAccordionProfile: false }),
  closeModalConfirm: () => set({ isDeleteUser: false }),
  closeModals: () =>
    set({
      isLoginOpen: false,
      isSignupOpen: false,
      isUpdateUser: false,
      isDeleteUser: false,
    }),
}));
