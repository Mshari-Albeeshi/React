import React from 'react'

export default function Table(props) {

  // use map function to list all the details from species
    if (props.catDetails.length > 0) {
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Color</th>
                    <th>weight</th>
                </thead>
                <tbody>
                {props.catDetails.map((catDetail) => {
                    return (
                        //  Write your code below
                        <tr key={catDetails.name}>
                            <td>{catDetails.name}</td>
                            <td>{catDetails.age}</td>
                            <td>{catDetails.color}</td>
                            <td>{catDetails.weight}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    } else {
        return (<></>)
    }

}
