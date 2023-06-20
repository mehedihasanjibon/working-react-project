import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Noakhali" special="bivag"></District>
      <District name="Bramonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="moyna and moti"></District>
    </div>
  );
}

function LoadPost(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1> Posts: {posts.length}</h1>
      {
        posts.map(post => <Post 
          post={post}
          key={post.id}
        ></Post>)
      }
    </div>
  )
}

function Post(props){
  const {title, body} = props.post
  return(
    <div style={{backgroundColor: 'lightgray' , padding: '20px', margin: '20px', border: '4px solid salmon' , borderRadius: '10px'}}>
      <h2> Title: {title}</h2>
      <p> Body: {body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightblue',
  padding: '20px',
  borderRadius: '20px',
  margin:'20px'
}

function District(props){
  const [power, setPower] =  useState(1);

  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }

  return(
    <div style={districtStyle}>
      <h2> Name: {props.name}</h2>
      <p> Specialty: {props.special}</p>
      <h4> Power: {power}</h4>
      <button onClick={boostPower}> Boost The Power </button>
    </div>
  )
}

export default App;
