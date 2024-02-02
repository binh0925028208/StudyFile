create database baiTap;
use baiTap;

-- bài tập 1+2+3
create table studentsDetail(
id  INT not null unique primary key auto_increment,
lastName varchar(25) not null,
firstName varchar(25) not null,
fullName varchar(25) not null,
gender int(3) not null default 1,
birthDay date not null,
scholarship int(25) not null
);
select * from studentsDetail order by gender ASC;
select * from studentsDetail order by scholarship DESC;
alter table studentsDetail 
add column birthPlace varchar(25) not null;

-- lấy học sinh nhiều tuổi nhất
select * from studensDetail ORDER BY DATEDIFF(CURDATE(), birthday) DESC limit 1;

-- bài tập 4
create table studyModule(
moduleId  INT not null unique primary key auto_increment,
moduleName varchar(25) not null,
quantity int(100) not null 
)
select * from studyModule where moduleName like "T%";

-- bài tập 5
select fullName, birthDay,gender from studentsDetail where fullName like "%i";

-- bài tập 6
create table department(
departmentId  INT not null unique primary key auto_increment,
departmentName varchar(25) not null
)
select * from department where departmentName like "%N%";

-- bài tập 7
select fullName from studentsDetail where fullName like "%Thị%";

-- bài tập 8
select id,fullName,departmentId,scholarship from studentsDetail where scholarship>10000 order by id DESC;

-- bài tập 9
select fullName,departmentId,birthPlace,scholarship from department where scholarship>15000 and birthPlace = "Hà Nội";

-- bài tập 10
select id,departmentId,gender from studentsDetail where departmentName = "Anh Văn" and "Vật Lí";

-- bài tập 11 
select id,birthDay,birthPlace,scholarship from studentsDetail where birthDay between 1991/01/01 and 1992/06/05;

-- bài tập 12 
select id, birthDay,gender,departmentId from studentsDetail where scholarship between 80000 and 15000;