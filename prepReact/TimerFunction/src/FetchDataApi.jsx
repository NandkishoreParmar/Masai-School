import React, { useState, useEffect } from "react";

const SimpleFetch = () => {
  const [products, setProducts] = useState([]); // Store fetched products
  const [sortBy, setSortBy] = useState("price"); // Default sorting by price
  const [sortOrder, setSortOrder] = useState("asc"); // Default ascending order

  // Run only once when component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        console.log("Fetched data:", data); // Log data to console
        setProducts(data); // Store data in state
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []); // Run only once when component mounts

  // Sort products based on selected criteria and order
  const sortProducts = () => {
    const sortedProducts = [...products];
    
    sortedProducts.sort((a, b) => {
      // Compare based on sort criteria (price or title)
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortBy === "title") {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return sortOrder === "asc" ? -1 : 1;
        if (titleA > titleB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      }
      return 0;
    });

    return sortedProducts;
  };

  // Handle sorting selection changes
  const handleSortChange = (e) => {
    const { name, value } = e.target;
    if (name === "sortBy") {
      setSortBy(value);
    } else if (name === "sortOrder") {
      setSortOrder(value);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      {/* Dropdowns for sorting */}
      <div>
        <select name="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>

        <select name="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Display sorted products */}
      <ul>
        {sortProducts().map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <img style={{ height: "100px", width: "100px" }} src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleFetch;
