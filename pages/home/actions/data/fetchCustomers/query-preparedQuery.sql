SELECT
  *,
  count(*) OVER () AS total_count
FROM
  users
LIMIT
  ?
OFFSET
  ?
