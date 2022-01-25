import Link from "next/link";
// import styles from '../styles/Nav.module.css'
const Navbar = () => {
return(
    <nav>
        <div className="logo">
            <h1>News App</h1>
        </div>
        <div className="navibtn">
        <ul>
        <Link  href="/"><a>Home</a></Link>
        <Link  href="/topnews"><a>Top News</a></Link>
        <Link  href="/magazine"><a>Magazine</a></Link>
        <Link  href="/podcast"><a>Podcast</a></Link>
        <Link  href="/about"><a>About us</a></Link>
        </ul>
        </div>
    </nav>
);
}
export default Navbar;
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element