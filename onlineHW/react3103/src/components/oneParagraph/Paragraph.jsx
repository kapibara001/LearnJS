import styles from './Paragraph.module.css';

export default function Paragraph() {
    return (
        <div className={styles["paragraphStyle"]}>
            <h1 className={styles["headtext"]}>Заголовок абзаца</h1>
            <p className={styles["pText"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore dignissimos quia velit consectetur ducimus rem soluta deleniti, provident tenetur quidem eum magnam atque facere ut repellat minus alias ratione.</p>
            {/* <img src="https://cs6.pikabu.ru/post_img/big/2015/06/08/3/1433735650_472905306.jpg" alt="" className={styles["imgText"]}/>; */}
            <div className={styles["imgText"]}>
                <img src="https://cs6.pikabu.ru/post_img/big/2015/06/08/3/1433735650_472905306.jpg" alt="" />
            </div>
        </div>
    )
}