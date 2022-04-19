import NavBar from '../../components/NavBar';
import LoadingDiv from '../../components/LoadingDiv';
import { useCallback, useState } from 'react';
import Link from 'next/link';

export default function DelegateApplication({ links }) {
    const [ isLoading, setIsLoading ] = useState(true);

    const whenLoadedCallback = useCallback( () => {
        setIsLoading(false);
    }, [ setIsLoading ]);

    return (
        <div>
            <NavBar links={links} overriddenRoute="/apply">

                <div className="mx-4 py-4">
                    <Link href="/apply">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary hover:text-si-green cursor-pointer transition transform duration-100 hover:scale-150"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}>
                            
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                </div>

                <div className="p-8 flex justify-center">
                    <h1 className="text-4xl">
                        Deadline extended to April 23 @ 11:59pm
                    </h1>
                </div>

                <div className="p-8 flex justify-center">

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfiNXokOAKsMmOj9NwithDAgbExz9NAufsLXiKOMstRUhITzA/viewform?fbclid=IwAR33Z71QC8eRnzfgxAzfNGUfEG-fY5lujbY5l9dFDO1myDsy-vytUVseuw4"
                        target="_blank">
                        <h1 className="underline text-primary hover:text-si-green transform transition duration-100 hover:scale-110 text-3xl font-nuno font-fat">
                            Fill out the Delegate application here!
                        </h1>
                    </a>
                </div>

                <div className="my-4 w-full h-100vh grid place-items center">
                    { 
                        isLoading ? (
                            <div className="bg-beige mx-auto w-3/4vw h-100vh">
                                <LoadingDiv />
                            </div>
                        ) : <></>
                    }

                    <div className="mx-auto w-95vw md:w-3/4vw lg:w-3/4vw xl:w-960px h-95vh">
                        <iframe 
                            onLoad={whenLoadedCallback}
                            className="w-full h-full"
                            src="https://drive.google.com/file/d/1opN81mEZ-Xk0-l9sJW_gzD1ZK4-IehcI/preview" 
                            />
                    </div>
                </div>
            </NavBar>
        </div>
    )
}