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