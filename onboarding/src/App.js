import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import axios from 'axios'
import * as Yup from 'yup'
import formSchema from './Validation/formSchema'
import User from './user'

const initailFormValues = {
  first_name: '',
  last_name:'',
  email: '',
  password: '',
  terms: false,
}

const initailFormErrors ={
  name: '',
  email: '',
  password: '',
  terms: '',
}
 
const initialDisabled = false 
const initailUsers = []

function App() {
const [values , setValues] = useState(initailFormValues)
const [formErrors , setFormErrors] = useState(initailFormErrors)
const [users , setUsers] = useState(initailUsers)
const [disabled, setDisabled] = useState(initialDisabled)



const getUsers = () =>{
  axios.get('https://reqres.in/api/users')
  .then( response =>{
    setUsers(response.data.data)
   
  })
  .catch(err => {
    debugger
  })
}

const postNewUser = newUser =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then(response =>{
      setUsers([...users, response.data])
      debugger
      console.log(users)
      console.log(response.data)
      
    })
    .catch(err =>{
     debugger
    })
    .finally(()=>{
      setValues(initailFormValues)
    })
}



const onInputChange = evt =>{
  const {name , value} = evt.target
  Yup
  .reach(formSchema, name)
  
  .validate(value)
  
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    });
  })
 
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0] 
    })
  })
    
  setValues({
    ...values,
    [name]:value,
    
  })

}

const onSubmit = evt =>{
  evt.preventDefault()
  const newUser = {
    first_name: values.first_name,
    last_name:values.last_name,
    email: values.email,
    password:values.password,
    terms:Object.keys(values.terms).filter(checked => 
      (values.terms === true))
  }
  
  postNewUser(newUser)
  debugger
}

useEffect(() =>{
  getUsers()
},[])


const onCheckboxChange = evt =>{
    const{name , checked} = evt.target
    setValues({
      ...values,
        [name]:checked

    })
}

useEffect(() => {
  formSchema.isValid(values).then(valid => {
    setDisabled(!valid);
  })
}, [values])


  return (
    <div className="App">
     <Form 
     values={values} 
     onChange={onInputChange} 
     onSubmit={onSubmit}
     onCheckboxChange={onCheckboxChange}
     disabled={disabled}
     errors={formErrors}
     />

     {
       users.map(user => {
         return (
           <User keys={user.id} details={user} />
         )
       })
     }
    </div>
  );
}

export default App;
