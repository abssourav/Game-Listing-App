import {create} from 'zustand'

const initialState = {
    theme : 'dark'
}

const useStore = create((set)=>({
    ...initialState,
    darkTheme:() => set((state)=> ({
        theme : 'dark'
    })),
    lightTheme:() => set((state)=>({
        theme: 'light'
    }))
}))

export default useStore