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

function App() {
const [values , setValues] = useState(initailFormValues)
const [errors , setErrors] = useState(initailFormErrors)
const [users , setUsers] = useState([])
const [disabled, setDisabled] = useState(initialDisabled)



const getUsers = () =>{
  axios.get('https://reqres.in/api/users')
  .then( response =>{
    setUsers(response.data.data)
    debugger
  })
  .catch(err => {
    debugger
  })
}
useEffect(() =>{
  getUsers()
},[])

const postNewUser = newUser =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then(response =>{
      setUsers([...users, response.data])
      debugger
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
  setValues({
    ...values,
    [name]:value,
    
  })
  debugger

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
  debugger
  postNewUser(newUser)
}

const onCheckboxChange = evt =>{
    const{name , checked} = evt.target
    setValues({
      ...values,
        [name]:checked

    })
}

console.log(users)
  return (
    <div className="App">
     <Form 
     values={values} 
     onChange={onInputChange} 
     onSubmit={onSubmit}
     onCheckboxChange={onCheckboxChange}
     disabled={disabled}
     errors={errors}
     />

     {
       users.map(user => {
         return (
           <User  details={user} />
         )
       })
     }
    </div>
  );
}

export default App;
