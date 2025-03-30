import { useRequest } from './hook'

export function ExampleUseRequest() {
    const number = Math.round(Math.random() * 1000);

    const {data, isError, isLoading} = useRequest(`http://numbersapi.com/${number}`, 'GET', {}, {});

    if (isLoading) {
        return (
            <h1>Загрузка...</h1>
        )
    }
    
    if (isError) {
        return (
            <h1>Ошибка запроса</h1>
        )
    }
    return <h2>{data}</h2>;
}