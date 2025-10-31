export const formatCurrency = (amount, currencyCode = 'USD', locale = 'en-US') => {
if (typeof amount !== 'number' || isNaN(amount)) {
return '';
}

return new Intl.NumberFormat(locale, {
style: 'currency',
currency: currencyCode,
minimumFractionDigits: 2,
maximumFractionDigits: 2,
}).format(amount);
};
