//on hover turn blue
//pass component as a prop: *passing an icon, *pass it styling, pass it text 
// when you have your own options, you have to pass an argument for your function
//use es6 to destructure
// evreything in react as a component with capital letter


import React from "react";
import "./SidebarOption.css";

function SidebarOption({active, text, Icon}) {
    return (
        <div className= {`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;