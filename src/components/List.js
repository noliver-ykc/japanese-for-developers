import { React } from 'react'
import data from "./ListData.json"

function List(props) {
    //create a new array by filtering the original array
    let noResults = ""
    const filteredData = data.filter((el) => {

        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input (made lowercase)
        else {
          return el.eng.toLowerCase().includes(props.input)
        // if theres no matching search results
        }
        //return noResults = "no results"

    })
    return (
        <>
            <table id='results'>
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Japanese</th>
                        <th>Romanji</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id} >
                            <td>{item.eng}</td>
                            <td>{item.jpn}</td>
                            <td>{item.romanji}</td>
                        </tr>
                    ))}
                    <p>{noResults}</p>
                </tbody>

            </table>
        </>

    )
}

export default List
