https://gist.github.com/kevin336/acbb2271e66c10a5b73aacf82ca82784#file-employees-csv

create table empleado(
 EMPLOYEE_ID integer primary key,
 FIRST_NAME varchar(200),
 LAST_NAME varchar(200),
 EMAIL varchar(100),
 PHONE_NUMBER varchar(100),
 HIRE_DATE varchar(100),
 JOB_ID varchar(10),
 SALARY float,
 COMMISSION_PCT varchar(100),
 MANAGER_ID varchar(19) ,
 DEPARTMENT_ID integer
);

SHOW VARIABLES LIKE "secure_file_priv";

LOAD DATA INFILE 'C:\\ProgramData\\MySQL\\MySQL Server 9.1\\Uploads\\employees.csv'
INTO TABLE empleado
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

select *from empleado;

/*Determinar el monto del salario total que paga la empresa.*/
select SUM(salary) from empleado;

/*2.	Determinar el salario total que paga la empresa por departamento..*/
select DEPARTMENT_ID, SUM(salary) from empleado group by DEPARTMENT_ID;

/*3.	Determinar el salario total que paga la empresa por puesto de trabajo..*/
select JOB_ID, SUM(salary) from empleado group by JOB_ID;
/*4.	Determinar el salario total que paga la empresa por departamento y puesto de trabajo..*/
select DEPARTMENT_ID,JOB_ID, SUM(salary) from empleado group by DEPARTMENT_ID,JOB_ID;

/*Ejemplo count*/

/*Determinar el monto del salario total que paga la empresa.*/
select count(*) from empleado;

/*Determinar la cantidad de empleados por departamento..*/

select DEPARTMENT_ID, Count(*) from empleado group by DEPARTMENT_ID;

/*3.Determinar la cantidad de empleados por puesto de trabajo.
*/
select JOB_ID, COUNT(*) from empleado group by JOB_ID;
/*4.	Determinar la cantidad de puestos de trabajo que tiene cada departamento*/
select DEPARTMENT_ID,JOB_ID, COUNT(*) from empleado group by DEPARTMENT_ID,JOB_ID;

/*5.	Determinar la cantidad de departamentos que tienen mas de un puesto de trabajo*/
select DEPARTMENT_ID,JOB_ID, COUNT(*) from empleado group by DEPARTMENT_ID,JOB_ID
having count(*)>1;

select *from empleado where JOB_ID= 'IT_PROG';

/*Ejemplo MAX*/

/*Determinar el monto del salario total que paga la empresa.*/
select max(salary) from empleado;

/*Determinar la cantidad de empleados por departamento..*/

select DEPARTMENT_ID, max(salary) from empleado group by DEPARTMENT_ID;

/*3.Determinar la cantidad de empleados por puesto de trabajo.
*/
select JOB_ID, max(salary) from empleado group by JOB_ID;
/*4.	Determinar la cantidad de puestos de trabajo que tiene cada departamento*/

select DEPARTMENT_ID, MAX(salary) from empleado 
where DEPARTMENT_ID=90
group by DEPARTMENT_ID;

/*Ejemplo MIN*/

/*Determinar el monto del salario total que paga la empresa.*/
select min(salary) from empleado;

/*Determinar la cantidad de empleados por departamento..*/

select DEPARTMENT_ID, min(salary) from empleado group by DEPARTMENT_ID;

/*3.Determinar la cantidad de empleados por puesto de trabajo.
*/
select JOB_ID, min(salary) from empleado group by JOB_ID;
/*4.	Determinar la cantidad de puestos de trabajo que tiene cada departamento*/

select DEPARTMENT_ID, min(salary) from empleado 
where DEPARTMENT_ID=90
group by DEPARTMENT_ID;

create table producto(
partNumber varchar(100),
productType varchar(100),
categoryCode varchar(100),
brandCode varchar(100),
familyCode varchar(100),
lineCode varchar(100),
productSegmentCode varchar(100),
status varchar(100),
value varchar(100),
valueCurrency varchar(100),
defaultQuantityUnits varchar(100),
name varchar(100),
description varchar(1000),
plannerCode varchar(100),
sourceLink varchar(100)
);
LOAD DATA INFILE 'C:\\ProgramData\\MySQL\\MySQL Server 9.1\\Uploads\\Product_v6.csv'
INTO TABLE producto
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

select *from producto;

/*Ejemeplos con AVG*/

select AVG(value) from producto;

select AVG(value) precio_promedio, MAX(value) precio_mayor, SUM(value) ganancia_total from producto;



create table orders (
  orderIdentifier varchar(100),
  orderLineNumber varchar(100),
  orderType varchar(100),
  productpartNumber varchar(100),
  shipFromInstructionLocationlocationIdentifier varchar(100),
  shipToLocationlocationIdentifier varchar(100),
  status varchar(100),
  createdDate varchar(100),
  requestedShipDate varchar(100),
  requestedDeliveryDate varchar(100),
  plannedShipDate varchar(100),
  plannedDeliveryDate varchar(100),
  quantity varchar(100),
  quantityUnits varchar(100),
  productValue varchar(100),
  value varchar(100),
  valueCurrency varchar(100),
  shipmentCount varchar(100)
  )