import './App.css'
import Paragraph from './components/oneParagraph/Paragraph';
import Form from './components/Form/Form';
import { Navigation } from './components/Navigation/Navigation';
import { Card } from './components/CardPay/Card';
import { Table } from './components/Table/Table';
import { List } from './components/List/List';

export default function App() {
  return (
    <>
      <Paragraph/>
      <Form/>
      <Navigation/>
      <div style={{
        display: 'grid',
        gridTemplateColumns: "3fr 3fr 3fr",
        gridColumnGap: "10px"
      }}>

        <Card 
          imgUrl={'https://avatars.mds.yandex.net/get-verba/997355/2a0000018fddefa66bb289c982cbdb21b84d/cattouchret'}
          carName={"RR Culinan 2025"}
        />

        <Card 
          imgUrl={'https://www.allcarz.ru/wp-content/uploads/2015/09/foto-rr-cullinan_01.jpg'}
          carName={"RR Culinan"}
        />

      </div>
      <Table/>
      <List/>
      
    </>
  )
}