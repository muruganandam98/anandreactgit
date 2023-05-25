import React from 'react';



/* function Employee(props) {
return (
<div>
<h1>hello, {props.name}</h1>
<h1>your Emp ID: {props.empid}</h1>
<Employee></Employee>
</div>
)

} */

class Employee extends React.Component{
render()
{
  return(
<div>
<h1>hello, {this.props.name}</h1>
<h1>your Emp ID: {this.props.empid}</h1>
<Employee></Employee>
</div>

  )
}

}






export default Employee;

