function getDateOfEvent(eventISO) {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
    return new Intl.DateTimeFormat('en-US', options).format(new Date(eventISO))
}

function getTimeOfEvent(dateISO) {
    const options = { hour12: true, hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles' }
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateISO))
}

function isSameDay(startDate, endDate) {
    const start = getDateOfEvent(startDate)
    const end = getDateOfEvent(endDate)
    return start === end ? true : false
}

export { getDateOfEvent, getTimeOfEvent, isSameDay}