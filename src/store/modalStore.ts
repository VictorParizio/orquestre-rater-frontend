import { create } from "zustand";

interface ModalState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  isUpdateUser: boolean;
  isDeleteUser: boolean;
  openLogin: () => void;
  openSignup: () => void;
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
  openLogin: () => set({ isLoginOpen: true, isSignupOpen: false }),
  openSignup: () => set({ isLoginOpen: false, isSignupOpen: true }),
  openUpdateUser: () => set({ isUpdateUser: true }),
  openDeleteUser: () => set({ isDeleteUser: true }),
  closeModalConfirm: () => set({ isDeleteUser: false }),
  closeModals: () =>
    set({
      isLoginOpen: false,
      isSignupOpen: false,
      isUpdateUser: false,
      isDeleteUser: false,
    }),
}));
