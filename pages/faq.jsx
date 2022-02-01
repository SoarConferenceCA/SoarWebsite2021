import FAQCategory from '../components/FAQCategory';
import { faqCategories } from '../data/faqs';
import NavBar from '../components/NavBar';

let colors = [
    'bg-si-cyan',
    'bg-si-dpurple',
    'bg-si-lime'
];

function randomColor() {
    let item = colors[Math.floor(Math.random()*colors.length)];
    colors = colors.filter( i => i !== item);
    return item;
}


export default function FAQ({ links }) {
    return (
        <div className="bg-si-beige">
            <NavBar links={links}>
                <div className="flex flex-col justify-between">
                    <h1 className="my-24 mx-4 font-fat text-center font-bold text-6xl">
                        Frequently Asked Questions
                    </h1>

                    <div className="mt-26 bg-si-pink">
                        <FAQCategory background="" category={faqCategories[0]} />
                    </div>
                </div>
            </NavBar>
            

            <div className="">
                {
                    faqCategories.slice(1).map( (category, idx) => (
                        <FAQCategory key={idx} category={category} background={colors[idx]} />
                    ))
                }
            </div>
        </div>
    )
}
