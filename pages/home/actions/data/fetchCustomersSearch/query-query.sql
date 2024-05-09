SELECT
  *, count(*) OVER() AS total_count
FROM
  users
WHERE
  name LIKE {{`%${params.search}%`}} OR email LIKE {{`%${params.search}%`}} OR phone LIKE {{`%${params.search}%`}}
LIMIT {{params.limit}}
OFFSET {{params.offset * params.limit}}
