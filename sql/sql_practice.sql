DROP TABLE Customers;
DROP TABLE Orders;

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

SELECT * FROM customers;
SELECT * FROM Orders;

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