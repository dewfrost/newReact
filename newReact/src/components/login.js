
import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <header>
              登录
            </header>
            <div className="content">
            登录内容
            </div>
          </div>
        </div>   
      </div>
    );
  }
  componentDidMount(){
    console.log(this)
    console.log(this.props.location.state)
  }
}

export default App;