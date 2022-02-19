import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCountTwo from './components/HookCountTwo'

function App() {
    return (
        <div className='App'>
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            <HookCountTwo />
        </div>
    )
}

export default App
