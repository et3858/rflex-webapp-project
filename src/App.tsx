import { useEffect, useState } from 'react';
import { getRequest } from './api';
import { DollarType } from './types';
import './App.css';

function App() {
    const [dollars, setDollars] = useState<DollarType[]>([]);

    useEffect(() => {
        const startRequest = async () => {
            const params = { start_date: "2024-02-01", end_date: "2024-02-08" };

            try {
                const response = await getRequest("", params);
                setDollars(response);
            } catch (err) {
                console.warn(err);
            }
        };

        startRequest();
    }, []);


    useEffect(() => {
        console.log(dollars)
    }, [dollars]);


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Value</th>
                    </tr>
                </thead>

                <tbody>
                {dollars.map((e: DollarType) => (
                    <tr key={e.date.toString()}>
                        <td>{e.date.toString()}</td>
                        <td>{e.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
