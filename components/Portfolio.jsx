import MemberCard from './MemberCard';
import gold from '../styles/gold.module.css';


export default function Portfolio({ portfolio, background, classes="py-8", pullup="-mt-4" }) {
    return (
        <>
            <div className={`${classes} ${background}`}>
                <div className="grid place-items-center">
                    <div className={`${pullup} py-2 bg-black font-fat text-white font-bold flex col-span-3 justify-center`}>
                        <h2 className="mx-16 text-2xl">
                            { portfolio.name }
                        </h2>
                    </div>
                </div>

                <div className={`items-center my-8 flex flex-wrap justify-center`}>
                    {
                        portfolio.members.map( (member, idx) => <MemberCard key={idx} member={member} /> )
                    }
                </div>
            </div>
            
            <div className={`${gold.goldFoil}`} />
        </>
    )
}
