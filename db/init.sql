DROP TABLE IF EXISTS houses;

CREATE TABLE houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
    
);

insert into houses
(name, address, city, state, zip)
values
('California ranch style', '14820 Church ave.', 'Morgan Hill', 'CA', 95037)