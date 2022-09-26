import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                </Routes>
            </BrowserRouter>

            <h2>React-SPA</h2>
        </>
    );
}

export default App;
