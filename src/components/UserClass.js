import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name : "dummy" ,
        avatar : "default",
      }
    };

  }

  
  async componentDidMount(){
       const data = await  fetch("https://api.github.com/users/saif8804");

       const json = await data.json();


      this.setState({
         userInfo : json,
      })

  }


  componentDidUpdate(prevProps, prevState){

  }


  componentWillUnmount(){

   
  }

  render() {
 
    return (
      <div className="user-card">

        <h2>Name :{this.state.userInfo.login} </h2>
        <h3>avatar :{this.state.userInfo.avatar_url} </h3>
      </div>                                                                                                                                                                                                                                                                                                                                   
    );
  }
}

export default UserClass;

/* 
     Mounting cycle 
// constructor is called 
// render this component 
// <html> has dummy data
// component didmount is called
  <api calles >
  // this.setState

------- update cycle 
   render (api data)
   <html (new api data)>
   
   component did update 

*/