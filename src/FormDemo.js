import React, { Component } from "react";

export default class FormDemo extends Component {
  state = {
    userName: "",
    cityName: "",
  };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
      event.preventDefault();
    alert(this.state.userName);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>Username:</h3>
          <input name ="userName" type="text" onChange={this.onChangeHandler}></input>
          <h2>Username :{this.state.userName} </h2>
          <input name ="cityName" type="text" onChange={this.onChangeHandler}></input>
          <h2>City Name :{this.state.cityName} </h2>
          <input type="submit" value="Kaydet"></input>

        </form>
      </div>
    );
  }
}
