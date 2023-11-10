
function Employee(props){
    return(
        <div>
            <h3>Employee {props.name}</h3>
            <span>{props.role ? props.role : 'No role'}</span>
        </div>
    )
}

export default Employee;