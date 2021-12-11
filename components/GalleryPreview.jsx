import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export default function GalleryPreview({ previews }) {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true, skipSnaps: false}, [AutoPlay( { delay: 4000 } )])
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ scrollSnaps, setScrollSnaps ] = useState([]);

    const scrollTo = useCallback( (idx) => emblaApi && emblaApi.scrollTo(idx), [emblaApi] );
    
    const scrollPrev = useCallback( () => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [ emblaApi ]);
    const scrollNext = useCallback( () => {
        if (emblaApi) emblaApi.scrollNext();
    }, [ emblaApi ]);

    const onSelect = useCallback( () => {
        if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [ emblaApi, setSelectedIndex ]);

    useEffect( () => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [ emblaApi, onSelect ]);

    useEffect( () => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('reInit', () => setScrollSnaps(emblaApi.scrollSnapList()));
    }, [ emblaApi, setScrollSnaps ])

    return (
        <div className="m-12">
            <div className="flex flex-no-wrap px-4">
                <div className="self-stretch flex justify-center mr-2">
                    <button
                            className="text-gray-700 hover:text-primary transform transition duration-200 hover:scale-150"
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
                            previews.map( (photo, idx) => (
                                <div key={idx} className="relative flex flex-none w-full mx-10">
                                    <img src={photo} className="max-w-full max-h-full" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="self-stretch flex justify-center ml-2">
                    <button
                        className="text-gray-700 hover:text-primary transform transition duration-200 hover:scale-150"
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
                            className={`w-3 h-3 rounded-full ${idx === selectedIndex ? "bg-primary" : "bg-gray-400" }`}
                            key={idx}
                            onClick={() => scrollTo(idx)}
                        />
                    ))
                }
            </div>
        </div>
    )
}