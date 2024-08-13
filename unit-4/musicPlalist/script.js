document.addEventListener('DOMContentLoaded', () => {
    const songForm = document.getElementById('song-form');
    const songListDiv = document.getElementById('song-list');
    const songList = JSON.parse(localStorage.getItem('playlist')) || [];

    const renderSongs = () => {
        songListDiv.innerHTML = '';  // Clear previous content
        songList.forEach((song, index) => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');

            songDiv.innerHTML = `
                <p>Title: ${song.title}</p>
                <p>Artist: ${song.artist}</p>
                <p>Duration: ${song.duration}</p>
                <p>Genre: ${song.genre}</p>
                <button class="edit-button" data-index="${index}">Edit</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            songListDiv.appendChild(songDiv);
        });

        // Add event listeners for edit and delete buttons
        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', () => editSong(button.dataset.index));
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', () => deleteSong(button.dataset.index));
        });
    };

    const addSong = () => {
        const title = document.getElementById('song-title').value;
        const artist = document.getElementById('song-artist').value;
        const duration = document.getElementById('song-duration').value;
        const genre = document.getElementById('song-genre').value;

        if (title && artist && duration && genre) {
            songList.push({ title, artist, duration, genre });
            localStorage.setItem('playlist', JSON.stringify(songList));
            renderSongs();
            songForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    };

    const editSong = (index) => {
        const song = songList[index];
        const newTitle = prompt('Enter new title', song.title);
        const newArtist = prompt('Enter new artist', song.artist);
        const newDuration = prompt('Enter new duration', song.duration);
        const newGenre = prompt('Enter new genre', song.genre);

        if (newTitle && newArtist && newDuration && newGenre) {
            songList[index] = { title: newTitle, artist: newArtist, duration: newDuration, genre: newGenre };
            localStorage.setItem('playlist', JSON.stringify(songList));
            renderSongs();
        } else {
            alert('All fields are required for editing.');
        }
    };

    const deleteSong = (index) => {
        songList.splice(index, 1);
        localStorage.setItem('playlist', JSON.stringify(songList));
        renderSongs();
    };

    document.getElementById('add-song').addEventListener('click', addSong);
    renderSongs();
});
