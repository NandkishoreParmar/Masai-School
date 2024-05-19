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

4.Print the customer ID, first name, last name, and the month name of their date of birth from the customers table. 
Sort the results by customer ID in ascedning order
SELECT CustomerID, FirstName, LastName, MONTHNAME(Date_of_Birth) AS Monthname FROM Customers ORDER BY CustomerID ASC;

5. We are working on a page that shows all the details in OrderDetails table with 10 rows in each page.
For example, if you use limit 10,10 it will return records 11 to 20 depending on orderby condition
Sorting should be done on OrderDetailID and then OrderID in ascending order, Display the records on 10th page
SELECT *
FROM OrderDetails
ORDER BY OrderDetailID ASC, OrderID ASC
LIMIT 10 OFFSET 90;


