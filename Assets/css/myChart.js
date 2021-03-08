var a = document.getElementById('value_open').textContent;
var b = document.getElementById('value_closed').textContent;
var c = document.getElementById('value_validated').textContent;
var d = document.getElementById('value_rejected').textContent;
var ctx = document.getElementById('pieChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
   
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Open', 'Close', 'Validated', 'Rejected'],
        datasets: [{
            
            backgroundColor: [
                '#5059E2',
                '#88E7E7',
                '#7868e6',
                '#98acf8',
                
            ]
                ,
            borderColor: [
                '#5059E2',
                '#88E7E7',
                '#7868e6',
                '#98acf8',
                
            ],  
            data: [a, b, c, d,],
            borderWidth:-1,
           
        }]
    },

    
    options: {
        responsive: 'true',
        maintainAspectRatio: 'true',
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 30,
                bottom: 20,
            }
        },
        animation: {
            duration: 2500,
        },
        
        
    }
});