import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AgLineSeriesOptions } from "ag-charts-community";
import { ColDef, INumberCellEditorParams } from 'ag-grid-community';

import { RootStateType } from './redux/reducers/rootReducer';
import { getRequest } from './api';
import { DollarType } from './types';
import { ReduxActionType } from './enums/redux-enums';
import { formatDateString } from './utils';

import LineChart from './components/ag_charts/LineChart';
import Table from './components/ag-grid/Table';
import DatePicker from './components/DatePicker';
import Button from './components/Button';

import 'rsuite/dist/rsuite.min.css';
import './App.css';


const LINE_SERIES: AgLineSeriesOptions[] = [{
    type: "line",
    xKey: "date",
    yKey: "value",
    yName: "Dollars"
}];


const COL_DEFS: ColDef[] = [
    {
        field: 'value',
        headerName: "Dolar value",
        filter: true,
        minWidth: 250,
        editable: true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
        cellEditor: 'agNumberCellEditor',
        cellEditorParams: {
            min: 0,
            max: 99999,
            precision: 2,
            preventStepping: true,
        } as INumberCellEditorParams,
    },
    {
        field: 'date',
        headerName: "Date",
        filter: true,
        minWidth: 250,
    },
];


function App() {
    const dollars: DollarType[] = useSelector((state: RootStateType) => state.list.dollars);
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);


    const validDates = useMemo(() => {
        return (
            startDate instanceof Date && !isNaN(startDate.getTime()) &&
            endDate instanceof Date && !isNaN(endDate.getTime())
        );
    }, [startDate, endDate]);


    useEffect(() => {
        if (dollars.length === 0)
            startRequest();
    }, []);


    const startRequest = async () => {
        const params = {
            start_date: formatDateString(startDate as Date),
            end_date: formatDateString(endDate as Date),
        };

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


    const handleClearList = () => {
        dispatch({ type: ReduxActionType.CLEAR_LIST });
    };


    const handleUpdateElement = (e: DollarType) => {
        dispatch({
            type: ReduxActionType.UPDATE_ELEMENT,
            dollar_id: e.id,
            payload: { ...e }
        });
    };


    const handleRevomeSelected = () => {
        selectedRows.forEach(dollar_id => {
            dispatch({
                type: ReduxActionType.REMOVE_ELEMENT,
                dollar_id,
            });
        });
    };


    const handleSelectionChanged = (data: DollarType[]) => {
        const ids = data.map(({ id }) => id) as number[];
        setSelectedRows(ids);
    };


    const handleClick = () => {
        startRequest();
    };


    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'left',
                gap: '4px',
                marginTop: '12px',
                marginBottom: '12px',
            }}>
                <Button
                    color="orange"
                    appearance="primary"
                    onClick={handleRevomeSelected}
                    disabled={!selectedRows.length}
                >
                    Remove seleted
                </Button>

                <Button
                    color="red"
                    appearance="primary"
                    onClick={handleClearList}
                    disabled={!dollars?.length}
                >
                    Clear list
                </Button>

                <DatePicker
                    value={startDate}
                    placeholder='Select a date'
                    onChange={((e: Date) => setStartDate(e))}
                />

                <DatePicker
                    value={endDate}
                    placeholder='Select a date'
                    onChange={((e: Date) => setEndDate(e))}
                />

                <Button
                    color="blue"
                    appearance="primary"
                    onClick={handleClick}
                    disabled={!validDates}
                >
                    Search
                </Button>
            </div>

            <LineChart
                title={'My line chart of dollars'}
                series={LINE_SERIES}
                data={dollars}
            />

            <Table
                colDefs={COL_DEFS}
                rowData={dollars}
                onCellValueChanged={(e: DollarType) => handleUpdateElement(e)}
                onSelectionChanged={(data: DollarType[]) => handleSelectionChanged(data)}
            />
        </>
    );
}

export default App;
