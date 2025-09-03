fetch('https://fakestoreapi.com/products')
.then (response => response.json())
.then(objectData => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}" alt="${values.title}" /></td>
        </tr>`;
    })
    document.getElementById("tablebody").innerHTML = tableData;
})
.catch(error => console.log("Error fetching data" + error))