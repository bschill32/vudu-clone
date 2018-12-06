insert into cart(board_id, quantity)
values ($1, 1);

select * from cart
join boards on cart.board_id = boards.id
order by boards.id;
