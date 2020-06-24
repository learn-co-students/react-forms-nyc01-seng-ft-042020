import React, {Component} from 'react'
import Form from './Form'
import DisplayData from './DisplayData'
export default class ParentComponent extends Component{
  state = {
    firstName: "",
    lastName: "",
    submittedData:[],
  }
 
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
 
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
 
  handleSubmitEvent=(event)=>{
    event.preventDefault();
    const formData = {
      firstName:this.state.firstName,
      lastName:this.state.lastName
    }
    const dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData:dataArray})
  }
  listOfSubmissions=()=>{
   return this.state.submittedData.map(data=>{
      return <div>
        <span>{data.firstName}</span>
        <span>{data.lastName}</span>
      </div>
  })
  }
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleSubmitEvent = {this.handleSubmitEvent}
        />
        <DisplayData formData={this.state} />
        {this.listOfSubmissions()}
      </div>

    )
  }
}

