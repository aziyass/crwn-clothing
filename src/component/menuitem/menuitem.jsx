import React from "react";
import './menuitem_s.scss';
import {withRouter} from 'react-router-dom'


function MenuItem({ title, imageUrl, size , history ,linkUrl , match }) {
    var style_sect = { backgroundImage: "url(" +  imageUrl  + ")" }
    var class_n=size+" menu-item"
    var click='${'+match+'}${'+linkUrl+'}'
    return (
        <div  className={class_n} onClick={()=> history.push(click)}>
            <div className="background" style={style_sect}></div>
            <div className="content">
                <h1 className="title"> {title.toUpperCase()} </h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )
}

export default  withRouter(MenuItem)