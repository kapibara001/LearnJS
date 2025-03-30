import styles from './Card.module.css'

export function Card({imgUrl, carName}) {
    return (
        <div className={styles['card']}>
            <div className={styles["imgCase"]}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={styles['infoCard']}>
                <p className={styles['CardHead']}>
                    {carName}
                </p>
                <p className={styles['infoCard2']}>
                    <p>HP: 650</p>
                    <p>Year: 2025</p>
                    <p>Carpass: Yes</p>
                </p>
            </div>
            <div className={styles['buyBtn']}>
                <p style={{
                    textAlign: "center",
                    margin: '0'
                }}> 
                    <button className={styles['btnbuy']}>Купить</button>
                </p>
            </div>
        </div>
    )
}

// https://avatars.mds.yandex.net/get-verba/997355/2a0000018fddefa66bb289c982cbdb21b84d/cattouchret