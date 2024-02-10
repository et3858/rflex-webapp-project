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

interface IProps {
    colDefs: ColDef[],
    rowData: Array<{[key: string]: any}>
}

// Create new Table component
function Table({ colDefs, rowData }: IProps) {
    return (
        /*
        <div
        className={"ag-theme-quartz"}
        style={{ width: '100%', height: '100%' }}
        className="ag-theme-quartz" style={{ height: 500 }}
        >
        */
        <div className="ag-theme-quartz" style={{ height: 500, width: 800 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
};


export default Table;
