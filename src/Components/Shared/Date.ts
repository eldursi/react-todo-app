export const GetDay = (date?: Date) => {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
    const today = new Date()
    const dayName = date? days[date.getDay()] : days[today.getDay()] 
    return dayName
}

export const GetMonth = (date?: Date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date()
    const monthName = date? months[date.getMonth()] : months[today.getMonth()] 
    return monthName
}
