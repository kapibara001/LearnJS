import styles from './Form.module.css'

export default function Form() {
    return (
        <form action="" className={styles["form"]}>
            <div className={styles['divLabelForm']}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" name="name" id="nameInp"/>

                <label htmlFor="email">Ваша почта</label>
                <input type="email" name="email" id="emailInp"/>  
            </div>
            <div className={styles['inputError']}>
                <label htmlFor="textUserError">Напишите ваше сообщение</label>
                <textarea name="" id="textUser"></textarea>
            </div>
        </form>
    )
}