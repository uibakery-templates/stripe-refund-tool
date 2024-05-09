const totalCount = data[0]?.total_count ?? 0;
data.map((customer) => {
  delete customer['total_count'];
  return customer;
});
return {{ { data, totalCount } }};