create table users (
    id serial primary key,
    name varchar,
    email varchar,
    password varchar
);

create table boards (
    id serial primary key,
    name text,
    dim text,
    image text,
    price real
);

create table cart(
board_id integer references boards(id),
quantity integer
);

insert into boards (name, dim, image, price)
values ('El Patrón', '6’0 20.00 2.75 35.00 L', 'https://lostsurfboards.net/wp-content/uploads/2018/08/BBRND.png', 789.00),
('Retro Gun', '6’11 19.63 2.75 40.00 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/BOARDS-WEB.png', 899.99),
('Retro Ripper', '6’0 19.38 2.50 32.25 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/driver.png', 799.85),
('Sabo Jaj', '6’0 19.25 2.50 31.00 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/prs.png', 649.99),
('Crowd Killer', '7’0 21.25 2.80 46.00 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/pr.png', 859.00),
('RNF Retro', '6’0 22.00 2.63 40.50 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/RNF.png', 669.99),
('Puddle Jumper HP', '6’0 21.50 2.66 38.00 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/PJHP.png', 559.00),
('Uber Driver', '6’0 20.00 2.50 33.50 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/uber-1.png', 749.99),
('Psycho Killer', '6’0 20.50 2.63 35.50 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/psk.png', 829.99),
('Puddle Fish', '6’0 20.00 2.50 33.00 L', 'https://lostsurfboards.net/wp-content/uploads/2018/05/PUDDLE.png', 579.00)



-- update boards 
-- set price = 9.99 where id = 2

-- delete from boards
-- where id between 4 and 8

-- drop table movies

-- e'6\'0" 20.00 2.75 35.00'
