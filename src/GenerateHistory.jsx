import {GENERATE_DATA, SCAN_DATA} from "./constants.js";
import {QRCodeSVG} from "qrcode.react";

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    return (
        <div style={{marginLeft: 50}}>
            {data.map((text) => (
                <p key={text}>
                    <QRCodeSVG value={text} size={50}/>
                    <div style={{marginLeft: 20}}>
                        {text}
                    </div>
                </p>
            ))}
        </div>
    )
}









