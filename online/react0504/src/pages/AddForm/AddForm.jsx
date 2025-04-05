import { useState } from "react";

export function AddForm(
    {
        defaulValues = {
        name: '',
        descripton: '',
        category: '',
        price: 0,
        }
    })
{
    const [data, setData] = useState(defaulValues);

    return (
        <form>
            <table>
                <tr>
                    <td>Имя</td>
                </tr>
            </table>
        </form>
    )
}