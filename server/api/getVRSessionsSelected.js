import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { serverSupabaseClient } from '#supabase/server'

dayjs.extend(utc);

export default defineEventHandler(async(event) => {
    const supabase = await serverSupabaseClient(event)

    const date = getQuery(event).date
    const helmet = getQuery(event).helmet

    const dateBegin = dayjs(date).utc().startOf('day').toISOString()
    const dateEnd = dayjs(date).utc().endOf('day').toISOString()

    const { data, error } = await supabase
        .from('sessions')
        .select(`
        date, 
        casque, 
        users (
            firstname, 
            lastname, 
            email
        )
    `)
    .eq('casque', helmet)
    .not('user', 'is', null)
    .gte('date', dateBegin)
    .lte('date', dateEnd)
    .order('date')

    return {
        data,
        error
    }
})