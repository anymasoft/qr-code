import {QrCodeGenerator} from './Components/Generate/QrCodeGenerator.jsx'
import {QrCodeScanner} from "./Components/Scan/QrCodeScanner.jsx";
import {Navigation} from "./Components/Navigation/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import {GenerateHistory} from "./GenerateHistory.jsx";
import {ScanHistory} from "./ScanHistory.jsx";

const Layout = () => {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path={"/generate"} element={<QrCodeGenerator/>}/>
                <Route path={"/scan"} element={<QrCodeScanner/>}/>
                <Route path={"/scanHistory"} element={<ScanHistory/>}/>
                <Route path={"/generateHistory"} element={<GenerateHistory/>}/>
            </Routes>
        </div>
    )
}

export {Layout};


