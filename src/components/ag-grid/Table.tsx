import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

// Row Data Interface
interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}

// Create new Table component
function Table() {
    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
        { field: 'electric' },
    ]);

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<IRow[]>([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ]);

    // Container: Defines the grid's theme & dimensions.
    return (
        /*
        <div
        className={"ag-theme-quartz"}
        style={{ width: '100%', height: '100%' }}
        className="ag-theme-quartz" style={{ height: 500 }}
        >
        */
        <div className="ag-theme-quartz" style={{ height: 500, width: 800 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
    );
};


export default Table;
