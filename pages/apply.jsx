import NavBar from '../components/NavBar';
import LoadingDiv from '../components/LoadingDiv';
import { useCallback, useState } from 'react';

export default function Apply({ links }) {
    const [ isLoading, setIsLoading ] = useState(true);

    const whenLoadedCallback = useCallback( () => {
        setIsLoading(false);
    }, [ setIsLoading ] )


    return (
        <div>
            <NavBar links={links}>
                <div className="my-4 w-full h-100vh grid place-items-center">
                    {       
                        isLoading ? (
                            <div className="bg-beige mx-auto w-3/4vw h-100vh">
                                <LoadingDiv />
                            </div>
                        ) : <></>
                    }
                    <div className="mx-auto w-95vw md:w-3/4vw lg:w-3/4vw xl:w-960px h-95vh">
                        <iframe onLoad={whenLoadedCallback} className="w-full h-full" src="https://drive.google.com/file/d/1f-kdLzTrjCVYPho-rONvY8mLV4M8xSzH/preview" />
                    </div>
                </div>
            </NavBar>
        </div>
    )
}
