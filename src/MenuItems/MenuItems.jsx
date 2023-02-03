import React from 'react'
import styles from './MenuItems.module.css'

function MenuItems(props) {
    const {foodItems} = props

  return (
    <div className={styles.container}>
        <ul>
            {
                foodItems.map(item=><li className={styles.listItems}><a href={`index.html#${item.itemName}`}>{item.itemName}</a></li>)
            }
        </ul>
    </div>
  )
}

export default MenuItems