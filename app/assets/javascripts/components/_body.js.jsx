
class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewQuestion = this.addNewQuestion.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this)
  }

handleFormSubmit(question, teaming_stages, appears, frequency, question_type, role, required, conditions, mapping){
    let body = JSON.stringify({question: {question: question, teaming_stages: teaming_stages, appears: appears, frequency: frequency, question_type: question_type, role_id: role, required: required, conditions: conditions, mapping_id: mapping} })

    fetch('http://localhost:3000/api/v1/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((questions)=>{
      this.addNewQuestion(questions)
    })
    window.location.reload(false);

  }

  addNewQuestion(question){
    this.setState({
      fruits: this.state.questions.concat(question)
    })
        window.location.reload(false);

  }

   handleDelete(id){
    fetch(`http://localhost:3000/api/v1/questions/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteQuestion(id)
      })
      window.location.reload(false);
  }

  deleteQuestion(id){
    newFruits = this.state.questions.filter((question) => question.id !== id)
    this.setState({
      questions: newQuestions
    })
  }

  handleUpdate(question){
    fetch(`http://localhost:3000/api/v1/questions/${question.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({question: question}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateQuestion(question)
      })
      window.location.reload(false);
  }
  updateQuestion(question){
    let newQuestions = this.state.questions.filter((f) => f.id !== question.id)
    newFruits.push(question)
    this.setState({
      questions: newQuestions 
    })
    window.location.reload(false);
  }

  componentDidMount(){
    fetch('/api/v1/questions.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ questions: data }) });
  }

  render(){
    return(
      <div>
        {/*<NewQuestion handleFormSubmit={this.handleFormSubmit}/>
        <h1>Questions!</h1>*/}
        <AllQuestions questions={this.state.questions} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}