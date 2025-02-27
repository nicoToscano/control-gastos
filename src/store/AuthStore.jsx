import { create } from 'zustand'
import { supabase } from '../supabase/supabase.config'

export const useAuthStore = create((set) => ({
    isAuth: false,
    datauserGoogle: [],
    
    singWithGoogle: async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
            if (error) throw new Error('Error signing in');
            set({ isAuth: true });
            return data;
        } catch (error) {
            console.error(error);
        }
    },

    signout: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw new Error('Error signing out');
            set({ isAuth: false });
        } catch (error) {
            console.error(error);
        }
    }
}));
