const currencyPicker = document.getElementById('currency-picker');
const totalSalesElement = document.getElementById('total-sales');
const markdownOutput = document.getElementById('markdown-output');

const rates = {};

fetch('rates.json')
    .then(response => response.json())
    .then(data => {
        Object.assign(rates, data);
        console.log('Conversion Rates:', rates);
        updateTotalSales();
    });

currencyPicker.addEventListener('change', updateTotalSales);

function updateTotalSales() {
    const sales = [100, 200, 150]; // Example sales data
    const totalSales = sales.reduce((acc, sale) => acc + sale, 0);
    const selectedCurrency = currencyPicker.value;
    const conversionRate = rates[selectedCurrency];
    const convertedTotal = (totalSales * conversionRate).toFixed(2);
    totalSalesElement.textContent = `${convertedTotal} ${selectedCurrency}`;
    console.log('Total Sales:', convertedTotal, selectedCurrency);
}

fetch('readme.md')
    .then(response => response.text())
    .then(markdown => {
        markdownOutput.textContent = markdown;
    });