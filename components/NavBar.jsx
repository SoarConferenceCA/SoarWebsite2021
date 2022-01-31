import { Component, createRef } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import navStyles from '../styles/navbar.module.css';

const highlightColour = 'yellow-200';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.menu = createRef();
    }

    handleTransition = (ev) => {
        console.log('transitioned');
    };

    toggleDropDown = async (wait) => {
        this.menu.current.classList.toggle(navStyles.open);
    }

    render() {
        return (
            <>
                <div className="block md:flex">
                    <nav className="font-tavi bg-si-grey md:px-4 shadow rounded-b-lg md:rounded-none md:grid md:place-items-center">
                        <div className="mx-4 md:mx-0 flex md:block justify-between py-1">
                            {/* <div className="my-8">
                                <Link href="/">
                                    <div className="md:flex md:justify-center">
                                        <a className={`cursor-pointer md:text-center py-4 px-2 text-lg text-red-100 hover:text-${highlightColour}`}>
                                            <span className="font-bold">
                                                Soar Conference
                                            </span>
                                        </a>
                                    </div>
                                </Link>
                            </div> */}

                            <div>
                                <div className="font-serif hidden md:block items-center font-bold text-white space-y-8 mb-8">
                                    {
                                        this.props.links.map( ({ title, href }, idx) => (
                                            <Link key={idx} href={href}>
                                                <a className={`block w-full text-center cursor-pointer px-3 py-2 border-2 hover:text-${highlightColour} hover:border-${highlightColour} ${this.props.router.route === href ? 'border-2 hover:border-gray-900' : 'border-transparent hover:border-2'}`}>
                                                    {title}
                                                </a>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>

                            
                            <div className="flex items-center md:hidden">
                                <button onClick={this.toggleDropDown} className="p-1 rounded text-red-200 border-transparent border-2 hover:border-white hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                        </div>

                        <div ref={this.menu} onTransitionEnd={this.handleTransition} className={`shadow-lg rounded-b-lg ${navStyles['navbar-mobile-menu']} md:hidden`}>
                            <div className="px-2 py-2">
                                <hr className="mb-4" />
                                {
                                    this.props.links.map( ({ title, href }, idx) => (
                                        <Link key={idx} href={href}>
                                            <a onClick={this.toggleDropDown} className={`block my-1 font-bold pl-3 py-3 rounded w-full hover:text-gray-50 hover:bg-gray-900 ${ this.props.router.route === href ? 'bg-green-50 text-gray-900' : 'text-gray-50' }`}>
                                                {title}
                                            </a>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </nav>
                    
                    <main className="flex-grow">
                        { this.props.children }
                    </main>
                </div>
            </>
        )
    }
}

const RoutedNavBar = withRouter(NavBar);

export default RoutedNavBar;
