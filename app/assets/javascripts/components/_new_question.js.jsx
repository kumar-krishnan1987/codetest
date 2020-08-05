const NewQuestion = (props) => {
  
    let formFields = {}
 
    return(
    
      <div> 
        <input type="text" ref={input => formFields.question = input} placeholder='Enter the question'/>
        <input ref={input => formFields.teaming_stages = input} placeholder='Enter the teaming stages' />
         <input ref={input => formFields.appears = input} placeholder='Enter an appears'/>
        <input ref={input => formFields.frequency = input} placeholder='Enter the frequency' />
         <input ref={input => formFields.question_type = input} placeholder='Enter the question type'/>
        <input type="select" ref={input => formFields.role = input} placeholder='Enter the role' />
         <input ref={input => formFields.required = input} placeholder='Enter the required'/>
        <input ref={input => formFields.conditions = input} placeholder='Enter the conditions' />
         <input ref={input => formFields.mapping = input} placeholder='Enter the mapping'/>
        <button onClick={ () => props.handleFormSubmit(formFields.question.value, formFields.teaming_stages.value,formFields.appears.value,formFields.frequency.value,formFields.question_type.value,formFields.role.value,formFields.required.value,formFields.conditions.value,formFields.mapping.value,)}>Submit</button>
      </div>
    )
}