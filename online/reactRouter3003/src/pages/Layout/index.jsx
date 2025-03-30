import { Link, Outlet } from 'react-router-dom';
 
export function Layout() {
    return (
        <div style={{width: '100%'}}>
            <header style={{display:'flex', gap:'25px'}}>
                <Link to="/">Главная страница</Link>
                <Link to="/login">Авторизируйся</Link>
                <Link to="/shop">Магазин</Link>
            </header>
            <h1>Главная страница</h1>

            <Outlet/>
        </div>
    )
}