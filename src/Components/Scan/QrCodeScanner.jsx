import {Scanner} from "@yudiel/react-qr-scanner";
import {useState} from "react";
import s from './qrCodeScanner.module.css'
import {SCAN_DATA} from "../../constants.js";

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)
    const scanHandler = (result) => {
        let value = result[0].rawValue
        setScanned(value)
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

        localStorage.setItem(
            SCAN_DATA, JSON.stringify([...prevData, value])
        )
    }
    console.log('val: ', scanned)
    const settings = {
        audio: false,
        finder: false,
    }

    return (
        <div className={s.container}>
            <p>Наведите QR код</p>
            <Scanner
                allowMultiple={false}
                onScan={scanHandler}
                components={settings}
                styles={{
                    container: {
                        width: 100,
                        //height: 200
                    }
                }}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    )
}




