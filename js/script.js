d3.csv("data/referendum.csv").then(makeGraphs);

function groupBy(data, key) {
    return data.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}

function makeGraphs(data) {
    console.log(data);

    var d = groupBy(data, 'Region'); 
    var labels = Object.keys(d);
    var regionTotalData = labels.map(x => d[x].length);

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: regionTotalData
            }]
        },

        options: {}
    });
}



