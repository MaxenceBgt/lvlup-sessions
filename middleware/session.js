
export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
  
    if (!user.value) {
      return navigateTo('/user/login')
    }
    else {
      const { data, error } = await supabase.from('sessions').select('selected').eq('date', to.query.date).eq('casque', to.query.helmet).single()

      if(error || !data || data.selected === true) {
        return navigateTo('/')
      }
    }
})