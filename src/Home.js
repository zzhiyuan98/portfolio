import ReactFullpage from "@fullpage/react-fullpage";
import "@fontsource/league-spartan";
import "./styles/Home.css";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";

function Home() {
    return (
        <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        navigation={true}
        navigationPosition={"left"}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={["#7868E6", "#0F044C", "#EDEEF7", "#B8B5FF"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Navbar fullpageApi={fullpageApi} curPage={1}/>
                <h1>I'm Zhiyuan, a Frontend Developer & UX Designer based in Shanghai.</h1>
              </div>
              <div className="section">
                <Navbar fullpageApi={fullpageApi} curPage={2}/>
                <h1>WORK</h1>
              </div>
              <div className="section">
                <Navbar fullpageApi={fullpageApi} curPage={3}/>
                <h1  className="dark">Me, Myself & I</h1>
                <p className="intro dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <div className="section">
                <Navbar fullpageApi={fullpageApi} curPage={4}/>
                <h1>CONTACT</h1>
                <ContactForm />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );

}
export default Home;