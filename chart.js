chartIt();
        // make the creation of the chart asyncronous to work with getData() async function
        async function chartIt(){
            // waits until there's data before charting
            const ctx = document.getElementById('myChart').getContext('2d');
            // xlabels array will contain the date increments and ylabels contains the opening/closing stock values
            const xlabels = [];
            const ylabels = [];
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xlabels,
                    datasets: [{
                        label: 'Yahoo Finance Stocks chart- APPL',
                        fill: false,
                        data: [12, 19, 3, 5, 2, 3],
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2
                    }]
                }
            });
        };
        