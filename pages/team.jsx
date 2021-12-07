import { portfolios } from '../data/membersdata';
import Portfolio from '../components/Portfolio';

export default function Team() {
    return (
        <div>
            <div className="mt-16 w-full grid grid-cols-1 place-items-center">
                <h1 className="text-4xl">
                    Meet The Team!
                </h1>
                <p style={{maxWidth: '420px'}} className="mt-3 text-md text-center">
                    Meet the faces behind the organization, and don't hesitate to reach out to any of us!
                </p>
            </div>

            <div className="w-full">
                {
                    portfolios.map( (portfolio, idx) => <Portfolio key={idx} portfolio={portfolio} /> )
                }
            </div>
        </div>
    )
}
