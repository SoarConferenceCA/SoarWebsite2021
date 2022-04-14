import ReactPlayer from 'react-player/youtube';
import { useState, useCallback, useEffect } from 'react';

export function DelegateTestimonials() {
    const [ hideVideo, setHideVideo ] = useState(false);

    useEffect( () => {
        setHideVideo(false);
    }, []);

    const handleContextMenu = useCallback( (ev) => {
        ev.preventDefault();
    });

    return hideVideo ? <></> : (
        <>
            <ReactPlayer
                className=" w-auto h-auto
                            js:w-80vw js:h-320
                            ys:h-ab10
                            xl:w-1000 xl:h-565
                            max-w-w80 xl:max-w-none"
                playing={false}
                controls={true}
                url="https://youtu.be/3Grodz4EszE"
                width=""
                height=""
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