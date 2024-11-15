import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const utcDate = (date: string | any) => {
    try {
        return dayjs.utc(date).format()
    } catch (e) {
        console.error(e)
        return date
    }
}