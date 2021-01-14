import React, {Component} from 'react';
import HeaderSection from "./Layout/HeaderSection";
import FooterSection from "./Layout/FooterSection";
import MainSection from "./Layout/MainSection";

class App extends Component {
    render() {
        return (
            <div>
              <HeaderSection/>
              <MainSection/>
              <FooterSection/>
            </div>
        );
    }
}

export default App;
