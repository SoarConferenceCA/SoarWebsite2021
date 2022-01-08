import { Component } from 'react';
import YearCarousel from './YearCarousel';
import LoadingDiv from './LoadingDiv';

export default class GalleryYear extends Component {
    state = {
        inBrowser: false
    }

    componentDidMount() {
        setTimeout( () => this.setState({ inBrowser: true }), 0);
    }
    
    render() {
        const { chunkSize, year } = this.props;
        return (
            <div className="my-12">
                <div className="flex justify-center px-4">
                    <h3 className="text-2xl text-black font-bold">
                        { `SOAR ${year.year}`}
                    </h3>
                </div>
                
                {
                    this.state.inBrowser ? <YearCarousel chunkSize={chunkSize} year={year} /> : <LoadingDiv />
                }
            </div>
        )
    }
}
