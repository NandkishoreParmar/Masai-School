const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const currentWeatherEl = document.getElementById('current-weather');
const forecastContainerEl = document.getElementById('forecast-container');
const cityInput = document.getElementById('city-input');
const recentSearchesEl = document.getElementById('recent-searches');
const themeToggleBtn = document.getElementById('theme-toggle');
const paginationBtns = document.querySelector('.pagination');
const pageNumberEl = document.getElementById('page-number');
const toggleScrollBtn = document.getElementById('toggle-scroll');

let currentCity = '';
let pageNumber = 1;
let useInfiniteScroll = false;
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
let theme = localStorage.getItem('theme') || 'light';

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    displayRecentSearches();
    cityInput.addEventListener('input', debounce(fetchCityWeather, 500));
    paginationBtns.addEventListener('click', handlePagination);
    toggleScrollBtn.addEventListener('click', toggleInfiniteScroll);
    themeToggleBtn.addEventListener('click', toggleTheme);
});

function applyTheme() {
    document.body.classList.toggle('dark-theme', theme === 'dark');
}

function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme();
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function fetchCityWeather() {
    const city = cityInput.value.trim();
    if (city && city !== currentCity) {
        currentCity = city;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => displayCurrentWeather(data))
            .catch(error => displayError(error));
        if (!recentSearches.includes(city)) {
            recentSearches.push(city);
            localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
            displayRecentSearches();
        }
    }
}

function displayCurrentWeather(data) {
    currentWeatherEl.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${Math.round(data.main.temp - 273.15)}°C</p>
        <p>${data.weather[0].description}</p>
    `;
    fetchCityForecast();
}

function fetchCityForecast() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&cnt=30`)
        .then(response => response.json())
        .then(data => displayForecast(data.list))
        .catch(error => displayError(error));
}

function displayForecast(forecast) {
    forecastContainerEl.innerHTML = '';
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = pageNumber * 10;
    const paginatedForecast = forecast.slice(startIndex, endIndex);
    
    paginatedForecast.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        forecastContainerEl.innerHTML += `
            <div class="forecast-item">
                <p>${date}</p>
                <p>${Math.round(item.main.temp - 273.15)}°C</p>
                <p>${item.weather[0].description}</p>
            </div>
        `;
    });
}

function handlePagination(e) {
    if (e.target.id === 'prev-page' && pageNumber > 1) {
        pageNumber--;
    } else if (e.target.id === 'next-page') {
        pageNumber++;
    }
    pageNumberEl.textContent = pageNumber;
    fetchCityForecast();
}

function toggleInfiniteScroll() {
    useInfiniteScroll = !useInfiniteScroll;
    toggleScrollBtn.textContent = useInfiniteScroll ? 'Use Pagination' : 'Use Infinite Scroll';
    if (useInfiniteScroll) {
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
    }
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        pageNumber++;
        fetchCityForecast();
    }
}

function displayRecentSearches() {
    recentSearchesEl.innerHTML = '';
    recentSearches.forEach(city => {
        const btn = document.createElement('button');
        btn.textContent = city;
        btn.addEventListener('click', () => {
            cityInput.value = city;
            fetchCityWeather();
        });
        recentSearchesEl.appendChild(btn);
    });
}

