export function isAfter(date: Date, dateToCompare: Date): boolean {
    const _date = _toDate(date);
    const _dateToCompare = _toDate(dateToCompare);

    return _date.getTime() > _dateToCompare.getTime();
}

export function isBefore(date: Date, dateToCompare: Date): boolean {
    const _date = _toDate(date);
    const _dateToCompare = _toDate(dateToCompare);

    return +_date < +_dateToCompare;
}

export function formatDateString(d: Date): string {
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();

    if (month.length < 2) month = '0' + month;

    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function _toDate(date: Date) {
    if (! (date instanceof Date)) {
        return new Date(NaN);
    }

    return date;
}
