import { BuildOptions } from 'vite';


const AG_CHARTS_REACT = 'ag-charts-react';
const AG_CHARTS_COMMUNITY = 'ag-charts-community';
const AG_GRID_REACT = 'ag-grid-react';
const AG_GRID_COMMUNITY = 'ag-grid-community';
const RSUITE = 'rsuite';
const REDUX_THINGS = [
    '@reduxjs/toolkit',
    'react-redux',
    'redux',
    'redux-persist',
    'redux-thunk',
];


function _isIncluded(id: string, packageName: string | string[]): boolean {
    return Array.isArray(packageName) ? packageName.some(e => id.includes(e)) : id.includes(packageName);
}


const buildOptions: BuildOptions = {
    chunkSizeWarningLimit: 1300, // in kilobytes
    rollupOptions: {
        output: {
            manualChunks(id: string) {
                // Creating a chunk to 'ag-charts-react' deps. Reducing the vendor chunk size
                if (_isIncluded(id, AG_CHARTS_REACT)) {
                    return AG_CHARTS_REACT;
                }

                if (_isIncluded(id, AG_GRID_REACT)) {
                    return AG_GRID_REACT;
                }

                if (_isIncluded(id, AG_CHARTS_COMMUNITY)) {
                    return AG_CHARTS_COMMUNITY;
                }

                // Creating the LARGEST chunk to 'ag-grid-community' deps. Reducing the vendor chunk size
                if (_isIncluded(id, AG_GRID_COMMUNITY)) {
                    return AG_GRID_COMMUNITY;
                }

                if (_isIncluded(id, RSUITE)) {
                    return RSUITE;
                }

                // Creating a chunk to redux deps. Reducing the vendor chunk size
                if (_isIncluded(id, REDUX_THINGS)) {
                    return '@redux-things';
                }
            },
        },
    },
};


export default buildOptions;
