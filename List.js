import React from 'react'

export default function List(props) {

  // use map function to list all the types from species and make the event for cliking 
  return (
    <ul>
        {props.species.map((specie) => {
          return(
            //  Write your code below
            <li></li>
          )
        })}
    </ul>
  )
}
