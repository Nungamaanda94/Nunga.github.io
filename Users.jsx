import { render } from '@testing-library/react';
import React, { Component } from 'react';


export default  class Users extends Component{
     state = {
        myArr:[2,3,5,8,9],
        list : [ 'Ron', 'Asanda', 'Lusani' ],
         
        list: [{name: 'Ron',
                surname: 'Roji',
                Location: "Beta Zone 4",
                Age: '20'},
                {
                name: 'Mike',
                surname: 'Sana',
                Location: "Beta Zone 6",
                Age: '29'},
               {
                name: 'Maanda',
                surname: 'Nunga',
                Location: "Seshego Zone 3",
                Age: '20'},

        ]

         }

render () {
       return (
        <ul>
        { this.state.lists.map( element => <li> { element.name} </li>) }
        { this.state.lists.map( element => <li> { element.surname} </li>) }
        { this.state.lists.map( element => <li> { element.location} </li>) }
        { this.state.lists.map( element => <li> { element.age} </li>) }
        { this.state.lists.map( element => <li> { this.orderByAge(element.age)} </li>) }
        </ul>
       )
}

filterAge = () => {
    const agelist = this.state.list.map(age => {
        return age.orderByAge;
    })
}

}
