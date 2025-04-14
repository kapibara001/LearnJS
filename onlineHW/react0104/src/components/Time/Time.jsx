export function Timee() {
    const nowTime = new Date().toLocaleTimeString();

    return (
        <div>
            <p>Now is {nowTime}</p>
        </div>
    )
}