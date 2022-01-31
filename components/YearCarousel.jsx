import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';
import YearSlide from './YearSlide';

function chunkArray(array, chunkSize) {
    return array.reduce( (nArray, item) => {
        if (nArray[nArray.length - 1].length === chunkSize) {
            nArray.push([]);
        }
        nArray[nArray.length - 1].push(item);
        return nArray;
    }, [[]]);
}

export default function YearCarousel({ chunkSize, year, carouselWidth='88vw' }) {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true, skipSnaps: false });
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ scrollSnaps, setScrollSnaps ] = useState([]);
    
    const scrollTo = useCallback( (idx) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);
    
    const scrollPrev = useCallback( () => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback( () => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        console.log('next pressed');
    }, [emblaApi]);

    const onSelect = useCallback( () => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect( () => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [ emblaApi, onSelect ]);

    useEffect( () => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("reInit", () => setScrollSnaps(emblaApi.scrollSnapList()));
    }, [emblaApi]);

    return (
        <>
            <div className="max-w-full grid place-items-center">
                <div className="flex flex-nowrap px-4">
                    <div className="self-stretch flex justify-center">
                        <button
                            className="mr-4 text-black hover:text-blue-500 transform transition duration-200 hover:scale-250 scale-170"
                            onClick={scrollPrev}
                            style={{width: '24px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-hidden" ref={emblaRef} style={{width: carouselWidth}}>
                        <div className="flex">                        {
                                chunkArray(year.photos, chunkSize).map( (photos, idx) => (
                                    <div key={idx} className="relative flex flex-none mx-10" style={{width: '88vw'}}>
                                        <YearSlide chunkSize={chunkSize} images={photos} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="self-stretch flex justify-center">
                        <button
                            className="ml-4 text-black hover:text-blue-500 transform transition duration-200 hover:scale-250 scale-170"
                            onClick={scrollNext}
                            style={{width: '24px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5 space-x-2">
                    {
                        scrollSnaps.map( (_, idx) => (
                            <button
                                className={`w-3 h-3 rounded-full ${idx === selectedIndex ? "bg-primary" : "bg-gray-500" }`}
                                key={idx}
                                onClick={() => scrollTo(idx)}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
