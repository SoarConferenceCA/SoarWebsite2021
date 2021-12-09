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

export default function GalleryYear({ chunkSize, year }) {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true, skipSnaps: false });
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ scrollSnaps, setScrollSnaps ] = useState([...Array(Math.ceil(year.photos.length / chunkSize))]);
    
    const scrollTo = useCallback( (idx) => emblaApi && emblaApi.scrollTo(idx), [emblaApi]);
    
    const scrollPrev = useCallback( () => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback( () => {
        if (emblaApi) emblaApi.scrollNext();
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
        <div className="my-12">
            <div className="flex justify-center px-4">
                <h3 className="text-2xl text-black font-bold">
                    { `SOAR ${year.year}`}
                </h3>
            </div>
            
            <div class="flex flex-nowrap px-4">
                <div className="self-stretch flex justify-center">
                    <button
                        className="text-gray-700 hover:text-pale-pink transform transition duration-200 hover:scale-150"
                        onClick={scrollPrev}
                        style={{width: '24px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {
                            chunkArray(year.photos, chunkSize).map( (photos, idx) => (
                                <div key={idx} className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10">
                                    <YearSlide chunkSize={chunkSize} images={photos} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="self-stretch flex justify-center">
                    <button
                        className="text-gray-700 hover:text-pale-pink transform transition duration-200 hover:scale-150"
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
                            className={`w-3 h-3 rounded-full ${idx === selectedIndex ? "bg-pale-pink" : "bg-gray-400" }`}
                            key={idx}
                            onClick={() => scrollTo(idx)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
