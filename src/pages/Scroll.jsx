import React, { Suspense } from 'react'
import './Scroll.css'
import Scene from '../components/Scene'
import { Tooltip } from 'react-tooltip'

export default function Scrolly() {
    return (
        <>
            <a id="not-clickable">◕‿‿◕</a>
            <Tooltip anchorSelect="#not-clickable">
                <button>You can't click me :(</button>
            </Tooltip>
            <a id="clickable">◕‿‿◕</a>
            <Tooltip anchorSelect="#clickable" clickable>
                <button>You can click me!</button>
            </Tooltip>
        </>
    )
}
