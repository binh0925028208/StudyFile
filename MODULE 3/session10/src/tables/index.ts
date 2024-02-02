export const createTableUsers = `
CREATE TABLE IF NOT EXISTS users (
    id int auto_increment not null unique primary key,
    name varchar(255) not null,
    gender int not null
)
`;

export const createTableInfor = `
CREATE TABLE IF NOT EXISTS information (
    id int auto_increment not null unique primary key,
    userId int unique not null,
    address varchar(255) not null,
    age int not null,
    check(age>1)
)
`;