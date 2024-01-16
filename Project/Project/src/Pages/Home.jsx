 import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
 
 
 function Home(){
    const [isShowInfo, setIsShowInfo]=useState(false);
    const navigate= useNavigate();
    let user=JSON.parse(localStorage.getItem("User")); 
    if(user.length != 0)
        user=user[0];

    function logOutFunc(){
        localStorage.removeItem("User");
        navigate("/login");
    }

    function showInfo(){
        setIsShowInfo(true)
    }

    function todos(){
        navigate("./todos");

    }


 

    return(<>
         <h1>Home!!</h1>
          <button onClick={logOutFunc}>LogOut</button>
          <button>Albums</button>
          <button>Posts</button>
          <button onClick={todos}>Todos</button>
          <button onClick={showInfo}>Info</button>
          {isShowInfo &&
            <form>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>User Name: {user.username}</p>
                <p>User Email: {user.email}</p>
                <p>User Adress:</p>
                <p>street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
                <p>User Geo</p>
                <p>Lat: {user.address.geo.lat}</p>
                <p>Lng: {user.address.geo.lng}</p>
                <p>Phone: {user.phone}</p>
                <p>website: {user.website}</p>
                <p>Company:</p>
                <p>Name: {user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>Bs: {user.company.bs}</p>
            </form>
            
            }
            
        </>) 
  };
  export default  Home;

