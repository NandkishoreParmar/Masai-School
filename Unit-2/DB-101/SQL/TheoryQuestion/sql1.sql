-- create database db101;

1. Print all details of Customers whose first names do not start with Vowels.
Sort the result in ascending order of CustomerID.
SELECT *
FROM Customers
WHERE LOWER(SUBSTR(FirstName, 1, 1)) NOT IN ('a', 'e', 'i', 'o', 'u')
ORDER BY CustomerID ASC;

2. Print ProductID and the combination of Brand Name and Product Name.
The Brand Name and the Product Name should be separated by a space, an hyphen, followed by another space.
Sort the result set in ascending order of ProductID.
SELECT ProductID, CONCAT( Brand," - " , Product) AS rebarnd FROM ProductsORDER BY ProductID ASC;

3. The table identifies the customers who do not have a last name stored in the database.
For such customers, you are then required to put 'Doe' as their last name along with the other details.
Sort the result in ascending order of CustomerID.
SELECT CustomerID,FirstName,
IF(LastName IS NULL, 'Doe', LastName) AS LastName,
City,State,Country ,Email
FROM Customers
WHERE LastName = 'Doe'
ORDER BY CustomerID ASC;

4.

