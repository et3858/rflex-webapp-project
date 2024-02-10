import { DatePicker as RSuiteDatePicker } from 'rsuite';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/DatePicker/styles/index.css';


function DatePicker(props: {[key: string]: any}) {
    return <RSuiteDatePicker oneTap isoWeek format={"dd-MM-yyyy"} {...props} />
}


export default DatePicker;
