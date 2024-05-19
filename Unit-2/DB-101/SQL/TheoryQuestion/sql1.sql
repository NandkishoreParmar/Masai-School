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

6. Print all details of orders which were ordered on the 16th of December 2021 and were paid through using payment 
with ID 4.
Sort the result in ascending order of OrderID.
SELECT * FROM Orders WHERE OrderDate = '2021-12-16' AND PaymentID = 4 ORDER BY OrderID ASC;

7. Identify the number of orders placed in each month of the year 2021.
Print Month followed by Number of Orders.
Sort the result set in ascending order of Month.
SELECT MONTH(OrderDate) AS Month,COUNT(*) AS NumberOfOrders
FROM Orders
WHERE YEAR(OrderDate) = 2021
GROUP BY  MONTH(OrderDate)
ORDER BY Month ASC;

8. Identify the Month-Year combination which had the Highest Customer Acquisition.
Print Month, Year, Number of Customers whose details were entered into the database.
NOTE : Ouput has only one line
SELECT MONTH(DateEntered) AS Month , Year(DateEntered) AS Year, Count(*) AS NoOFCustomer
FROM Customers
GROUP BY Month, Year
ORDER BY NoOFCustomer DESC
LIMIT 1;

9. Print the Month number and number of orders ordered in that particular month for each of the months of the 
year 2020.
Consider the dates from OrderDate for this calculation.
Print for only those months where the number of orders placed is less than 100.
Sort the result set in ascending order of Month number.
Use MONTH( Relevant_Column ) and YEAR( Relevant_Column ) to extract the month and year from the given date column
 for generating the result set.
SELECT MONTH(OrderDate) AS Month , COUNT(*) AS Numberoforders
FROM Orders
WHERE YEAR(OrderDate) = 2020
GROUP BY Month(OrderDate)
HAVING Numberoforders < 100
ORDER BY Month ASC;
 


