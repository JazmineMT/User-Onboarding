import * as Yup from 'yup'



const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    first_name: Yup
      .string()
      .min(2, "Name must be at least 2 characters long.")
      .required("Name is Required"),
    last_name: Yup
      .string()
      .min(2, "Name must be at least 2 characters long.")
      .required("Name is Required"),
    password: Yup
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .required("Password is Required"),
    terms: Yup
      .boolean()
      .oneOf([true], "Must Accept Term and Conditions"),
  })
  
  export default formSchema