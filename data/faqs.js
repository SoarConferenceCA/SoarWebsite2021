/*

FAQCategory {
    category_name: "",
    category_image: "",
    questions: FAQ {
        question: "",
        answer: ""
    }
}

*/

module.exports.faqCategories = [...Array(4)].map( (_, idx) => {
        return {
            categoryName: `FAQ Cat ${idx}`,
            categoryImage: '/assets/unknown.png',
            questions: [...Array(5)].map( (_, yidx) => {
                return {
                    question: `Question #${yidx}?`,
                    answer: `Answer #${yidx} to Question #${yidx}.`
                }
            })
        }
    }
);
