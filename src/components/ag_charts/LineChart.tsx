import { useRef, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgCharts, AgLineSeriesOptions } from "ag-charts-community";


const data = [
    {
        quarter: 'Q1',
        petrol: 200,
        diesel: 100,
    },
    {
        quarter: 'Q2',
        petrol: 300,
        diesel: 130,
    },
    {
        quarter: 'Q3',
        petrol: 350,
        diesel: 160,
    },
    {
        quarter: 'Q4',
        petrol: 400,
        diesel: 200,
    },
];

const series: AgLineSeriesOptions[] = [
    {
        type: "line",
        xKey: "quarter",
        yKey: "petrol",
        yName: "Petrol",
    },
    {
        type: "line",
        xKey: "quarter",
        yKey: "diesel",
        yName: "Diesel",
    },
];


const LineChart = () => {
    const chartRef = useRef<AgChartsReact>(null);
    const [options, setOptions] = useState<AgChartOptions>({
        title: { text: "Annual Fuel Expenditure" },
        data: data,
        series: series,
    });

    const updateData = () => {
        const clone = { ...options };

        if (! clone?.data?.length)
            return;

        clone.data.push({
            quarter: 'Q5',
            petrol: 999,
            diesel: 888,
        });

        clone.data[2].petrol = 222;
        clone.data[2].diesel = 333;

        updateChart(clone);
    };


    const updateChart = (chartOptions: AgChartOptions) => {
        AgCharts.updateDelta(chartRef.current!.chart, chartOptions);
        setOptions(chartOptions);
    };

    const handleUpdate = () => {
        updateData();
    };


    return (
        <>
            <button onClick={handleUpdate}>Update</button>

            <AgChartsReact ref={chartRef} options={options} />
        </>
    );
};


export default LineChart;
