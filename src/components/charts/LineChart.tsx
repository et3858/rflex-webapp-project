import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const series = [
    {
        name: 'XYZ MOTORS',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
];

const options: ApexOptions = {
    chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            autoSelected: 'zoom'
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    title: {
        text: 'Stock Price Movement',
        align: 'left'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        },
    },
    yaxis: {
        labels: {
            formatter: function (val: number) {
                return (val / 1000000).toFixed(0);
            },
        },
        title: {
            text: 'Price'
        },
    },
    xaxis: {
        type: 'numeric',
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function (val: number) {
                return (val / 1000000).toFixed(0)
            }
        }
    }
};


function LineChart() {
    return (
        <>
            <Chart
                options={options}
                series={series}
                type="line"
                width={500}
                height={320}
            />
        </>
    );
}


export default LineChart;
