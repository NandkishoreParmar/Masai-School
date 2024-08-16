document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reminder-form');
    const titleInput = document.getElementById('title');
    const timeInput = document.getElementById('time');
    const remindersList = document.querySelector('#reminders-list ul');
    let reminders = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = titleInput.value.trim();
        const time = parseInt(timeInput.value, 10);

        if (title && time > 0) {
            addReminder(title, time);
            form.reset();
        }
    });

    function addReminder(title, time) {
        const reminder = {
            title,
            time,
            id: Date.now(),
            timeoutId: null
        };

        reminder.timeoutId = setTimeout(() => {
            alert(`Reminder: ${reminder.title}`);
            removeReminder(reminder.id);
        }, time * 60000);

        reminders.push(reminder);
        renderReminders();
    }

    function removeReminder(id) {
        const index = reminders.findIndex(r => r.id === id);
        if (index > -1) {
            clearTimeout(reminders[index].timeoutId);
            reminders.splice(index, 1);
            renderReminders();
        }
    }

    function renderReminders() {
        remindersList.innerHTML = '';
        reminders.forEach(reminder => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${reminder.title} - ${reminder.time} minute(s)
                <button onclick="removeReminder(${reminder.id})">Delete</button>
            `;
            remindersList.appendChild(li);
        });
    }

    window.removeReminder = removeReminder; 
});
