import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BehindImageThing from '../components/BehindImageThing';


export default function BetterTestimonials({ testimonials }) {
    const [ emblaRef, emblaApi ] = useEmblaCarousel({ loop: true, draggable: false, skipSnaps: false }, [ Autoplay({ delay: 8000 }) ]);
    const [ scrollSnaps, setScrollSnaps ] = useState([]);
    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const scrollPrev = useCallback( () => {
        emblaApi && emblaApi.scrollPrev();
    }, [ emblaApi ]);

    const scrollNext = useCallback( () => {
        emblaApi && emblaApi.scrollNext();
    }, [ emblaApi ]);

    useEffect( () => {
        if (!emblaApi) return;
        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [ emblaApi, setSelectedIndex ]);

    useEffect( () => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("reInit", () => {
            setScrollSnaps(emblaApi.scrollSnapList());
        });
    }, [ emblaApi, setScrollSnaps ]);

    return (
        <div className="my-12">
            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex w-full h-full">
                    {
                        testimonials.map( (testimonial, idx) => (
                            <div key={idx} className="w-full h-full flex-none grid grid-cols-1 md:grid-cols-2 space-x-8">
                                <div className="w-full">
                                    <BehindImageThing direction="left">
                                        <div className="w-4/5 h-4/5 absolute bottom-0 right-0">
                                            <img src={testimonial.image} className="max-w-full max-h-full" />
                                        </div>
                                    </BehindImageThing>
                                </div>

                                <div className="w-full h-full">
                                    <div className="flex flex-col">
                                        <h5>
                                            <span className="text-3xl text-black font-bold border-b-2 border-black">
                                                Stories
                                            </span>
                                        </h5>

                                        <div className="m-12 p-8 bg-white flex-1 grid grid-cols-1 place-items-center">
                                            <p className="text-md text-black">
                                                { testimonial.sobStory }
                                            </p>

                                            <div className="mt-4 md:mt-none w-full">
                                                <h5 className="text-lg text-black">{ testimonial.name }</h5>
                                                <p className="text-md text-gray-500">
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

            <div className="mt-3">
                <div className="flex flex-row items-center justify-center flex-nowrap">
                    <span className="w-6 mr-4 inline-block">
                        <button
                            className="text-gray-500 hover:text-primary"
                            onClick={scrollPrev}>
                            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
                        </button>
                    </span>

                    <span className="flex items-center justify-center space-x-2">
                        {
                            scrollSnaps.map( (_, idx) => (
                                <div
                                    className={`w-3 h-3 rounded-full ${idx === selectedIndex ? "bg-primary" : "bg-gray-400"}`}
                                    key={idx}
                                />
                            ))
                        }
                    </span>

                    <span className="w-6 ml-4 inline-block">
                        <button
                            className="text-gray-700 hover:text-primary"
                            onClick={scrollNext}>
                                <FontAwesomeIcon size="lg" icon={faArrowRight} />
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}