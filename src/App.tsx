import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AgAreaSeriesOptions, AgLineSeriesOptions } from "ag-charts-community";
import { ColDef } from 'ag-grid-community';

import { RootStateType } from './redux/reducers/rootReducer';
import { getRequest } from './api';
import { DollarType } from './types';
import { ReduxActionType } from './enums/redux-enums';

import LineChart from './components/ag_charts/LineChart';
import AreaChart from './components/ag_charts/AreaChart';
import Table from './components/ag-grid/Table';

import './App.css';

const AREA_SERIES: AgAreaSeriesOptions[] = [{
    type: "area",
    xKey: "date",
    yKey: "value",
    yName: "Dollars"
}];


const LINE_SERIES: AgLineSeriesOptions[] = [{
    type: "line",
    xKey: "date",
    yKey: "value",
    yName: "Dollars"
}];


const COL_DEFS: ColDef[] = [
    { field: 'value' },
    { field: 'date' },
];


function App() {
    const dollars: DollarType[] = useSelector((state: RootStateType) => state.list.dollars);
    const dispatch = useDispatch();

    const [startDate] = useState<string>("2024-01-25");
    const [endDate] = useState<string>("2024-02-08");


    useEffect(() => {
        if (dollars.length === 0)
            startRequest();
    }, []);


    const startRequest = async () => {
        const params = { start_date: startDate, end_date: endDate };

        try {
            const response = await getRequest("", params);

            dispatch({
                type: ReduxActionType.FILL_LIST,
                payload: response
            });
        } catch (err) {
            console.warn(err);
        }
    };


    const handleUpdateList = async () => {
        startRequest();
    };


    const handleClearList = () => {
        dispatch({ type: ReduxActionType.CLEAR_LIST });
    };


    const handleUpdateElement = (e: DollarType) => {
        dispatch({
            type: ReduxActionType.UPDATE_ELEMENT,
            dollar_id: e.id,
            payload: { value: 999.99 }
        })
    };


    const handleRevomeElement = (e: DollarType) => {
        dispatch({
            type: ReduxActionType.REMOVE_ELEMENT,
            dollar_id: e.id,
        })
    };


    return (
        <>
            <LineChart
                title={'My line chart of dollars'}
                series={LINE_SERIES}
                data={dollars}
            />

            <AreaChart
                title={'My area chart of dollars'}
                series={AREA_SERIES}
                data={dollars}
            />

            <div>
                <Table colDefs={COL_DEFS} rowData={dollars} />
            </div>

            <div>
                <button onClick={handleUpdateList}>Update list</button>
                <button onClick={handleClearList}>Clear list</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Value</th>
                        <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                {dollars.map((e: DollarType) => (
                    <tr key={e.id}>
                        <td>{new Date(e.date).toDateString()}</td>
                        <td>{e.value}</td>
                        <td>
                            <button onClick={() => handleUpdateElement(e)}>Actualizar</button>
                            <button onClick={() => handleRevomeElement(e)}>Borrar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
