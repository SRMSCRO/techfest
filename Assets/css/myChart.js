var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April','May', 'June'],
        datasets: [{
            label: 'Open Leads',
            backgroundColor: '#505ae250',
            borderColor: '#5059E2',
            hoverBackgroundColor: '#505ae2ab',
            
            data: [3, 10, 20, 5,15,35],
           
            borderWidth:1,
        }]
    },

    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
            }
        },
        animation: {
            duration: 2000,
        },
        legend: {
            display: true,
            labels: {
                fontColor: '#5059E2'
            }
        },
        
    }
});

var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April','May', 'June'],
        datasets: [{
            label: 'Closed Leads',
            backgroundColor: '#505ae250',
            borderColor: '#5059E2',
            hoverBackgroundColor: '#505ae2ab',
            data: [3, 10, 20, 5,15,35],

           
            borderWidth:1,
        }]
    },

    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
            }
        },
        animation: {
            duration: 2000,
        },
        legend: {
            display: true,
            labels: {
                fontColor: '#5059E2'
            }
        },
       
    }
});

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
            data: [3, 10, 15, 5,],
            borderWidth:-1,
           
        }]
    },

    
    options: {
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