import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./routes";
import "./styles/bootstrap.min.css";
import "./styles/foundation.min.css";
import "./styles/custom.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: "Paycom",
    };
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <Header name={this.state.appName} />
            <Routes />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
