const calcDate = (date) => {
    const today = new Date();
    date = new Date(date);

    const diff = Math.floor(today.getTime() - date.getTime());

    let secs = Math.floor(diff / 1000);
    let mins = Math.floor(secs / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);

    months = Math.floor(months % 12);
    days = Math.floor(days % 30);
    hours = Math.floor(hours % 24);
    mins = Math.floor(mins % 60);
    secs = Math.floor(secs % 60);

    let message = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    message += ` (`
    if (days > 0) {
        if (years > 0) message += `${years} year${years > 1 ? 's' : ''} `;
        if (months > 0) message += `${months} month${months > 1 ? 's' : ''} `;
        if (days > 0) message += `${days} day${days > 1 ? 's' : ''} `;
    } else {
        if (hours > 0) message += `${hours} hour${hours > 1 ? 's' : ''} `;
        if (mins > 0) message += `${mins} minute${mins > 1 ? 's' : ''} `;
        if (secs > 0) message += `${secs} second${secs > 1 ? 's' : ''} `;
    }
    message += ` ago)`;

    return message;
}

module.exports = {
    calcDate,
}