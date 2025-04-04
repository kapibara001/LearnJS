import styles from './Page.module.css'

export function Page() {
    function LongModule({text, color, height}) {
        return (
            <div className={styles['longmodule']} style={{
                backgroundColor: color,
                height: height
                }}>

                <p>
                    <b>{text}</b>
                </p>
            </div>
        )
    }

    function ShortModule({text, width, height}) {
        return (
            <div className={styles['shortmodule']} style={{
                width: width,
                height: height,
            }}>
                <p>
                    <b>{text}</b>
                </p>
            </div>
        )
    }

    return (
        <div className={styles['bigPart']}>
            <div className={styles['centerPage']}>
                <LongModule text={'Header'} color={'purple'} height={'70px'}/>
                <LongModule text={'Menu'} color={'#C71585'} height={'50px'}/>
                <div style={{display: 'flex'}}>
                    <div style={{
                        width: '100%', 
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <ShortModule text={'Aside 1'} width={'200px'} height={'90px'}/>
                        <ShortModule text={'Aside 2'} width={'200px'} height={'120px'}/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}