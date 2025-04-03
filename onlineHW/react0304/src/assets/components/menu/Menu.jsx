import styles from './Menu.module.css'

export function Menu() {
    function MenuButton(img, name) {
        return (
            <div className={styles['mnbtn']}>

            </div>
        )
    }

    return (
        <div className={styles['MenuForCss']}>
            <MenuButton/>
        </div>
    )
}