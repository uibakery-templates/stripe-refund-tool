SELECT
  *,
  count(*) OVER () AS total_count
FROM
  users
LIMIT
  {{params.limit}}
OFFSET
  {{(params?.offset ?? 0) * params.limit}}
