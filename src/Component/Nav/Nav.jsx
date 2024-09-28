import './Nav.css';

function Nav(){
    return(
       <nav>
        <logo><img src="https://flowbite.com/docs/images/logo.svg" alt="" />GeekFoods</logo>
        <ul>
            <li>Home</li>
            <li>Quote</li>
            <li>Resturants</li>
            <li>Foods</li>
            <li>Contact</li>
        </ul>
        <button className='btn getStarted'>Get Started</button>
       </nav>
    )
}
export default Nav;