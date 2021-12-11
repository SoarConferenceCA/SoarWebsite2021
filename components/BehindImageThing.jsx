export default function BehindImageThing({ direction }) {
    return (
        <>
            <div className="relative w-full h-full">
                <div className={`absolute w-10/12 h-2/3 max-h-h320 top-35 ${direction}-0 bg-odd-green`} />
            </div>

            <div className="relative w-full h-full -ml-100">
                <svg width="100%" height="100%" viewBox="0 0 441 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-1 97.5L157.5 1L285.5 217L432.5 119" stroke="#8FB5Af"/>
                    <path d="M0 139L146.5 55L276.5 281L440 159.5" stroke="#DD7766" strokeOpacity="0.6"/>
                    <path d="M0 180L132.5 103L259.5 352L440 213.5" stroke="#DD7766" strokeOpacity="0.4"/>
                </svg>
            </div>
        </>
    )
}
