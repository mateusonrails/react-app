import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/watch/:key" element={ <Watch/> }></Route>
                <Route path="*" element={ <PageNotFound/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes