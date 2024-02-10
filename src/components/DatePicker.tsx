import { DatePicker as RSuiteDatePicker } from 'rsuite';

function DatePicker(props: {[key: string]: any}) {
    return <RSuiteDatePicker oneTap isoWeek format={"yyyy-MM-dd"} {...props} />
}

export default DatePicker;
