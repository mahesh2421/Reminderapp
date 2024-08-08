document.getElementById('setReminder').addEventListener('click', setReminder);

function setReminder() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (!time) {
        alert('Please select a time');
        return;
    }

    const reminderTime = new Date();
    const [hours, minutes] = time.split(':');
    reminderTime.setHours(hours, minutes, 0, 0);

    const now = new Date();
    const timeToReminder = reminderTime.getTime() - now.getTime();

    if (timeToReminder < 0) {
        alert('Selected time has already passed today');
        return;
    }

    setTimeout(() => {
        alert(`Time for ${activity}`);
    }, timeToReminder);

    alert(`Reminder set for ${day} at ${time} for ${activity}`);
}
