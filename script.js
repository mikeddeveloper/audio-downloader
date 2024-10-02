const audioMessages = [
    {
        title: "Message 1",
        file: "path/to/message1.mp3",
        description: "An inspiring message about faith."
    },
    {
        title: "Message 2",
        file: "path/to/message2.mp3",
        description: "A sermon on community and love."
    }
    // Add more messages as needed
];

const messageList = document.getElementById('message-list');

audioMessages.forEach(message => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div>
            <h3>${message.title}</h3>
            <p>${message.description}</p>
        </div>
        <a href="${message.file}" class="download-button" download>Download <i class="fas fa-download"></i></a>
    `;
    messageList.appendChild(listItem);
});

// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
