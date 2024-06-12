import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../Utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log(" parent constructor")
  }

  componentDidMount() {
    // console.log(" parent component Did Mount");
  }
  render() {
    // console.log(" parent render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {( {loggedInUser} ) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React </h2>
        <UserClass />
      </div>
    );
  }
}
export default About;
