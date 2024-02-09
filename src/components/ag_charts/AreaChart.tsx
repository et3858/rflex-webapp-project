import { useState, useCallback, useRef, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgAreaSeriesOptions, AgChartOptions, AgCharts } from "ag-charts-community";

interface IProps {
    title: string,
    series: AgAreaSeriesOptions[],
    data: Array<any>,
}

const AreaChart = ({ title, series, data }: IProps) => {
    const chartRef = useRef<AgChartsReact>(null);
    const [options, setOptions] = useState<AgChartOptions>({
        title: { text: title },
        series,
        data,
    });

    const toggleConnectMissingData = useCallback(() => {
        const clone = { ...options };
    
        clone.series = (clone.series as AgAreaSeriesOptions[]).map((series) => ({
            ...series,
            connectMissingData: !series.connectMissingData,
        }));

        updateChart(clone);
    }, [options]);


    useEffect(() => {
        const clone = { ...options };
        clone.data = data;

        updateChart(clone);
    }, [data]);


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
