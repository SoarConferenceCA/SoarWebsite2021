import ReactPlayer from 'react-player/file';
import { useState, useCallback, useEffect } from 'react';

export function DelegateTestimonials() {
    const [ hideVideo, setHideVideo ] = useState(true);

    useEffect( () => {
        setHideVideo(false);
    }, []);

    const handleContextMenu = useCallback( (ev) => {
        ev.preventDefault();
    });

    return hideVideo ? <></> : (
        <>
            <ReactPlayer
                className="max-w-w1000"
                playing={false}
                controls={true}
                url="/assets/soar_delegate_testimonials.mp4"
                width="80%"
                height="100%"
                config={
                    {
                        file: {
                            attributes: {
                                controlsList: "nodownload"
                            }
                        }
                    }
                }
                onContextMenu={ handleContextMenu } />
        </>
    )
}