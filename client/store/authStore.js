import { create } from "zustand";




const useAuthStore = create((set)=>({
    user: null,
    setUser: (userData) => set({user:userData}),
    loading: true,
    setLoading:(state)=> set({loading : state}),
    isLoggedIn:false,
    setIsLoggedIn: (status)=> set({isLoggedIn: status}),
    logout: ()=> {
        localStorage.removeItem('token');
        set({isLoggedIn:false});
        window.location.href = '/login'
    }
}))

export default useAuthStore