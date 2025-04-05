import { useParams } from "react-router-dom";

export function View({ data }) {
    const { id } = useParams();

    const item = data.find(item => item.id === id);

    if(item) {
        return (
            <div>
                <h3>{item.category}</h3>
                <h2>{item.name}</h2>
                <p><b>{item.price}</b></p>
                <p>{item.description}</p>
            </div>
        )
    }

    return <h1>Ошибка</h1>
}