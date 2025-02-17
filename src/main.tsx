import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {StyleSheetManager} from "styled-components";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <StyleSheetManager shouldForwardProp={() => true}>
                <App/>
            </StyleSheetManager>
        </BrowserRouter>
    </StrictMode>,
)
