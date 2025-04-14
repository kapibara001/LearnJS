export function MyDate() {
    const Datee = new Date().toLocaleDateString();

    return (
        <div>
            <h1>Today is {Datee}</h1>
        </div>
    )
}