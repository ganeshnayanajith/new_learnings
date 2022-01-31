DROP TABLE Customers;
DROP TABLE Orders;
DROP TABLE shippers;

CREATE TABLE Customers (
	CustomerID int NOT NULL AUTO_INCREMENT,
    CustomerName varchar(255),
    ContactName varchar(255),
    Address varchar(255),
    City varchar(255),
    PostalCode varchar(255),
    Country varchar(255),
    PRIMARY KEY (CustomerID)
);

CREATE TABLE Orders (
	OrderID int NOT NULL AUTO_INCREMENT,
    CustomerID int NOT NULL,
    EmployeeID int NOT NULL,
    ShipperID int NOT NULL,
    OrderDate DATE,
    PRIMARY KEY (OrderID)
);

CREATE TABLE Shippers (
	ShipperID int NOT NULL,
    ShipperName varchar(255),
    PRIMARY KEY (ShipperID)
);

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Alfreds Futterkiste','Maria Anders','Obere Str. 57','Berlin','12209','Germany');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Ana Trujillo Emparedados y helados','Ana Trujillo','Avda. de la Constitución 2222','México D.F.','05021','Mexico');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Antonio Moreno Taquería','Antonio Moreno','Mataderos 2312','México D.F.','05023','Mexico');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Around the Horn','Thomas Hardy','120 Hanover Sq.','London','WA1 1DP','UK');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Berglunds snabbköp','Christina Berglund','Berguvsvägen 8','Luleå','S-958 22','Sweden');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Blauer See Delikatessen','Hanna Moos','Forsterstr. 57','Mannheim','68306','Germany');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Blondel père et fils','Frédérique Citeaux','24, place Kléber','Strasbourg','67000','France');

INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (1,100,1000,'2022-01-01');
INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (1,101,1001,'2022-01-02');
INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (2,100,1002,'2022-01-03');
INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (3,102,1003,'2022-01-04');
INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (4,100,1004,'2022-01-05');
INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (5,101,1005,'2022-01-06');
INSERT INTO Orders (CustomerID, EmployeeID, ShipperID, OrderDate) 
VALUES (6,102,1006,'2022-01-07');

INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1000,'Speedy Express');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1001,'United Package ');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1002,'Federal Shipping ');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1003,'United Express');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1004,'Package Express');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1005,'Federal Express');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1006,'Shipping Express');
INSERT INTO Shippers (ShipperID, ShipperName) 
VALUES (1007,'Express Express');

SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM Shippers;

SELECT DISTINCT Country FROM Customers;
SELECT COUNT(DISTINCT Country) FROM Customers;
SELECT COUNT(DISTINCT Country) AS DIFFERENT_COUNTRIES FROM Customers;
-- MS ACCESS
SELECT Count(*) AS DistinctCountries FROM (SELECT DISTINCT Country FROM Customers);
--
SELECT * FROM Customers WHERE Country='Germany' AND City='Berlin';
SELECT * FROM Customers WHERE City='Berlin' OR City='München';
SELECT * FROM Customers WHERE NOT Country='Germany';
SELECT * FROM Customers WHERE Country='Germany' AND (City='Berlin' OR City='München');
SELECT * FROM Customers WHERE NOT Country='Germany' AND NOT Country='USA';
--
SELECT * FROM Customers ORDER BY Country;
SELECT * FROM Customers ORDER BY Country ASC;
SELECT * FROM Customers ORDER BY Country DESC;
SELECT * FROM Customers ORDER BY Country, CustomerName;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
--
INSERT INTO Customers (CustomerName, City, Country) VALUES ('Cardinal', 'Stavanger', 'Norway');
--
SELECT CustomerName, ContactName, Address FROM Customers WHERE Address IS NOT NULL;
SELECT CustomerName, ContactName, Address FROM Customers WHERE Address IS NULL;
SELECT * FROM Customers WHERE Address IS NULL;
--
UPDATE Customers SET ContactName='Alfred Schmidt', City='Frankfurt' WHERE CustomerID=1;
--
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
DELETE FROM Customers;
-- SQL Server/MS Access
-- SELECT TOP 3 * FROM Customers;
-- SELECT TOP 50 PERCENT * FROM Customers;
-- SELECT TOP 3 * FROM Customers WHERE Country='Germany';
-- Oracle
-- SELECT * FROM Customers FETCH FIRST 3 ROWS ONLY;
-- SELECT * FROM Customers FETCH FIRST 50 PERCENT ROWS ONLY;
-- SELECT * FROM Customers WHERE Country='Germany' FETCH FIRST 3 ROWS ONLY;
-- MySQL
SELECT * FROM Customers LIMIT 3;
SELECT * FROM Customers WHERE Country='Germany' LIMIT 3;
--
SELECT MIN(Price) AS SmallestPrice FROM Products;
SELECT MIN(CustomerID) AS SmallesID FROM customers;
SELECT MAX(CustomerID) AS LargestID FROM customers;
SELECT COUNT(CustomerID) FROM customers;
SELECT SUM(CustomerID) FROM customers;
SELECT AVG(CustomerID) FROM customers;
--
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';
SELECT * FROM Customers WHERE CustomerName LIKE '%a';
SELECT * FROM Customers WHERE CustomerName LIKE '%or%';
SELECT * FROM Customers WHERE CustomerName LIKE '_r%';
SELECT * FROM Customers WHERE CustomerName LIKE 'a__%';
SELECT * FROM Customers WHERE CustomerName LIKE 'a%o';
SELECT * FROM Customers WHERE CustomerName NOT LIKE 'a%';
SELECT * FROM Customers WHERE CustomerName LIKE '[bsp]%';
SELECT * FROM Customers WHERE CustomerName LIKE '[a-c]%';
SELECT * FROM Customers WHERE CustomerName LIKE '[!bsp]%';
SELECT * FROM Customers WHERE CustomerName NOT LIKE '[bsp]%';
--
SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');
SELECT * FROM Customers WHERE Country NOT IN ('Germany', 'France', 'UK');
SELECT * FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders);
--
SELECT * FROM Customers WHERE CustomerID BETWEEN 2 AND 5;
SELECT * FROM Customers WHERE CustomerID NOT BETWEEN 2 AND 5;
--
SELECT * FROM Customers WHERE CustomerID BETWEEN 1 AND 7 AND CustomerID NOT IN (SELECT CustomerID FROM Orders);
--
SELECT * FROM Customers WHERE CustomerName BETWEEN 'Alfreds Futterkiste' AND 'Antonio Moreno Taquería' ORDER BY CustomerName;
SELECT * FROM Customers WHERE CustomerName NOT BETWEEN 'Alfreds Futterkiste' AND 'Antonio Moreno Taquería' ORDER BY CustomerName;
SELECT * FROM Orders WHERE OrderDate BETWEEN '2022-01-03' AND '2022-01-05';
--
SELECT CustomerID AS ID, CustomerName AS "Customer Name" FROM Customers;
SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address FROM Customers;
SELECT o.OrderID, o.OrderDate, c.CustomerName FROM Customers AS c, Orders AS o WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName FROM Customers, Orders WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;
--
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Customers.CustomerID=Orders.CustomerID;
--
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ( (Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
--
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
--
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
--
SELECT Orders.OrderID, Customers.CustomerName
FROM Customers
RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
--
-- SELECT Customers.CustomerName, Orders.OrderID
-- FROM Customers
-- FULL JOIN Orders ON Customers.CustomerID=Orders.CustomerID
-- ORDER BY Customers.CustomerName;
--
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID AND A.City = B.City
ORDER BY A.City;
--
-- SELECT City FROM Customers
-- UNION
-- SELECT City FROM Suppliers
-- ORDER BY City;
SELECT CustomerID FROM Customers
UNION
SELECT ShipperID FROM Orders;
--
SELECT CustomerID FROM Customers
UNION ALL
SELECT OrderID FROM Orders;
--
SELECT CustomerID FROM Customers
WHERE Country='Germany'
UNION
SELECT ShipperID FROM Orders;
--
SELECT CustomerID FROM Customers
WHERE Country='Germany'
UNION ALL
SELECT OrderID FROM Orders;
--
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
--
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID);
--
SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders 
FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;
--
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 1;
--
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 0
ORDER BY COUNT(CustomerID) DESC;
--
SELECT Customers.CustomerName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM (Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
GROUP BY CustomerName
HAVING COUNT(Orders.OrderID) > 1;
--
SELECT *
FROM Customers
WHERE EXISTS (SELECT * FROM Orders WHERE Orders.CustomerID = Customers.CustomerID);
--
SELECT CustomerID, CustomerName
FROM Customers
WHERE CustomerID = ANY
  (SELECT CustomerID
  FROM Orders);
--
SELECT ALL CustomerID, CustomerName
FROM Customers
WHERE TRUE;
--
SELECT CustomerID, CustomerName
FROM Customers
WHERE CustomerID = ALL (SELECT CustomerID FROM Orders WHERE ShipperID > 10000);
--
-- SELECT * INTO CustomersBackup2017 FROM Customers;
-- SELECT * INTO newtable FROM oldtable WHERE 1 = 0;
-- INSERT INTO Customers (CustomerName, City, Country) SELECT SupplierName, City, Country FROM Suppliers;

--
Select CustomerID, upper(CustomerName) from customers;
Select CustomerID, substring(CustomerName,1,3) from customers;
Select CustomerID, INSTR(CustomerName, BINARY'a') from customers;
Select CustomerID, RTRIM(CustomerName) from customers;