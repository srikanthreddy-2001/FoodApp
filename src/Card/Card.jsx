import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    const {product} = props
    return ( 
        <div className={styles.container}>
            <img src={product.thumbnail} alt='product' className={styles.productImage}/>
            <p><b>{product.title}</b></p>
            <p><i>{product.description}</i></p>
            <p>Price: ${product.price}</p>
            <p>Rating: <b>{product.rating} / 5</b></p>
        </div>
    );
}

export default Card;