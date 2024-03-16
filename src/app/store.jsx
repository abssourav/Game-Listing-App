import {create} from 'zustand'

import { allGamesList } from '../services/GlobalApi'

const initialState = {
    theme : 'dark',
    allGameList:[]
}

const useStore = create((set)=>({
    ...initialState,
    darkTheme:() => set((state)=> ({
        theme : 'dark'
    })),
    lightTheme:() => set((state)=>({
        theme: 'light'
    })),
    //fecth all game
    fecthAllGames : async() =>{
        const GamesList =await allGamesList()
        set((state)=>({
            allGameList : GamesList.results
        }))
      }
    
}))

export default useStore