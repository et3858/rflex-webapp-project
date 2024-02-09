import { useEffect, useRef, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgCharts, AgLineSeriesOptions } from "ag-charts-community";

interface IProps {
    title: string,
    series: AgLineSeriesOptions[],
    data: Array<any>,
}

const LineChart = ({ title, series, data }: IProps) => {
    const chartRef = useRef<AgChartsReact>(null);
    const [options, setOptions] = useState<AgChartOptions>({
        title: { text: title },
        data: data,
        series: series,
    });

    useEffect(() => {
        const clone = { ...options };
        clone.data = data;

        updateChart(clone);
    }, [data]);


    const updateChart = (chartOptions: AgChartOptions) => {
        AgCharts.updateDelta(chartRef.current!.chart, chartOptions);
        setOptions(chartOptions);
    };

    return <AgChartsReact ref={chartRef} options={options} />;
};


export default LineChart;
