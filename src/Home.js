import ReactFullpage from "@fullpage/react-fullpage";
import "./Home.css";

function Home() {
    return (
        <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        navigation={true}
        navigationPosition={"left"}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={["#7868E6", "#363062", "#EDEEF7", "#B8B5FF"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <nav>
                    <ul className="nav_links">
                        <li className="nav_item" onClick={() => fullpageApi.moveTo(2)}>ABOUT</li>
                        <li className="nav_item" onClick={() => fullpageApi.moveTo(3)}>WORK</li>
                        <li className="nav_item" onClick={() => fullpageApi.moveTo(4)}>CONTACT</li>
                    </ul>
                </nav>
                <h1>I'm Zhiyuan bringing You Programming and Design from the Future</h1>
              </div>
              <div className="section">
                <nav>
                    <ul className="nav_links">
                        <li className="nav_item current">ABOUT</li>
                        <li className="nav_item">WORK</li>
                        <li className="nav_item">CONTACT</li>
                    </ul>
                </nav>
                <h1>ABOUT</h1>
              </div>
              <div className="section">
                <nav>
                    <ul className="nav_links dark">
                        <li className="nav_item">ABOUT</li>
                        <li className="nav_item current">WORK</li>
                        <li className="nav_item">CONTACT</li>
                    </ul>
                </nav>
                <h1 className="dark">WORK</h1>
              </div>
              <div className="section">
                <nav>
                    <ul className="nav_links dark">
                        <li className="nav_item">ABOUT</li>
                        <li className="nav_item">WORK</li>
                        <li className="nav_item current">CONTACT</li>
                    </ul>
                </nav>
                <h1>CONTACT</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );

}
export default Home;