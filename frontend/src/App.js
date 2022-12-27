import React, {Component} from 'react';
import Loginpage from "./components/login/Loginpage";
import Mainpage from "./components/main/Mainpage";

class App extends Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.setState({reduxState: this.props.store.getState()});
    })
  }

  render() {
    const styles = {
      h2: {
          display: "inline-block",
          fontFamily: "monospace",
          fontWeight: "bolder",
          fontSize: "180%",
          marginTop: "1%",
          backgroundColor: "lightgrey",
          border: "3px solid black",
          borderRadius: "15px"

      }
  }
    return (<div  className="firstPage" style={{

    }}>
    <h2 style={styles.h2} align="center" id="authors">Web 4<p>Михайлов Давид & Александр Миллер Р33212</p><p>Вариант: 7713</p></h2><br/>
      { console.log(this.props.store.getState().login)}
      {this.props.store.getState().login !== null ? <Mainpage/> :<Loginpage/>}

    </div>)
  }
}

export default App;