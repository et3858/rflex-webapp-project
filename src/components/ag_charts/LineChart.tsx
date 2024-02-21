import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions, AgLineSeriesOptions } from "ag-charts-community";

interface IProps<T> {
    title: string,
    series: AgLineSeriesOptions[],
    data: T[],
}

const LineChart = <T,>({ title, series, data }: IProps<T>) => {
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
