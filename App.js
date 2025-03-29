import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "yassine gourgane",
        bio: "Développeur passionné par React et les technologies web.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Développeur Full Stack"
      },
      shows: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Profile Toggle App</h1>
          
          <button onClick={this.toggleShow} className="toggle-btn">
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          
          <div className="time-display">
            Time since component mounted: {timeInterval} seconds
          </div>
          
          {shows && (
            <div className="profile-card">
              <img src={person.imgSrc} alt={person.fullName} className="profile-image" />
              <h2>{person.fullName}</h2>
              <h3>{person.profession}</h3>
              <p>{person.bio}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;