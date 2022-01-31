import Collapsible from "react-collapsible"

function QuestionTrigger({ question, open }) {
    return (
        <div className="group bg-white w-full flex items-center py-4 px-2">
            <span style={{width: '24px', height: '24px'}} className="inline-block rounded-full bg-accent group-hover:bg-primary"></span>

            <span className="ml-2 text-lg text-gray-600 group-hover:text-primary">
                { question }
            </span>

            <span className="flex flex-1"></span>

            { open ? (
                    <span className="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                ) : (
                    <span className="text-gray-600 group-hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>                    
                )
            }
        </div>
    )
}

function Answer({ answer }) {
    return (
        <div className="bg-white p-4 border-b-2 border-gray-200">
            <p className="text-lg text-gray-500">
                { answer }
            </p>
        </div>
    )
}

export default function FAQCategory({ category, background }) {
    return (
        <div className={background}>
            <div className="py-20 mx-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex w-full">
                        <div className="z-10 my-4 w-full flex-0">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    { category.categoryName }
                                </h2>

                                <div className="mt-8 z-10 w-full md:w-110per">
                                    {
                                        category.questions.map( ({ question, answer}, idx) => (
                                            <Collapsible
                                                key={idx}
                                                trigger={<QuestionTrigger question={question} />}
                                                triggerWhenOpen={<QuestionTrigger question={question} open={true} />}>
                                                <Answer answer={answer} />
                                            </Collapsible>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* <div className="hidden md:block relative w-full -ml-100">
                            <div style={{width: '25px'}} className="absolute right-0 h-full max-h-ab4 bg-primary rounded-l-lg"></div>
                        </div> */}
                    </div>
                    

                    <div className="hidden md:block w-full h-full">
                        <div className="relative -ml-8 lg:-ml-12 xl:-ml-16 2xl:-ml-24 flex justify-center w-full h-full">
                            <img src={category.categoryImage} className="self-center shadow-lg flex-grow-0 max-h-full rounded-lg" style={{height: '500px' }}/>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}