
const nav =(        <nav>
            <h1> Website </h1>
            <ul>
                <li> <a href='#'> Home </a> </li>
                <li> <a> About </a> </li>
                <li> <a> Services </a> </li>
                <li> <a> Contact </a> </li>
            </ul>
        </nav>)

document.getElementById('root').append(nav)

ReactDOM.render(<Navbar/>, document.getElementById('root'))
