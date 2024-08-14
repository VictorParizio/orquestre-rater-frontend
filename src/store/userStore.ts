import { create } from "zustand";

export interface UserData {
  id: string;
  fullName: string;
  userName: string;
  email: string;
}

interface UserState {
  token: string | null;
  userData: UserData | null;
  setToken: (token: string) => void;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  token: null,
  userData: null,

  setToken: (token: string) => set({ token }),

  setUserData: (data) =>
    set({
      userData: {
        id: data.id,
        fullName: data.fullName,
        userName: data.userName,
        email: data.email,
      },
    }),

  clearUserData: () =>
    set({
      token: null,
      userData: null,
    }),
}));
