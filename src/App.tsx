import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main.tsx";
import Form from "./pages/Form.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/form'} element={<Form />} />
        </Routes>
    </>
  )
}

export default App
