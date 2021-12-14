import MenuItem from './MenuItem';

import classes from './Menu.module.css';

const Menu = () => {

const itemList = [{
    name: 'Humble Pie',
    price: 7.99,
    id: 1
},
{
    name: 'Grumblecakes',
    price: 5.99,
    id: 2
},

{
    name: 'Tumblepuppies, Hush',
    price: 3.99,
    id: 3
}
]

return(
<ul className={classes.menu}>
    {itemList.map((item) => (
    <MenuItem name={item.name} price={item.price} id={item.id} key={item.id}/>))}
</ul>
);

}

export default Menu;