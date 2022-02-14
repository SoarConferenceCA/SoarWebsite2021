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
                <div className="my-16 md:my-24 mb-4 px-8 grid place-items-center">
                    <div className="grid place-items-center">
                        <h3 className="text-3xl md:text-5xl font-bold font-fat my-8">
                            LD Applications are now closed
                        </h3>
                        <div>
                            <button className="mt-2 mr-2 px-4 py-4 rounded border-2 border-primary
                                               bg-red-50 hover:bg-red-100 text-primary font-bold
                                               text-lg md:text-2xl transition transform hover:scale-125">
                                <a
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1iAg_Ur6ysIUY8HM5WA3ZST8D-212GP1E-_Sm_vteq6I/edit?fbclid=IwAR3Nx7kBS0YYndd4o4f1pwered_Q77bh6nvc-5oZqlAU3ktjPlsv7ZjCZ4Y#gid=0"
                                    >
                                    LD Interview timetable can be found here.
                                </a>
                            </button>
                        </div>
                        {/* <div className="mx-auto">
                            <button className="mt-2 mr-2 px-2 sm:px-4 py-2 sm:py-3 rounded border-2 border-primary 
                                               bg-red-50 hover:bg-red-100 text-primary font-bold text-lg md:text-2xl mx-auto transition transform
                                               hover:scale-125">
                                <a className="font-bold"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1iAg_Ur6ysIUY8HM5WA3ZST8D-212GP1E-_Sm_vteq6I/edit?fbclid=IwAR3Nx7kBS0YYndd4o4f1pwered_Q77bh6nvc-5oZqlAU3ktjPlsv7ZjCZ4Y#gid=0">
                                    LD Interview timetable can be found here
                                </a>
                            </button>
                        </div> */}
                    </div>
                </div>
            </NavBar>
        </div>
    )
}
