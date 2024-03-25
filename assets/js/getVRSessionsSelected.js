
export const getVRSessionsSelected = async (date, helmet) => {
    let VRSessionsArray = null

    await $fetch('/api/getVRSessionsSelected', {
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