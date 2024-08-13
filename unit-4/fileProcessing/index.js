function processFiles(files) {
    // Calculate the total size of all files
    const totalSize = files.reduce((accumulator, file) => accumulator + file.size, 0);

    // Sort files by size in descending order and get the 5 largest files
    const largestFiles = files
        .sort((a, b) => b.size - a.size)
        .slice(0, 5)
        .map(file => ({ name: file.name, size: file.size }));

    // Organize files by extension
    const filesByExtension = files.reduce((accumulator, file) => {
        // Extract the file extension
        const extension = file.name.split('.').pop();

        // Initialize the array for this extension if it doesn't exist
        if (!accumulator[extension]) {
            accumulator[extension] = [];
        }

        // Add the file name to the array for this extension
        accumulator[extension].push(file.name);

        return accumulator;
    }, {});

    // Return the summary object
    return {
        totalSize,
        largestFiles,
        filesByExtension
    };
}

// Example usage
const files = [
  { name: "document1.pdf", size: 500 },
  { name: "document2.pdf", size: 700 },
  { name: "image1.png", size: 200 },
  { name: "image2.png", size: 300 },
  { name: "text1.txt", size: 100 },
  { name: "text2.txt", size: 150 },
  { name: "photo1.jpg", size: 400 },
  { name: "photo2.jpg", size: 350 },
  { name: "program1.exe", size: 1000 },
  { name: "program2.exe", size: 1200 },
  { name: "data1.csv", size: 600 },
  { name: "data2.csv", size: 500 },
  { name: "report1.pdf", size: 800 },
  { name: "report2.pdf", size: 900 },
  { name: "image3.png", size: 250 },
  { name: "text3.txt", size: 175 },
  { name: "photo3.jpg", size: 450 },
  { name: "document3.pdf", size: 750 }
];

console.log(processFiles(files));
