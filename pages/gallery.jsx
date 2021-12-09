import { Component } from 'react';
import GalleryYear from '../components/GalleryYear';
import { galleryData } from '../data/gallerydata';


export default class Gallery extends Component {
    state = {
        chunkSize: 2
    }

    componentDidMount() {
        window.addEventListener('resize', this.recalculateChunks);
        this.recalculateChunks();
    }

    recalculateChunks = () => {
        const screenSize = window.innerWidth;
        if (screenSize >= 1024) {
            this.setState({ chunkSize: 6});
        } else if (screenSize >= 768) {
            this.setState({ chunkSize: 4});
        } else {
            this.setState({ chunkSize: 2});
        }
    }

    render() {
        return (
            <div>
    
                <div className="mt-20 flex justify-center">
                    <div>
                        <h1 className="text-4xl text-center font-bold text-black">
                            Gallery!
                        </h1>
                        <h5 className="mt-3 text-lg text-gray-600 txt-center max-w-w360">
                            Explore our past conferences since 2017!    
                        </h5>
                    </div>
                </div>
    
                <div className="mt-12">
                    {
                        galleryData.map( (year, idx) => <GalleryYear key={idx} chunkSize={this.state.chunkSize} year={year} /> )
                    }
                </div>
    
            </div>
        )
    }
}
