const apiKey = '63814619'; // Replace with your OMDB API key
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const errorMessageDiv = document.getElementById('error-message');

let currentPage = 1;
let currentSearchTerm = '';

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        showErrorMessage('Please enter a movie title.');
        return;
    }
    currentSearchTerm = searchTerm;
    currentPage = 1;
    fetchMovies(searchTerm, currentPage);
});

prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        fetchMovies(currentSearchTerm, currentPage);
    }
});

nextButton.addEventListener('click', function () {
    currentPage++;
    fetchMovies(currentSearchTerm, currentPage);
});

function fetchMovies(searchTerm, page) {
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&page=${page}&apikey=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
                updatePagination(data.totalResults);
                errorMessageDiv.textContent = '';
            } else {
                showErrorMessage(data.Error);
            }
        })
        .catch(error => {
            showErrorMessage('An error occurred while fetching data.');
            console.error('Error:', error);
        });
}

function displayMovies(movies) {
    resultsDiv.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        resultsDiv.appendChild(movieDiv);
    });
}

function updatePagination(totalResults) {
    const totalPages = Math.ceil(totalResults / 10);
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

function showErrorMessage(message) {
    errorMessageDiv.textContent = message;
    resultsDiv.innerHTML = '';
    prevButton.disabled = true;
    nextButton.disabled = true;
}
