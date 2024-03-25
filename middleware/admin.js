export default defineNuxtRouteMiddleware(async (to, _from) => {
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()
  
    if (!user.value) {
      return navigateTo('/user/login')
    }
    else {
      const { data, error } = await supabase.from('users').select('is_admin').eq('id', user.value.id).single()
      
      if (error || !data || data.is_admin !== true) {
        return navigateTo('/')
      }
    }
})