import styles from './List.module.css'

export function List() {
    return (
        <div className={styles['wrapper']}>
            {
                data.map(
                    item => <ListItem key={item.id} item={item}/>
                )
            }
        </div>
    )
}

function ListItem({item}) {
    return (
        <div>
            <span><b>{item.name}</b></span>
            <span><br />{'Price: ' + item.price + "$"}</span>
        </div>
    )
}

const data = [
    {
      "id": 1,
      "name": "Smartphone Samsung Galaxy S24",
      "category": "Smartphones",
      "brand": "Samsung",
      "price": 899.99,
      "inStock": true,
      "specs": {
        "display": "6.1\" AMOLED",
        "storage": "256GB",
        "ram": "8GB",
        "camera": "50MP",
        "battery": "4000mAh"
      }
    },
    {
      "id": 2,
      "name": "Laptop Apple MacBook Pro 14",
      "category": "Laptops",
      "brand": "Apple",
      "price": 1999.99,
      "inStock": false,
      "specs": {
        "display": "14.2\" Retina",
        "storage": "512GB SSD",
        "ram": "16GB",
        "processor": "Apple M3",
        "battery": "18 hours"
      }
    },
    {
      "id": 3,
      "name": "Wireless Earbuds Sony WF-1000XM5",
      "category": "Audio",
      "brand": "Sony",
      "price": 299.99,
      "inStock": true,
      "specs": {
        "noiseCancelling": true,
        "battery": "8h + 24h (case)",
        "connectivity": "Bluetooth 5.3",
        "waterResistant": "IPX4"
      }
    },
    {
      "id": 4,
      "name": "Smartwatch Garmin Fenix 7X",
      "category": "Wearables",
      "brand": "Garmin",
      "price": 749.99,
      "inStock": true,
      "specs": {
        "display": "1.4\" sunlight-visible",
        "gps": true,
        "battery": "up to 28 days",
        "waterResistant": "10 ATM",
        "features": ["Heart Rate", "SpO2", "Maps", "Music"]
      }
    },
    {
      "id": 5,
      "name": "4K TV LG OLED C3 55\"",
      "category": "TVs",
      "brand": "LG",
      "price": 1399.99,
      "inStock": false,
      "specs": {
        "resolution": "4K UHD",
        "panelType": "OLED",
        "refreshRate": "120Hz",
        "smartTV": true,
        "hdmiPorts": 4
      }
    }
  ]