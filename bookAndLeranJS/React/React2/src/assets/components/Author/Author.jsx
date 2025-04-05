export function Author(props) {
    let {name, lastname, ...any} = props;

    return (
        <div className="Author">
            <h1>Information about writer:</h1>
            <h2>Fullname: {name} {lastname}</h2>
            <h3>Description: {any.discription}</h3>
            <h4>{any.year}</h4>
        </div>
    )
}