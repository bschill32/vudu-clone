insert into cart(movie_id, quantity)
values ($1, 1);

select * from cart
join movies on cart.movie_id = movies.id
order by movies.id
