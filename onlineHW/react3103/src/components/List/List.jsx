import styles from './List.module.css'

export function List() {
    return (
        <div className={styles['list']}>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C</li>
                <li>C#</li>
                <li>C++</li>
                <li>Golang</li>
                <li>Kotlin</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Moo</li>
            </ul>
        </div>
    )
}