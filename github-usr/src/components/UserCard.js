import axios from "axios";
import React from "react";
import "../App.css";

class UserCard extends React.Component {
  state = {
    userCard: [],
  };
  componentDidMount() {
    this.fetchUserCard("zempo");
  }
  fetchUserCard = (user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        this.setState({
          userCard: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='cardDiv'>
        <h1>{this.state.userCard.login}</h1>
        <img src={this.state.userCard.avatar_url} alt='Github Avatar'></img>
        <p>{this.state.userCard.followers} followers!</p>
        <p>
          Have you started following me yet?{" "}
          {this.state.userCard.following ? "Yes" : "No"}.
        </p>
      </div>
    );
  }
}

export default UserCard;
