import React from 'react'

export default function Form(props){
    const {values , onChange, onSubmit, onCheckboxChange, disabled,errors } = props


return (
    <form onSubmit={onSubmit}>
     <div>
        <h1>New User Sign-up</h1>
        <button disabled={disabled }>Submit</button>
        <div>
            <div>{errors.email}</div>
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>
        <label> First Name
            <input
            type='text'
            name='first_name'
            value={values.first_name}
            onChange={onChange}
            />
        </label>
        <label> Last Name
            <input
            type='text'
            name='last_name'
            value={values.last_name}
            onChange={onChange}
            />
        </label>
        <label> Email
            <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            />
        </label>
        <label> Password
            <input
            type='text'
            name='password'
            value={values.password}
            onChange={onChange}
            />
        </label>
        <label> Terms of Service
            <input
            type='checkbox'
            name='terms'
            value={values.terms}
            onChange={onCheckboxChange}
            />
        </label>




     </div>
    </form>
)
}
