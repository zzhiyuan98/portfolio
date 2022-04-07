import "./styles/Navbar.css";

function Navbar(props) {
    const { curPage, fullpageApi } = props;
    return (<nav>
        <ul className={curPage>2 ? "nav_links dark" : "nav_links"}>
            <li className={curPage===2 ? "nav_item current" : "nav_item"} onClick={() => fullpageApi.moveTo(2)}>WORK</li>
            <li className={curPage===3 ? "nav_item current" : "nav_item"} onClick={() => fullpageApi.moveTo(3)}>ABOUT</li>
            <li className={curPage===4 ? "nav_item current" : "nav_item"} onClick={() => fullpageApi.moveTo(4)}>CONTACT</li>
        </ul>
    </nav>);
}

export default Navbar;