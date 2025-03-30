import { useEffect, useState } from "react";

export function Timer({volume}) {
    const [time, setTime] = useState(volume);

    useEffect(() => {
        const id = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000);
    
        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <div>{convertToHHMMSS(time).join(':')}</div>
    );

    function convertToHHMMSS(time) {
        const HH = Math.floor(time / 3600)
        const MM = Math.floor(time / 60) % 60
        const SS = time % 60
        return [HH, MM, SS]
    }
}