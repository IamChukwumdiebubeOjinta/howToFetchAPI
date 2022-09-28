//  Using the fetch function to retrieve the data from the api
fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify({
            title: 'Test Post',
            body: 'Test Content',
            id: 100,
            userId: 50
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())  // you can phase the response
    .then((data) => {
        console.log(data); // you can play with the response
    }).catch((err) => {
        console.log(err);  // you can catch the error
    });
