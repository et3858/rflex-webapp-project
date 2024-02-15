import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgLineSeriesOptions } from "ag-charts-community";

interface IProps {
    title: string,
    series: AgLineSeriesOptions[],
    data: Array<any>,
}

const LineChart = ({ title, series, data }: IProps) => {
    const [options, setOptions] = useState<AgChartOptions>({
        title: { text: title },
        data: data,
        series: series,
    });


    useEffect(() => {
        setOptions(prev => ({ ...prev, data }));
    }, [data]);


    return <AgChartsReact options={options} />;
};


export default LineChart;
