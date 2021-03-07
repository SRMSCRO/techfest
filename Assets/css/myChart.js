// Chart.js
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
            
            data: [3, 10, 20, 5,15,35],
            borderColor: '#5059E2' ,
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
        }
        
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
            
            data: [3, 10, 20, 5,15,35],
            borderColor: '#5059E2' ,
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
   
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Open', 'Close', 'Validated', 'Rejected'],
        datasets: [{
            
            backgroundColor: [
                '#5059E2',
                '#88E7E7',
                '#099445',
                '#E00303',
                
            ],
            borderColor: [
                '#5059E2',
                '#88E7E7',
                '#099445',
                '#E00303',  
            ],
            data: [3, 10, 15, 5,],
            borderWidth:2,
           
        }]
    },
    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 30,
                bottom: 20,
            }
        },
        animation: {
            duration: 2500,
        },  
        
    }
});