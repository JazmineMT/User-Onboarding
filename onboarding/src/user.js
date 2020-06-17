import React from 'react'

export default function User(details) {
console.log(details)
if(!details){
    return <h3>Working on fetching your details...</h3>
}
return (
    <div>
        <h2>{`${details.details.first_name}  ${details.details.last_name}`}</h2>
        <p>{details.details.email}</p>
        <img
        alt='post thumbnail'
        src={details.details.avatar}
        />
    </div>

)

}