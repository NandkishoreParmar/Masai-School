document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const genre = document.getElementById('book-genre').value;
    const publishedYear = document.getElementById('book-year').value;
    const available = document.getElementById('book-available').checked;

    const newBookRef = db.ref('books').push();
    newBookRef.set({
        title,
        author,
        genre,
        publishedYear: parseInt(publishedYear),
        available
    });
});

document.getElementById('member-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('member-name').value;
    const membershipDate = document.getElementById('member-date').value;
    const active = document.getElementById('member-active').checked;

    const newMemberRef = db.ref('members').push();
    newMemberRef.set({
        name,
        membershipDate,
        active
    });
});
