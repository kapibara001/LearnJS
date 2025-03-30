import { Routes, Route } from "react-router-dom"
import { Layout } from "../pages/Layout/index"

export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}/>
                <Route path="login" element={<h1>Форма авторизации</h1>}/>
                <Route path="shop" element={<h1>Страница магазина</h1>}>
            </Route>
        </Routes>
    )
}