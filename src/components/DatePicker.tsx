import { DatePicker as RSuiteDatePicker, DatePickerProps } from 'rsuite';

function DatePicker(props: DatePickerProps) {
    return <RSuiteDatePicker oneTap isoWeek format={"yyyy-MM-dd"} {...props} />
}

export default DatePicker;
