import NavBar from '../../components/NavBar';
import LoadingDiv from '../../components/LoadingDiv';
import { useCallback, useState } from 'react';
import Link from 'next/link';

export default function Apply({ links }) {
    const [ isLoading, setIsLoading ] = useState(true);

    const whenLoadedCallback = useCallback( () => {
        setIsLoading(false);
    }, [ setIsLoading ] )


    return (
        <div>
            <NavBar links={links}>
                <div className="grid h-75vh place-items-center">
                    <div className="grid w-full h-full place-items-center md:grid-cols-2 text-2xl">
                        <div>
                            <Link href="/apply/delegate">
                                <button className="transform transition duration-100 hover:scale-110 mt-2 mr-2 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary bg-red-50 hover:bg-red-100 text-primary font-bold">
                                    Register As a Delegate
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Link href="/apply/volunteer">
                                <button className="transform transition duration-100 hover:scale-110 mt-2 mr-2 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary bg-red-50 hover:bg-red-100 text-primary font-bold">
                                    Apply as a Volunteer
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </NavBar>
        </div>
    )
}
