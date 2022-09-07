import React from 'react'
import { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

function ChainExample() {
    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
    })
    // ...
   //nho clear animation;
    // useEffect(() => {
    //     return () => {
    //         api.stop();
    //     }
    // })
    return <animated.div style={styles}>I will fade in and out</animated.div>
}

export default ChainExample;
