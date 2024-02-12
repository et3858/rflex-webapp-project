export function isAfter(date: Date, dateToCompare: Date): boolean {
    return date.getTime() > dateToCompare.getTime();
}

export function isBefore(date: Date, dateToCompare: Date): boolean {
    const _date = new Date(date);
    const _dateToCompare = new Date(dateToCompare);

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
