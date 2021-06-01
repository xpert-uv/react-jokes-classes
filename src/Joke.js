/* eslint-disable no-useless-constructor */
import React from "react";
import "./Joke.css";

class Joke extends React.Component {
  constructor(props) {
    super(props);

  }
  //function Joke({ vote, votes, text, id }) {

  render() {


    const upVote = () => this.props.vote(this.props.id, +1);
    const downVote = () => this.props.vote(this.props.id, -1);
    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {this.props.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
