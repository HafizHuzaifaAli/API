import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { fontWeight } from '@mui/system';

function App() {
  const [userObj,setUserObj] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/users').then((res)=>{
      console.log(res.data);  setUserObj(res.data)
    }).catch((err)=>console.log(err))
  },[])
  return (
    <Grid container sx={{padding: 3}} >
       <Grid container sx={{fontWeight: 'bold',fontSize: 30}}>
        <Grid item md={3}>ID</Grid>
        <Grid item md={3}>User Name</Grid>
        <Grid item md={3}>Email</Grid>
        <Grid item md={3}>Password</Grid>
        </Grid>
      {userObj.map((e,i)=>{
        return(
        <Grid key={i} container sx={{fontWeight: 'bold',fontSize: 20}}>
        <Grid item md={3}>{e._id}</Grid>
        <Grid item md={3}>{e.userName}</Grid>
        <Grid item md={3}>{e.email}</Grid>
        <Grid item md={3}>{e.password}</Grid>
        </Grid>)
      })}
    </Grid>
  );
}

export default App;
