import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Crud from './Form';
import View from './Table';
import { useState } from 'react';

function App() {

  const [record,setRecord] = useState([]);
  const [single,setSingle] = useState({});

  const recordInsert = (name,email,password,iseditid) => {
      let id = Math.floor(Math.random() * 10000);
      let obj = {id,name,email,password};
      if(iseditid){
          let all = [...record];
          let up = all.map((val)=>{
            if(val.id == iseditid){
              return {
                ...val,
                name :name,
                email : email,
                password : password
              }
            }
            return val;
          })
          setRecord(up);
          alert("record update");
          
      }else{
        let all = [...record,obj];
        setRecord(all);
        alert("record successfully insert");
      }
      
  }

  const handleDelete = (id) => {
          let all = [...record];
          let deleteData = all.filter((val)=>{
            return val.id != id;
          })
          setRecord(deleteData);
          alert("Record Delete");
  }

  const handleEdit = (id) => {
     let all = [...record];
     let single = all.find(item => item.id == id);
     setSingle(single);
  }

  return (
      <center>
        <Crud
             recordInsert={recordInsert}
             single={single}
        />
        <br></br>
        <View
           record={record}
           handleDelete={handleDelete}
           handleEdit={handleEdit}
        />
      </center>
  );
}

export default App;
