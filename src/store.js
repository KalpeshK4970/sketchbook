import {configureStore} from '@reduxjs/toolkit'
import  MenuReducer from '@/slice/menuSlice'
import ToolboxReducer from '@/slice/toolboxSlice'
// import Menu from './components/Menu'

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        toolbox: ToolboxReducer
    }
})