import { Component } from 'react';
import GalleryYear from '../components/GalleryYear';
import { galleryData } from '../data/gallerydata';
import NavBar from '../components/NavBar';
import grads from '../styles/grads.module.css';

export default class Gallery extends Component {
    state = {
        chunkSize: 2,
        topSize: '72vw'
    }

    componentDidMount() {
        window.addEventListener('resize', this.recalculateChunks);
        this.recalculateChunks();
    }

    recalculateChunks = () => {
        const screenSize = window.innerWidth;
        if (screenSize >= 1024) {
            this.setState({ chunkSize: 6, topSize: '72vw'});
        } else if (screenSize >= 768) {
            this.setState({ chunkSize: 4, topSize: '72vw'});
        } else {
            this.setState({ chunkSize: 2, topSize: '84vw'});
        }
    }

    render() {

        let colors = [
            grads.cyanRed75,
            grads.redLime25,
        ];

        return (
            <div>
                <NavBar links={this.props.links}>
                    <div className="w-full h-full bg-si-beige">
                        <div className="pt-20 flex justify-center">
                            <div>
                                <h1 className="text-6xl font-fat text-center font-bold text-black">
                                    Gallery!
                                </h1>
                                <h5 className="mt-3 text-2xl font-bold font-lato text-gray-600 text-center max-w-w360">
                                    Explore our past conferences since 2017!    
                                </h5>
                            </div>
                        </div>

                        <div className={`mt-12 py-2 ${grads.pinkPurple25}`}>
                            <GalleryYear left={false} chunkSize={this.state.chunkSize} year={galleryData[0]} carouselWidth={this.state.topSize}/>
                        </div>
                    </div>
                </NavBar>

    
                <div className="">
                    {
                        galleryData.slice(1).map( (year, idx) => <GalleryYear left={idx % 2 == 0} key={idx} background={colors[idx]} chunkSize={this.state.chunkSize} year={year} carouselWidth="84vw" /> )
                    }
                </div>
    
            </div>
        )
    }
}
