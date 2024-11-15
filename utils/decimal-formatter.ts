export const decimalFormatter = (num, place = 2) => {
    try {
        let value = new Intl.NumberFormat('en-US', { minimumFractionDigits: place, maximumFractionDigits: place }).format(num)
        return + value
    } catch (e) {
        console.error(e)
        return null
    }
}