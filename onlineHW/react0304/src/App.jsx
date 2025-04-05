import styles from './App.module.css'
import { Card } from "./assets/components/shop/Card/Card"
import { Footer } from './assets/components/shop/Footer/Footer'
import { Menu } from './assets/components/menu/Menu'
import { Page } from './assets/components/htmlPage/Page'

export function App() {
  return (
    <>
      <div className='firstExersize' style={{
        width: '100%',
        display: 'flex',
        justifyContent:'center',
      }}>
        <div className={styles['Cards']}>
          <Card urlImage={'https://i.pinimg.com/originals/d5/ba/29/d5ba29eb30fabb8818723df580ecd14d.png'} name="Propper"/>
          <Card urlImage={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Emojione1_1F336.svg/1024px-Emojione1_1F336.svg.png?20170618223117'} name="Paper Chillie"/>
          <Card urlImage={'https://media.baamboozle.com/uploads/images/26339/1584078938_56961'} name="Apple"/>
          <Card urlImage={'https://i.pinimg.com/originals/d5/ba/29/d5ba29eb30fabb8818723df580ecd14d.png'} name="Propper"/>
          <Card urlImage={'https://i.pinimg.com/originals/d5/ba/29/d5ba29eb30fabb8818723df580ecd14d.png'} name="Propper"/>
        </div>
      </div>
      <Footer/>
      <hr />


      <div className='secondExersize'>
        <Menu/>
      </div>
      <hr />

      <div className='thirdExersize'>
        <Page/>
      </div>
      
    </>
  )
}

