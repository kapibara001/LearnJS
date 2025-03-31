import { useState } from 'react'
import styles from './ModalWindow.module.css'

export function Window() {
    const [open, isWindow] = useState(false)

    return (
        <>
            {!open && (
                <button className={styles['openBtn']} onClick={() => {isWindow(true)}}>Открыть окно</button>
            )}

            {open && (
                <div className={styles['modalWindow']}>
                    <h1>Окно уведомления</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ex tempore, dolore a distinctio veniam velit dignissimos 
                        nam adipisci, consectetur expedita vel fugiat! 
                        Exercitationem distinctio, natus id excepturi commodi 
                        error vel!
                    </p>
                    <button className={styles['closeBtn']} onClick={() => {
                        isWindow(false);
                    }}>
                        Закрыть
                    </button>
                </div>
            )}
        </>
    )
}