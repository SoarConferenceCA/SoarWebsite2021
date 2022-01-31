import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function BetterTestimonials({ testimonials }) {
    const autoplay = useRef(
        Autoplay({ delay: 4000 })
    );
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true, draggable: false, skipSnaps: false }, [ autoplay.current ]);
    const [ scrollSnaps, setScrollSnaps ] = useState([]);
    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const scrollPrev = useCallback( () => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        autoplay.current.reset();
    }, [ emblaApi ]);

    const scrollNext = useCallback( () => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        autoplay.current.reset();
    }, [ emblaApi ]);

    useEffect( () => {
        if (!emblaApi) return;
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            autoplay.current.reset();
        });
    }, [ emblaApi, setSelectedIndex ]);

    useEffect( () => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("reInit", () => {
            setScrollSnaps(emblaApi.scrollSnapList());
            autoplay.current.reset();
        });
    }, [ emblaApi, setScrollSnaps ]);

    return (
        <div className="my-12">

            <div className="grid sm:grid-cols-2 place-items-center space-x-4">
                <h5>
                    <span className="text-3xl text-si-pink font-bold border-b-2 border-si-pink">
                        Stories
                    </span>
                </h5>
            
                <div className="w-full flex justify-center">
                    <div className="mt-3">
                        <div className="flex flex-row items-center justify-center flex-nowrap">
                            <span className="w-6 mr-4 inline-block">
                                <button
                                    className="text-si-purple hover:text-primary transform transition duration-200 hover:scale-170"
                                    onClick={scrollPrev}>
                                    <FontAwesomeIcon size="lg" icon={faArrowLeft} />
                                </button>
                            </span>

                            <span className="flex items-center justify-center space-x-2">
                                {
                                    scrollSnaps.map( (_, idx) => (
                                        <div
                                            className={`w-3 h-3 rounded-full ${idx === selectedIndex ? "bg-primary" : "bg-si-purple"}`}
                                            key={idx}
                                        />
                                    ))
                                }
                            </span>

                            <span className="w-6 ml-4 inline-block">
                                <button
                                    className="text-si-purple hover:text-primary transform transition duration-200 hover:scale-170"
                                    onClick={scrollNext}>
                                        <FontAwesomeIcon size="lg" icon={faArrowRight} />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex w-full h-full">
                    {
                        testimonials.map( (testimonial, idx) => (
                            <div key={idx} className="mt-12 w-full h-full flex-none">
                                <div className="w-full h-full">
                                    <div className="flex flex-col">
                                        {/* <h5>
                                            <span className="text-3xl text-white font-bold border-b-2 border-black">
                                                Stories
                                            </span>
                                        </h5> */}

                                        <div className="flex-1 grid grid-cols-1 place-items-center">
                                            <p className="text-md text-si-tpink font-nun">
                                                { testimonial.sobStory }
                                            </p>

                                            <div className="mt-4 md:mt-none w-full">
                                                <h5 className="text-lg text-si-lpink">{ testimonial.name }</h5>
                                                <p className="text-md text-si-lpink">
                                                    { `${testimonial.position} ${testimonial.year}` }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}