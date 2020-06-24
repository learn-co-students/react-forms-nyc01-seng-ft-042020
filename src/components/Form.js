import React from 'react';

class Form extends React.Component {


  render() {
    return (
      <form onSubmit={(e)=>this.props.handleSubmitEvent(e)}>
        <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
        <input type="submit"/>      
      </form>
    )
  }
}

export default Form;
