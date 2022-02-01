import { Component, useEffect, useState } from 'react';
import YearCarousel from './YearCarousel';
import LoadingDiv from './LoadingDiv';
import gold from '../styles/gold.module.css';

export default function GalleryYear({ chunkSize, year, left=true, background='', carouselWidth='88vw'}) {
    let [ inBrowser, setInBrowser ] = useState(false);

    useEffect( () => {
        setTimeout( () => setInBrowser(true), 0);
    }, [ setInBrowser ]);

    return (
        <div className={`py-12 ${background}`}>
            <div className="flex justify-center px-4">
                <h3 className="text-4xl font-ara text-black font-bold">
                    { `SOAR ${year.year}`}
                </h3>
            </div>

            <div className={`mt-2 w-8/12 ${left ? 'mr-auto' : 'ml-auto'} ${gold.goldFoil}`} />

            {
                inBrowser ? 
                    <YearCarousel chunkSize={chunkSize} year={year} carouselWidth={carouselWidth} /> 
                : <LoadingDiv />
            }
        </div>
    );
}

// export default class GalleryYear extends Component {
//     state = {
//         inBrowser: false
//     }

//     componentDidMount() {
//         setTimeout( () => this.setState({ inBrowser: true }), 0);
//     }
    
//     render() {
//         const { chunkSize, year } = this.props;
//         return (
//             <div className={`py-12 ${this.props.background}`}>
//                 <div className="flex justify-center px-4">
//                     <h3 className="text-3xl font-lato text-black font-bold">
//                         { `SOAR ${year.year}`}
//                     </h3>
//                 </div>
//                 <div className={`mt-2 w-8/12 ${this.props.left ? 'mr-auto' : 'ml-auto'} ${gold.goldFoil}`} />
                
//                 {
//                     this.state.inBrowser ? <YearCarousel chunkSize={chunkSize} year={year} carouselWidth={this.props.carouselWidth}/> : <LoadingDiv />
//                 }
//             </div>
//         )
//     }
// }
