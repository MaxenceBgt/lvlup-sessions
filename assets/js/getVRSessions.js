
export const getVRSessions = async (date, helmet) => {
    let VRSessionsArray = null

    await $fetch('/api/getVRSessions', {
        method: 'GET',
        params: {
            date: date,
            helmet: helmet
        }
    }).then((res) => {
        VRSessionsArray = res.data
    })

    return VRSessionsArray
}