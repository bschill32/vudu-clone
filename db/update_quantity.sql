update cart
set quantity = $2
where movie_id = $1;

select * from cart
join movies on cart.movie_id = movies.id
order by movies.id
