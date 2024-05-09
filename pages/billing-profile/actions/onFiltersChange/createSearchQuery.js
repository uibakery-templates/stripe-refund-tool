const createStripeSearchQuery = (searchObject) => {
    const fileredSearchObject = {};    
    for (const key in searchObject) {
        if (searchObject[key] !== null && searchObject[key] !== '') {
            fileredSearchObject[key] = searchObject[key];
        }
    }
    const queryString = Object.entries(fileredSearchObject)
        .map(([key, value]) => `${key}:${JSON.stringify(value)}`)
        .join(' ');
    return queryString;
}


return createStripeSearchQuery({{data}});