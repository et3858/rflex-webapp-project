import { useState, useCallback, useRef } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgAreaSeriesOptions, AgChartOptions, AgCharts } from "ag-charts-community";

const data = [
    { month: 'Jan', subscriptions: 222, services: 250, products: 200 },
    { month: 'Feb', subscriptions: 240, services: 255, products: 210 },
    { month: 'Mar', subscriptions: 280, services: 245, products: null },
    { month: 'Apr', subscriptions: 300, services: 260, products: 205 },
    { month: 'May', subscriptions: 350, services: 235, products: 215 },
    { month: 'Jun', subscriptions: 420, services: Infinity, products: 200 },
    { month: 'Jul', subscriptions: 300, services: 255, products: undefined },
    { month: 'Aug', subscriptions: 270, services: 305, products: 210 },
    { month: 'Sep', subscriptions: 260, services: 280, products: 250 },
    { month: 'Oct', subscriptions: 385, services: 250, products: NaN },
    { month: 'Nov', subscriptions: 320, services: 265, products: 215 },
    { month: 'Dec', subscriptions: 330, services: 255, products: 220 },
];

const series: AgAreaSeriesOptions[] = [
    {
        type: "area",
        xKey: "month",
        yKey: "subscriptions",
        yName: "Subscriptions",
        connectMissingData: false,
    },
    {
        type: "area",
        xKey: "month",
        yKey: "services",
        yName: "Services",
        connectMissingData: false,
    },
    {
        type: "area",
        xKey: "month",
        yKey: "products",
        yName: "Products",
        connectMissingData: false,
    },
];

const AreaChart = () => {
    const chartRef = useRef<AgChartsReact>(null);
    const [options, setOptions] = useState<AgChartOptions>({
        title: {
            text: "Sales by Month",
        },
        data: data,
        series: series,
    });

    const toggleConnectMissingData = useCallback(() => {
        const clone = { ...options };
    
        clone.series = (clone.series as AgAreaSeriesOptions[]).map((series) => ({
            ...series,
            connectMissingData: !series.connectMissingData,
        }));

        updateChart(clone);
    }, [options]);


    const updateChart = (chartOptions: AgChartOptions) => {
        AgCharts.updateDelta(chartRef.current!.chart, chartOptions);
        setOptions(chartOptions);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "0.5em",
                }}
            >
                <button onClick={toggleConnectMissingData}>
                    Toggle Connect Missing Data
                </button>
            </div>
            <AgChartsReact ref={chartRef} options={options} />
        </div>
    );
};

export default AreaChart;

