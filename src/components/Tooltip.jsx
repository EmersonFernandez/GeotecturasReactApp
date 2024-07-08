import React from 'react'

export default function Tooltip({data}) {
    return (
        <>
            <div className='tooltip'>{data.name}</div>
        </>
    )
}
