import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <h1>
                Navbar
            </h1>

            <ul> 

            <li>
                <Link href="/">
                    <a>Homepage</a>
                </Link> 
            </li> 
            <li>
                <Link href="/search">
                    <a>Search</a>
                </Link> 
            </li>
            <li>
                <Link href="/">
                    <a>Homepage</a>
                </Link> 
            </li>
            </ul>
        </div>
    )
}

export default Navbar;