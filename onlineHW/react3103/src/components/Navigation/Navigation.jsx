import styles from './Navigation.module.css'

export function Navigation() {
    return (
        <nav className={styles['navigation']}>
            <div className={styles['navBtn']}>
                Главная 
            </div>
            <div className={styles['navBtn']}>
                Телевизоры 
            </div>
            <div className={styles['navBtn']}>
                Телефоны
            </div>
        </nav>
    )
}