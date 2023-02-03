import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import NavBar from '../NavBar/NavBar';
import Photos from '../Photos/Photos';

function FoodListing() {
    const foodItems = [
        {
            itemName: 'Pizza' ,
            imageLink: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'
        },
        {
            itemName: 'Burger' ,
            imageLink: 'https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY='
        },
        {
            itemName: 'Dosa' ,
            imageLink: 'https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900'
        },
        {
            itemName: 'Lazania' ,
            imageLink: 'https://bi.im-g.pl/im/27/f2/1a/z28257319Q,Lazania.jpg'
        },
        {
            itemName: 'Manchurian' ,
            imageLink: 'https://www.recipefunnel.com/images/recipe/veg-manchurian-1629182469577.webp?compress=false'
        }
    ]
    return ( 
        <div>
            <NavBar/>
            <MenuItems foodItems={foodItems}/>
            <Photos foodItems={foodItems}/>
        </div>
    );
}

export default FoodListing;