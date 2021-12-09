export default function YearSlide({ chunkSize, images }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-2 lg:grid-rows-2">
            {
                images.map( (photo, idx) => (
                    <div className="m-4">
                        <img src={photo} className="w-full h-full" />
                    </div>
                ))
            }
            {
                [...Array(chunkSize - images.length)].map( (_, idx) => <div className="w-full h-full"></div> )
            }
        </div>
    )
}
