import React from "react";
import {useState} from 'react';
import './Newone.css'
function Newone(){
    const x=[
        {
            name:"Abc",
            image:"https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
        },
        {
            name:"Xyz",
            image:"https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
        },
        {
            name:"lakshmi",
            image:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        },
        {
            name:"nagaraju",
            image:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        },
        {
            name:"Xyz",
            image:"https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
        },
        {
            name:"lakshmi",
            image:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        },
        {
            name:"nagaraju",
            image:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        },
        {
            name:"Xyz",
            image:"https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
        },
        {
            name:"lakshmi",
            image:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        },
        {
            name:"nagaraju",
            image:"https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
        },
    ]
    const [data,setData]=useState(x)
    return(
    <div className="name">
    {
      x.map((obj)=>{
        return(
        <div className="cards">
        <div><h3>{obj.name}</h3></div>
        <img className="image" src={obj.image}></img>
        </div>
        )
        })
        
    }
    </div>
  
    )
}
export default Newone;