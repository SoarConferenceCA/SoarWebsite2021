import NavBar from '../components/NavBar';

export default function Apply({ links }) {
    return (
        <div>
            <NavBar links={links}>
                <div className="mt-32 flex justify-center">
                    <h1 className="mt-32 font-bold text-primary text-3xl">
                        Applications coming soon!!
                    </h1>
                </div>
            </NavBar>
        </div>
    )
}
