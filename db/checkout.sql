delete from cart;

select * from cart
join boards on cart.board_id = boards.id
order by boards.id