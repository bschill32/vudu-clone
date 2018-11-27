select *
from cart
join movies on cart.movie_id = movies.id
order by movies.id
