const AllQuestions = (props) => {
  var questions = props.questions.map((question) => {
    return(
      <div key={question.id}>
       <Question question={question} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

  return(
  <table border="1px">
  <tr>
  <td>Question</td>
  <td>Teaming Stages</td>
  <td>Appears</td>
  <td>Frequency</td>
  <td>Question Type</td>
  <td>Role</td>
  <td>Required</td>
  <td>Conditions</td>
  <td>Mapping</td>
  </tr>
  {questions}
  </table>
    )
}