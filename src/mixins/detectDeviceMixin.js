// function getTitle(vm) { }
function deviceType() {
    const ua = navigator.userAgent

    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua,
        )
    ) {
        return 'mobile'
    } else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet'
    } else return 'desktop'
}

export default {
    created() {
        return deviceType
    },
}
