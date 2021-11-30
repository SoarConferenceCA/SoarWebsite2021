import { Component, createRef } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import navStyles from '../styles/navbar.module.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.btn = createRef();
        this.menu = createRef();
    }

    listener = (ev) => {
        console.log('transitioned');
    };

    componentDidMount() {
        this.menu.current.addEventListener('transitioned', this.listener);
        this.btn.current.addEventListener('click', (ev) => {
            this.menu.current.classList.toggle(navStyles.open);
        })
    }

    render() {
        console.log(navStyles);
        return (
            <nav className="bg-lime shadow rounded-b-lg md:rounded-none">
                <div className="mx-2 flex justify-between py-1">
                    <div className="grid place-items-center">
                        <Link href="/">
                            <a className="py-4 px-2 text-lg text-gray-700 hover:text-gray-900">
                                {/* PUT LOGO HERE */}
                                <span className="font-bold">
                                    Soar Conference
                                </span>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <div className="hidden md:flex items-center font-bold text-white space-x-2 my-2">
                            {
                                navLinks.map( ({ title, href }, idx) => (
                                    <Link key={idx} href={href}>
                                        <a className={`mx-2 px-3 py-2 border-2 hover:text-gray-900 hover:border-gray-900 ${this.props.router.route === href ? 'border-2 hover:border-gray-900' : 'border-transparent hover:border-2'}`}>
                                            {title}
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    
                    <div className="flex items-center md:hidden">
                        <button ref={this.btn} className="p-1 rounded text-gray-900 border-transparent border-2 hover:border-white hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div ref={this.menu} className={`shadow-lg rounded-b-lg ${navStyles['navbar-mobile-menu']} md:hidden`}>
                    <div className="px-2 py-2">
                        <hr className="mb-4" />
                        {
                            navLinks.map( ({ title, href }, idx) => (
                                <Link key={idx} href={href}>
                                    <a className={`block my-1 font-bold pl-3 py-3 rounded w-full hover:text-gray-50 hover:bg-gray-900 ${ this.props.router.route === href ? 'bg-green-50 text-gray-900' : 'text-gray-50' }`}>
                                        {title}
                                    </a>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

const navLinks = [
    { title: 'Team', href: '/team' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Sponsors', href: '/sponsors' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Contact', href: '/contact' },
    { title: 'Apply', href: '/apply' },
];


export default withRouter(NavBar);
