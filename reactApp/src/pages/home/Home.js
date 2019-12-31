import React from 'react'
import {getImages} from '../../services/Services.js'

export default function Home() {
    const imgs = getImages()
    console.log(imgs)
    return (
        <div>
            Hi
        </div>
    )
}
