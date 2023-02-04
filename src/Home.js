import React from "react";
import Candidate from "./components/Candidate";
import candidatesData from "./api.json";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfCandidates: [],
      filteredCandidatesArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    const candidates = candidatesData.candidates;
    this.setState({
          arrayOfCandidates: candidates,
          filteredCandidatesArray: candidates,
          loading: false,
        });
   }
  searchCandidate = (event) => {
    event.preventDefault();
    let entry = event.target.value;
    const exp = new RegExp(entry, "i");
    const tempArray = [...this.state.arrayOfCandidates];
    const filteredArray = tempArray.filter((candidate) => {
      const { name } = candidate;
      if (exp.test(name)) return candidate;
    });
    this.setState({
      filteredCandidatesArray: filteredArray,
    });
  };

  render() {
    return (
      <div className="home">
        <h1>LISTE DES CANDIDATS</h1>
        <div className="home__input-search">
          <input
            type="text"
            name="inputSearch"
            placeholder="Recherchez un candidat"
            onChange={this.searchCandidate}
          />
        </div>
        <div className="home__Candidates-container"
        style={{
          "width": '95%',
          "height": '100%',
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "center",
          "justifyContent": "center",
          "flexWrap": "wrap"
        }}
        >
          {
            this.state.filteredCandidatesArray.map((candidate) => (
              <Candidate candidate={candidate} />
            ))
          }
        </div>
      </div>
    );
  }
}
export default Home;
