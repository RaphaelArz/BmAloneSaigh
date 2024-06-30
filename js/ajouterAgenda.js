document.getElementById('addEventButton').addEventListener('click', function(event) {
    event.preventDefault();
    const eventTitle = 'Bar-Mitsvah Alone';
    const eventLocation = '74 Av. Paul Valéry, 95200 Sarcelles';
    const eventDetails = 'Mise des téphilines d\'Alone';
    const eventStart = '20240808T083000Z';
    const eventEnd = '20240808T113000Z';

    // Détection du système d'exploitation
    const userAgent = window.navigator.userAgent;
    let calendarUrl;

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // Lien pour Apple Calendar
        const startDate = '20240808T083000';
        const endDate = '20240808T113000';
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `SUMMARY:${eventTitle}`,
            `DESCRIPTION:${eventDetails}`,
            `LOCATION:${eventLocation}`,
            `DTSTART:${startDate}`,
            `DTEND:${endDate}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');

        calendarUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
    } else {
        // Lien pour Google Calendar
        calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
    }

    window.open(calendarUrl, '_blank');
});