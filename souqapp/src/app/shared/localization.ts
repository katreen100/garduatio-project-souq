let locale = 'ar-EG';


// table names
let category = (locale == 'ar-EG') ? 'categoryArabic' : 'categoryEnglish';
let product = (locale == 'ar-EG') ? 'productArabic' : 'productEnglish';

export { category, product, locale };