import React from 'react'
import video from "../../img/Cieling_Flames_4K_Motion_Background_Loop (1).mp4"
import TopMenu from '../TopMenu/TopMenu';

export default function VideoBackground() {
    return (
        <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
        <TopMenu/>
    </video>
    )
}