create table users (
    id serial primary key,
    name varchar,
    email varchar,
    password varchar
);

create table movies (
    id serial primary key,
    title text,
    rating decimal,
    image text
    price real
);

create table cart(
movie_id integer references movies(id),
quantity integer
);

insert into movies (title, rating, image, price)
values ('Mission: Impossible - Fallout', 7.9, 'https://image.tmdb.org/t/p/w1280/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg', 14.99),
('Fantastic Beasts: The Crimes of Grindelwald (2018)', 7.1, 'https://image.tmdb.org/t/p/w1280/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg', 9.99),
('Venom', 7.0, 'https://image.tmdb.org/t/p/w1280/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg', 19.99)

-- update movies 
-- set price = 9.99 where id = 2

-- delete from movies
-- where id between 4 and 8
