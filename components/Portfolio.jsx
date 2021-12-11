import MemberCard from './MemberCard';

export default function Portfolio({ portfolio }) {
    return (
        <div className="my-8">
            <div className="grid grid-cols-5">
                <div className="mr-auto my-auto w-5/6 bg-primary" style={{height: '4px'}}></div>

                <div className="flex col-span-3 justify-center">
                    <h2 className="mx-16 text-2xl">
                        { portfolio.name }
                    </h2>
                </div>

                <div className="ml-auto mr-0 m-auto w-5/6 bg-primary" style={{height: '4px'}}></div>
            </div>

            <div className={`items-center my-8 flex flex-wrap justify-center`}>
                {
                    portfolio.members.map( (member, idx) => <MemberCard key={idx} member={member} /> )
                }
            </div>
        </div>
    )
}
