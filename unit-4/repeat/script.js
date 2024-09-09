// Example data
const files = [
    "documents.txt", "presentation1.pdf", "song1.mp3", "installer1.exe", "archive1.rar", "report1.docx",
    "image1.jpg", "graphic1.png", "animation1.gif", "compressed1.zip", "document2.txt", "presentation2.pdf",
    "song2.mp3", "installer2.exe", "archive2.rar", "report2.docx", "image2.jpg", "graphic2.png", "animation2.gif",
    "compressed2.zip", "presentation3.pdf", "installer3.exe", "archive3.rar", "report3.docx", "image3.jpg",
    "graphic3.png", "animation3.gif", "compressed3.zip", "document4.txt", "presentation4.pdf", "song4.mp3",
    "installer4.exe", "archive4.rar", "report4.docx", "image4.jpg", "graphic4.png", "animation4.gif",
    "compressed4.zip", "documents.txt", "presentation5.pdf", "song5.mp3", "installer5.exe", "archive5.rar",
    "report5.docx", "image5.jpg", "graphic5.png", "animation5.gif", "compressed5.zip", "document6.txt",
    "presentation6.pdf", "song6.mp3", "installer6.exe", "archive6.rar", "report6.docx", "image6.jpg",
    "graphic6.png", "animation6.gif", "compressed6.zip", "document7.txt", "presentation7.pdf", "song7.mp3",
    "installer7.exe", "archive7.rar", "report7.docx", "image7.jpg", "graphic7.png", "animation7.gif",
    "compressed7.zip", "documents.txt", "presentation8.pdf", "song8.mp3", "installer8.exe", "archive8.rar",
    "report8.docx", "image8.jpg", "graphic8.png", "animation8.gif", "compressed8.zip", "document9.txt",
    "presentation9.pdf", "song9.mp3", "installer9.exe", "archive9.rar", "report9.docx", "image9.jpg",
    "graphic9.png", "animation9.gif", "compressed9.zip", "document10.txt", "presentation10.pdf", "song10.mp3",
    "installer10.exe", "archive10.rar", "report10.docx", "image10.jpg", "graphic10.png", "animation10.gif",
    "compressed10.zip"
];

// Create a file data array with objects
const data = files.map((file, index) => {
    const parts = file.split('.');
    return {
        id: index + 1,
        name: parts[0],
        type: parts[1]
    };
});

const foldersElement = document.getElementById('folders');
const filesElement = document.getElementById('files');
let currentSortOrder = 'asc';

// Categorize files by type
const fileTypes = [...new Set(data.map(file => file.type))];

fileTypes.forEach(type => {
    const folder = document.createElement('div');
    folder.classList.add('folder');
    folder.innerText = type;
    folder.onclick = () => displayFiles(type);
    foldersElement.appendChild(folder);
});

function displayFiles(type) {
    filesElement.innerHTML = `
        <div id="file-list-header">
            <input type="text" id="search" placeholder="Search files..." oninput="searchFiles('${type}')">
            <button onclick="toggleSortOrder('${type}')">Toggle Sort Order</button>
        </div>
        <div id="file-list"></div>
    `;
    renderFileList(type);
}

function renderFileList(type, query = '') {
    const fileListElement = document.getElementById('file-list');
    fileListElement.innerHTML = '';
    let filteredFiles = data.filter(file => file.type === type && file.name.toLowerCase().includes(query.toLowerCase()));
    filteredFiles = sortFiles(filteredFiles, currentSortOrder);
    filteredFiles.forEach(file => {
        const fileElement = document.createElement('div');
        fileElement.classList.add('file');
        fileElement.innerText = `${file.name}.${file.type}`;
        fileListElement.appendChild(fileElement);
    });
}

function searchFiles(type) {
    const query = document.getElementById('search').value;
    renderFileList(type, query);
}

function toggleSortOrder(type) {
    currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
    renderFileList(type);
}

function sortFiles(files, order) {
    return files.sort((a, b) => {
        if (order === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
}
