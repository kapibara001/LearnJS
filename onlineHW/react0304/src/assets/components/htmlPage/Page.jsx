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

    function SectionMainContent(props) {
        const {number, ...any} = props;

        return (
            <div className={styles['section']}>
                <p>
                    <b>Section {number}</b>
                </p>
            </div>
        )
    }

    return (
        <div className={styles['bigPart']}>
            <div className={styles['centerPage']}>
                <LongModule text={'Header'} color={'purple'} height={'70px'}/>
                <LongModule text={'Menu'} color={'#C71585'} height={'50px'}/>
                <div style={{display: 'flex', marginBottom: '10px'}}>
                    <div style={{
                        width: 'max-content', 
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <ShortModule text={'Aside 1'} width={'200px'} height={'90px'}/>
                        <ShortModule text={'Aside 2'} width={'200px'} height={'120px'}/>
                    </div>
                    <div className={styles['centerModule']}>
                        <p>
                            <b>Main Content</b>
                            <SectionMainContent number={1}/>
                            <SectionMainContent number={2}/>
                        </p>
                    </div>
                    <div>
                        <ShortModule text={'Aside 3'} width={'120px'} height={'200px'}/>
                    </div>
                </div>
                <LongModule text={'Footer'} color={'purple'} height={'50px'}/>
            </div>
        </div>
    )
}