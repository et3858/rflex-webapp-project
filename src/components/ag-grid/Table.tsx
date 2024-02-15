import { AgGridReact } from 'ag-grid-react';
import { CellValueChangedEvent, ColDef, SelectionChangedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

// Row Data Interface
// interface IRow {
//     make: string;
//     model: string;
//     price: number;
//     electric: boolean;
// }

interface IProps {
    colDefs: ColDef[],
    rowData: Array<{[key: string]: any}>,
    onCellValueChanged?: Function,
    onSelectionChanged?: Function,
}

// Create new Table component
function Table({
    colDefs,
    rowData,
    onCellValueChanged,
    onSelectionChanged,
}: IProps) {
    const handleCellValueChanged = (e: CellValueChangedEvent) => {
        if (typeof onCellValueChanged === 'function') {
            onCellValueChanged(e.data);
        }
    };


    const handleSelectionChanged = (e: SelectionChangedEvent) => {
        if (typeof onSelectionChanged === 'function') {
            const data = e.api.getSelectedNodes().map(rowNode => rowNode.data);
            onSelectionChanged(data);
        }
    };

    return (
        <div className="ag-theme-quartz" style={{ height: 500, width: 800 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                onCellValueChanged={handleCellValueChanged}
                rowSelection={'multiple'}
                onSelectionChanged={handleSelectionChanged}
            />
        </div>
    );
}


export default Table;
