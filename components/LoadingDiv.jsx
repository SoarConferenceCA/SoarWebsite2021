export default function LoadingDiv() {
    return (
        <div style={{height:'120px'}} className="flex justify-around w-full">
            <div className="inline-flex h-full w-full mx-5 shadow-lg border-2
                                border-primary rounded-md">
                <div className="flex justify-center w-full items-center rounded-lg">
                    <svg style={{height:'40px'}} className="animate-spin text-primary"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
                        <circle className="opacity-5"
                            cx="12" cy="12" r="10"
                            stroke="currentColor"
                            strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
