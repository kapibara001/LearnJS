/**
 * Функция для создания карточки товара магазина
 */
import styles from './Card.module.css'

export function Card({ urlImage, name }) {
    return (
        <>
        <div className={styles['formedia']}>
            <div className={styles['card']}>
                <div className={styles['imgDiv']}>
                    <img src={urlImage} alt="" />
                </div>
                <h3>{name}</h3>
            </div>
        </div>
        </>
    )
}