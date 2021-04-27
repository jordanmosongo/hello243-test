import React from "react";
import Robot from "./components/Robot";
import Loader from "./components/Loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfRobots: [],
      filteredRobotsArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseData = await response.json();
      if (response.ok) {
        this.setState({
          arrayOfRobots: responseData,
          filteredRobotsArray: responseData,
          loading: false,
        });
      } else {
        this.setState({
          loading: true,
        });
      }
    })();
  }
  searchRobot = (event) => {
    event.preventDefault();
    let entry = event.target.value;
    const exp = new RegExp(entry, "i");
    const tempArray = [...this.state.arrayOfRobots];
    const filteredArray = tempArray.filter((robot) => {
      const { name } = robot;
      if (exp.test(name)) return robot;
    });
    this.setState({
      filteredRobotsArray: filteredArray,
    });
  };

  render() {
    return (
      <div className="home">
        <h1>Mes amis robots</h1>
        <div className="home__input-search">
          <input
            type="text"
            name="inputSearch"
            placeholder="Recherchez un robot"
            onChange={this.searchRobot}
          />
        </div>
        <div className="home__robots-container">
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.filteredRobotsArray.map((robot) => (
              <Robot robot={robot} />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default Home;
