delete from cart
where board_id = $1;

select * from cart
join boards on cart.board_id = boards.id
order by boards.id