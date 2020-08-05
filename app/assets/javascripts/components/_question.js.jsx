
class Question extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
     
       let question = this.question.value
       let teaming_stages = this.teaming_stages.value
       let appears = this.appears.value
       let frequency = this.frequency.value
       let question_type = this.question_type.value
       let role = this.role_id.value
       let required = this.required.value
       let conditions = this.conditions.value
       let mapping = this.mapping.value
       let id = this.props.question.id

       let question1 = {id: id,question: question, teaming_stages: teaming_stages, appears: appears, frequency: frequency, question_type: question_type, role: role, required: required, conditions: conditions, mapping: mapping}

      this.props.handleUpdate(question1)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
 
  render(){
       let question = this.state.editable ? <input type='text' ref={input => this.question = input}
       defaultValue={this.props.question.question}/>:<p>{this.props.question.question}</p>
       let teaming_stages = this.state.editable ? <input type='text' ref={input => this.teaming_stages = input}
       defaultValue={this.props.question.teaming_stages}/>:<p>{this.props.question.teaming_stages}</p>
       let appears = this.state.editable ? <input type='text' ref={input => this.appears = input}
       defaultValue={this.props.question.appears}/>:<p>{this.props.question.appears}</p>
       let frequency = this.state.editable ? <input type='text' ref={input => this.frequency = input}
       defaultValue={this.props.question.frequency}/>:<p>{this.props.question.frequency}</p>
       let question_type = this.state.editable ? <input type='text' ref={input => this.question_type = input}
       defaultValue={this.props.question.question_type}/>:<p>{this.props.question.question_type}</p>
       let role = this.state.editable ? <input type='text' ref={input => this.role_id = input}
       defaultValue={this.props.question.role_id}/>:<p>{this.props.question.role}</p>
       let required = this.state.editable ? <input type='text' ref={input => this.required = input}
       defaultValue={this.props.question.required}/>:<p>{this.props.question.required}</p>
       let conditions = this.state.editable ? <input type='text' ref={input => this.conditions = input}
       defaultValue={this.props.question.conditions}/>:<p>{this.props.question.conditions}</p>
       let mapping = this.state.editable ? <input type='text' ref={input => this.mapping = input}
       defaultValue={this.props.question.mapping}/>:<p>{this.props.question.mapping}</p>
       return(
       
        <tr><td>{question}</td>
        <td>{teaming_stages}</td>
        <td>{appears}</td>
        <td>{frequency}</td>
        <td>{question_type}</td>
        <td>{role}</td>
        <td>{required}</td>
        <td>{conditions}</td>
        <td>{mapping}</td>
        </tr>
    ) 
  }

}


