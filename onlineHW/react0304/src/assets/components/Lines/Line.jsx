import styles from './Line.module.css'

export function Line({width}) {
    return (
        <div className={styles['line']} style={{width: width}}>
            
        </div>
    )
}   