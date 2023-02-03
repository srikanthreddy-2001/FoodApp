import React from 'react'
import styles from './Photos.module.css'

function Photos(props) {
    const {foodItems} = props
  return (
    <div className={styles.container}>
        {
            foodItems.map(item=><div className={styles.imageContainer} id={`${item.itemName}`}>
                <img src={item.imageLink} alt='item'/>
                <p>{item.itemName}</p>
            </div>)
        }
    </div>
  )
}

export default Photos