import axios from "axios"
import { useEffect, useState } from "react"

export function FetchApi() {
    const [fact, setFact] = useState();

    useEffect(() => {
        const id = setInterval(() => {
            const number = Math.round(Math.random()*1000)
            axios
                .get(`http://numbersapi.com/${number}`)
                .then(res => {
                    if (res.status === 200) {
                        setFact(res.data);
                    } else {
                        throw new Error("Ошибка запроса")
                    } 
                })
        }, 1000*5);

        return () => {
            clearInterval(id);
        }
    })


    return (
        <div style={{
            backgroundColor: 'rgba(211, 211, 211, 0.5)',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: "9999",
        }}>
            <div
                style={{
                    backgroundColor: "white",
                    padding: '20px',
                }}>
                    {fact}
            </div>
        </div>  
    )
}