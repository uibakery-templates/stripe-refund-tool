SELECT
  *, count(*) OVER() AS total_count
FROM
  users
WHERE
  name LIKE ? OR email LIKE ? OR phone LIKE ?
LIMIT ?
OFFSET ?
