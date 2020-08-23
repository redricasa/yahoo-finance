 
        // make the creation of the chart asyncronous to work with getData() async function
//the argument inputData is an object 
function chartIt(inputData){
    
    // waits until there's data before charting
    const ctx = document.getElementById('myChart').getContext('2d');
    // xlabels array will contain the date increments and ylabels contains the opening/closing stock values
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: inputData.xlabels,
            datasets: [{
                label: 'Yahoo Finance Stocks chart- APPL',
                fill: false,
                data: inputData.data.open, 
                borderColor: 'rgba(1, 200, 2, 1)',
                borderWidth: 2
            },
            {
                label: 'Yahoo Finance Stocks chart- APPL',
                fill: false,
                data: inputData.data.close, 
                borderColor: 'rgba(100, 162, 235, 100)',
                borderWidth: 2
            }]
        }
    });
};
        