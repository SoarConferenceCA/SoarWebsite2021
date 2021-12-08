import { Component } from 'react';
import Collapsible from "react-collapsible";
import FAQCategory from '../components/FAQCategory';
import { faqCategories } from '../data/faqs';

const trigger = (
    <div className="bg-pale-pink mt-8 flex justify-center">
        <span style={{width: '24px', height: '24px'}} className="bg-pale-pink"></span>

        <span>Some Text</span>
        
        <span style={{width: '24px', height: '24px'}} className="bg-pale-pink"></span>
    </div>
)

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
