import { Suspense, cloneElement, useEffect, useState } from 'react'
import { Footer } from '@pmndrs/branding'

function Ready({ setReady }) {
    useEffect(() => () => void setReady(true), [])
    return null
}

export default function IntoCity({ children }) {
    const [clicked, setClicked] = useState(false)
    const [ready, setReady] = useState(false)
    return (
        <>
            <Suspense fallback={<Ready setReady={setReady} />}>
                {cloneElement(children, { ready: clicked && ready })}
            </Suspense>
            <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
                <div className="stack">
                    <a href="#" onClick={() => setClicked(true)}>
                        {!ready ? 'loading' : 'click to continue'}
                    </a>
                </div>
            
            </div>
        </>
    )
}
