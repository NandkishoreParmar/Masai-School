document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm");
    const priceGraph = document.getElementById("priceGraph");
    const ratingGraph = document.getElementById("ratingGraph");

    let products = [];

    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("productName").value;
        const price = parseFloat(document.getElementById("price").value);
        const rating = parseInt(document.getElementById("rating").value);

        const product = { name, price, rating };
        products.push(product);

        updateGraphs(products);
    });

    document.getElementById("sortPrice").addEventListener("click", () => {
        products.sort((a, b) => a.price - b.price);
        updateGraphs(products);
    });

    document.getElementById("sortRating").addEventListener("click", () => {
        products.sort((a, b) => a.rating - b.rating);
        updateGraphs(products);
    });

    function updateGraphs(data) {
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        data.forEach(product => {
            const priceBar = document.createElement('div');
            priceBar.className = 'bar price-bar';
            priceBar.style.width = `${product.price * 10}px`; // Adjust width based on price
            priceBar.textContent = `${product.name}: $${product.price}`;
            priceGraph.appendChild(priceBar);

            const ratingBar = document.createElement('div');
            ratingBar.className = 'bar rating-bar';
            ratingBar.style.width = `${product.rating * 20}px`; // Adjust width based on rating
            ratingBar.textContent = `${product.name}: ${product.rating} Stars`;
            ratingGraph.appendChild(ratingBar);
        });
    }
});
