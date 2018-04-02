
import React from 'react';
import { gql, graphql } from 'react-apollo';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from './sidebar.styled';

 

const AddPerson = ({ mutate }) => {

  const valuesForm = {};
  const handleChange = (e) => {
     valuesForm[e.target.name]=e.target.value;
     //console.log('valuesForm', valuesForm);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // validation //
    let isValid = true;
    if (!valuesForm.name   && !valuesForm.email  && !valuesForm.address && !valuesForm.age ) {
      isValid = false;
    }  
  
    if (isValid) {
      var err = { };
      const {  name, email, address, age } = valuesForm;
      
      mutate({ 
        variables: { name: name, address: address, email: email, age: age  },
        refetchQueries: [ { query:  gql`
        query UserList {
          persons {
            id
            name
            address
            email
            age
          }
        }
        ` }]
      }).then( res => {
        
        document.getElementById("addForm").reset();
      });
    }
    else {
      console.log ('Please fill fields');
    }

  }
  
  const form = (
    <form id='addForm' onSubmit={handleSubmit}>

      <Container>Add contact</Container>
       <Container>
        <TextField
         name="name"
         onChange={handleChange}
         id="name"
        hintText="Name"
        floatingLabelText="Name"
       /> 
      </Container>
      <Container>
        <TextField
         name="email"
         onChange={handleChange}
         id="email"
        hintText="email"
        floatingLabelText="email"
       /> 
      </Container>
      <Container>
        <TextField
         name="address"
         onChange={handleChange}
         id="address"
        hintText="address"
        floatingLabelText="address"
       /> 
      </Container>
      <Container>
        <TextField
         name="age"
         onChange={handleChange}
         id="age"
        hintText="age"
        floatingLabelText="age"
       /> 
      </Container>
      <Container>
      <RaisedButton label="Add Contact" primary={true}  type="submit"  />
       
      </Container>
    </form>
  );

return (

  <div>
    {form}
  </div>

  );
};

const AddPersonMutation = gql`
  mutation addPerson($name: String!,  $email: String, $address: String, $age: String) {
    addPerson(name: $name, email: $email, address: $address, age: $age) {
      id
      name
      email
      address
      age
    }
  }
`;
const AddPersonWithMutation = graphql(
  AddPersonMutation
)(AddPerson);

export default AddPersonWithMutation;
