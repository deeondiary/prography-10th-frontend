import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import FormPage from "./pages/FormPage.tsx";
import FormSubmittedPage from "./pages/FormSubmittedPage.tsx";

function App() {

  return (
      <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/form'} element={<FormPage/>}/>
          <Route path={'/form-submitted'} element={<FormSubmittedPage/>}/>
      </Routes>
  )
}

export default App
