import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default defineEventHandler((event) => {
    const thursdaysArray = Array()
    const now = dayjs().utc()

    for(var i=0; i < 6; i++){
        const upcomingThursday = now.day(4).add(i, 'week').startOf('day').toISOString();
        thursdaysArray.push(upcomingThursday)
    }

    return {
        thursdaysArray
    }
})