import { useState } from "react";


export function Form({onSubmit}) {
    const [isVisiblePassword, setStateVisiblePassword] = useState(false);

    return (
        <form 
            onSubmit = {(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >

            <table>
                <caption>Авторизация</caption>
                <tbody>
                    <tr>
                        <td>Логин:</td>
                        <td>
                            <input name="login" type="text"/>
                        </td>
                    </tr>

                    <tr>
                        <td>Пароль</td>
                        <td>
                            <input type = {isVisiblePassword ? "text" : "password"} />
                        </td>

                        <td>
                            <button
                                type="button" onClick={() => {setStateVisiblePassword(prev => !prev)}}
                            >
                                {isVisiblePassword ? 'Скрыть' : 'Показать'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>Сохранить</button>
        </form>
    )
}