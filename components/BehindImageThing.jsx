import { useRef, useEffect } from 'react';

export default function BehindImageThing({ direction, background, children, classes='', style={} }) {
    const s1 = useRef();
    const s2 = useRef();
    const s3 = useRef();
    
    useEffect( () => {
        s2.current.style.height = `${s1.current.offsetHeight - 10}px`;
        s2.current.style.width = `${s1.current.offsetWidth - 10}px`;

        s3.current.style.height = `${s2.current.offsetHeight}px`;
        s3.current.style.width = `${s2.current.offsetWidth}px`;

        s1.current.addEventListener('resize', (ev) => {
            s2.current.style.height = `${s1.current.offsetHeight - 10}px`;
            s2.current.style.width = `${s1.current.offsetWidth - 10}px`;

            s3.current.style.height = `${s2.current.offsetHeight}px`;
            s3.current.style.width = `${s2.current.offsetWidth}px`;
        });
    }, [ s1, s2 ])

    return (
        <div className={`w-full h-full px-4 flex ${classes}`} style={style} ref={s1}>
            <div className="relative w-full h-full">
                <div className={`absolute ${direction}-0 ${background}`} ref={s3}/>
            </div>

            <div className="relative w-full h-full -ml-100" ref={s2}>
                {children}
            </div>
        </div>
    )
}
