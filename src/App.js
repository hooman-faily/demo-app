import { useState } from 'react';
import './App.css';
import Employee from './components/Employee'

function App() {
  const showEmployees =true;
  const [role, setRole] = useState();

  return (
    <div className="App">
      {showEmployees ? (
          <div>
            <input type='text' onChange = {(e) => {
              console.log(e.target.value)
              setRole(e.target.value)
            }} />
            <Employee name='Hooman' role ='Designer'/>
            <Employee name='Abby' role = {role}/>
            <Employee name='Josh'/>
          </div>
        ):(
          <p>you can't see the list</p>
        )
      }

    </div>
  );
}

export default App;
