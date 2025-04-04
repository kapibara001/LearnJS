import styles from './Menu.module.css'

export function Menu() {
    function MenuButton({img, name}) {
        return (
            <div className={styles['mnbtn']}>
                <div className={styles['modulesInMnBtn']}>
                    <img src={img} alt="" />
                </div>
                <div className={styles['modulesInMnBtn']}>
                    <b>{name}</b>
                </div>
            </div>
        )
    }

    return (
        <div className={styles['MenuForCss']}>
            <MenuButton img='https://cdn-icons-png.flaticon.com/512/3094/3094216.png' name="Edit"/>
            <MenuButton img='https://cdn-icons-png.flaticon.com/512/138/138533.png' name="Favorites"/>
            <MenuButton img='https://cdn-icons-png.flaticon.com/512/3336/3336739.png' name="History"/>
            <MenuButton img='https://cdn-icons-png.flaticon.com/512/473/473701.png ' name="Security"/>
            <MenuButton img={'https://cdn-icons-png.flaticon.com/512/945/945147.png'} name={'Settings'}/>
        </div>
    )
}