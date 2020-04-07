import React from 'react';
import axios from 'axios'
import './App.css';
import Card from './components/Card'
import FollowerCard from './components/FollowerCard'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/michaelbarnes7282")
      .then(response => {
        // console.log(response.data)
        this.setState({
          user: response.data
        });
      });
    axios.get("https://api.github.com/users/michaelbarnes7282/followers")
      .then(response => {
        response.data.map(item => {
          axios.get(item.url)
            .then(response => {
              console.log(response.data)
              this.setState({
                followers: [...this.state.followers, response.data]
              });
            })
        })
      });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Cards</h1>
        <div className='cards'>
          <Card user={this.state.user} />
          <FollowerCard followers={this.state.followers} />
        </div>
      </div>
    );
  }

}

export default App;
