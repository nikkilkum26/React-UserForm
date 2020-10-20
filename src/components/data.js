import React,{useState,useEffect} from 'react'
import { Table } from 'reactstrap';
import axios from 'axios';

const Data=()=>{
    const[userList,setUserList] =useState([])

    useEffect(() => {
        axios.get("https://userdetialsserver.herokuapp.com/read").then((response) => {
          console.log(response)
          setUserList(response.data);
        })
      }, [])

      return(
          <div>
              <br/><br/><br/>
              <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Married Status</th>
          <th>Favourite Food</th>
          <th>Favourite Color</th>
        </tr>
      </thead>
      <tbody>
          {userList.map((e,i)=>{
              return(
              <tr>
          
          <td key={i}>{e.Name}</td>
          <td key={i}>{e.Email}</td>
          <td key={i}>{e.Country}</td>
          <td key={i}>{e.State}</td>
          <td key={i}>{e.City}</td>
          <td key={i}>{e.Address}</td>
          <td key={i}>{e.Gender}</td>
          <td key={i}>{e.Married}</td>
          <td key={i}>{e.Food}</td>
          <td key={i}>{e.Color}</td>    
            </tr>
              )
          })}
        
      </tbody>
    </Table>
  
          </div>
      )

}

export default Data;