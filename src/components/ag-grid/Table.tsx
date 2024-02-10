import { AgGridReact } from 'ag-grid-react';
import { CellValueChangedEvent, ColDef } from 'ag-grid-community';
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
    rowData: Array<{[key: string]: any}>,
    onCellValueChanged?: Function,
}

// Create new Table component
function Table({ colDefs, rowData, onCellValueChanged }: IProps) {
    const handleCellValueChanged = (e: CellValueChangedEvent) => {
        if (typeof onCellValueChanged === 'function') {
            onCellValueChanged(e.data);
        }
    };

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
                onCellValueChanged={handleCellValueChanged}
            />
        </div>
    );
};


export default Table;
