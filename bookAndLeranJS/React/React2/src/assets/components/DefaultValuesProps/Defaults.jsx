export function Defaults(props) {
    return (
        <div>
            <h1>Информация о писателе:</h1>
            <h2>{props.name}</h2>
            <h2>{props.lastName}</h2>
        </div>
    )
}