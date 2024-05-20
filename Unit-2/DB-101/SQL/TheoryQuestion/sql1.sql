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
 
 10. Identify the count of orders Shipped in each of the first 6 months of 2021.
Print the month name followed by the count of orders.
Sort the result in descending order of Count.
SELECT 
    MONTHNAME(ShipDate) AS MonthName,
    COUNT(*) AS OrderCount
FROM 
    Orders
WHERE 
    YEAR(ShipDate) = 2021
    AND MONTH(ShipDate) BETWEEN 1 AND 6
GROUP BY 
    MONTHNAME(ShipDate), MONTH(ShipDate)
ORDER BY 
    OrderCount DESC;


11. Print the following table which depicts the length of first names in the customers table along with the corresponding count of such names.
Sort the result in ascending order of Length of FirstNames.
SELECT LENGTH(FirstName) AS len_of_fn, Count(*) AS Number_of_Names
FROM Customers
GROUP BY LENGTH(FirstName)
ORDER BY len_of_fn ASC;

12. Write a query to calculate the total count of unique Product IDs for each order in the Orderdetails table, where the count of unique Product IDs is exactly 5.
Print Order Id and total count.
Sort the output in ascending order of Order ID.
SELECT OrderID, COUNT(DISTINCT ProductID) AS num_prod
FROM OrderDetails

GROUP BY OrderId 
HAVING  COUNT(DISTINCT ProductId) = 5
ORDER BY OrderId ASC;


13. Print the days of the week(Sunday , Monday ...) ,the average order amount for that day, and the total number of orders placed on that day.
Order the output in descending order of average order amount.
SELECT
    DAYNAME(OrderDate) AS DayOfWeek,
    AVG(Total_order_amount) AS AverageOrderAmount,
    COUNT(*) AS TotalOrders
FROM
    Orders
GROUP BY
    DayOfWeek
ORDER BY
    AverageOrderAmount DESC;

14. What is the number of customer acquisitions for each month in the year 2021?
Print the month number and the count of customer acquisitions. Sort the table in ascending order by mont
SELECT     MONTH(DateEntered) AS MonthNumber,    COUNT(*) AS CustomerAcquisitions 
FROM Customers 
WHERE YEAR(DateEntered) = 2021 
GROUP BY MONTH(DateEntered) 
ORDER BY MonthNumber ASC;

15.The stakeholders wants to know about those 5 Sub categories who has the most products with no discount (consider looking at their Sale_price and Market_price values).
Give Sub Category name and total products with no discount.
Sort the result in descending order of total Product.

SELECT 
    Sub_Category,
    COUNT(*) AS TotalProducts
FROM 
    Products
WHERE 
    Sale_price = Market_price
GROUP BY 
    Sub_Category
ORDER BY 
    TotalProducts DESC
LIMIT 5;

16. Print the brand names and total number of products of those brands currently selling 
at a discount of more than 50%. Sort the table in descending order based on the number of products 
and in ascending order based on the brand names.
SELECT 
    Brand,
    COUNT(*) AS TotalProducts
FROM Products
WHERE (Market_price - Sale_price) / Market_price > 0.5
GROUP BY Brand
ORDER BY TotalProducts DESC, Brand ASC;
