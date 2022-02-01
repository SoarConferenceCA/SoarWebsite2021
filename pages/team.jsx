import { portfolios } from '../data/membersdata';
import Portfolio from '../components/Portfolio';
import NavBar from '../components/NavBar';
import grads from '../styles/grads.module.css';

let colors = [
    'bg-si-pink',
    grads.cyanRed25,
    grads.yellowOrange75,
    grads.magicOrange,
    grads.redGreen45,
    grads.blueMaroon,
    'bg-si-beige',
    'bg-si-lime',
];


export default function Team({ links }) {
    return (
        <div>
            <NavBar links={links}>
                <div className="w-full h-full bg-si-beige flex flex-col">
                    <div className="mb-20 pt-16 w-full grid grid-cols-1 place-items-center">
                        <h1 className="text-6xl font-fat">
                            Meet The Team!
                        </h1>
                        <p style={{maxWidth: '420px'}} className="mt-3 text-xl font-bold text-gray-600 text-center font-lato">
                            Meet the faces behind the organization, and don't hesitate to reach out to any of us!
                        </p>
                    </div>
                    <Portfolio pullup="-mt-6" portfolio={portfolios[0]} background={grads.cyanRed75} classes="mt-8 pb-8 flex-grow" />
                </div>
            </NavBar>

            
            <main>
                <div className="w-full">
                    {
                        portfolios.slice(1).map( (portfolio, idx) => (
                                <Portfolio
                                    key={idx}
                                    portfolio={portfolio}
                                    background={colors[idx]}
                                    pullup="-mt-16" />
                            )
                        )
                    }
                </div>            
            </main>
        </div>
    )
}
