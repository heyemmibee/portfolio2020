import React, { Component } from "react";
import "./index.css";

const Square = (props) => {
return ( 
<div><h3>{props.title}</h3> <h2>{props.descr}</h2>   
    <div class="container">
    <div class="square1"></div>
    <div class="square2"></div>
    </div>
</div>
);
}

export default Square;