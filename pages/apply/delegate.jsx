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
                        Deadline extended to June 2nd @ 11:59 pm
                    </h1>
                </div>

                <div className="p-8 flex justify-center">

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdM1DndK491zDiMvCjjbGN4MS2u26Dv7FSIB2V09r59YDOIyA/viewform?fbclid=IwAR1pGSiW19m4nIS7xDYNcBA9SNwWdMTB66sH78C6WOprwFvBckLq02pi9j0"
                        target="_blank">
                        <h1 className="underline text-primary hover:text-si-green transform transition duration-100 hover:scale-110 text-3xl font-nuno font-fat">
                            Fill out the Delegate application here!
                        </h1>
                    </a>
                </div>

            </NavBar>
        </div>
    )
}