import FAQCategory from '../components/FAQCategory';
import { faqCategories } from '../data/faqs';


export default function FAQ() {
    return (
        <div>
            <h1 className="mt-24 mx-4 text-center font-bold text-4xl">
                Frequently Asked Questions
            </h1>

            <div className="mt-26">
                {
                    faqCategories.map( (category, idx) => (
                        <FAQCategory key={idx} category={category} />
                    ))
                }
            </div>
        </div>
    )
}
