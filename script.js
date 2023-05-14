function table1Data(data) {
    const table_caption = document.getElementById("table1-caption")
    const table_body = document.getElementById("table1-body")
    const table_head = document.getElementById("table1-head")

    table_caption.innerText = 'Posts'
    table_head.innerHTML =
        `
            <th>ID</th>
            <th>Title</th>
            <th class="hide-1">Body</th>
            <th>UserID</th>
            <th class="hide-3">Tags</th>
            <th>Reactions</th>
        `
    data.forEach((ele) => {
        const tags = ele.tags[0] + ", " + ele.tags[1] + ", " + ele.tags[2]
        const tr = document.createElement("tr")
        tr.innerHTML =
            `
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td class="hide-1">${ele.body}</td>
                <td>${ele.userId}</td>
                <td class="hide-3">${tags}</td>
                <td>${ele.reactions}</td>
            `
        table_body.appendChild(tr)
    })
}

function table2Data(data) {
    const table_caption = document.getElementById("table2-caption")
    const table_body = document.getElementById("table2-body")
    const table_head = document.getElementById("table2-head")

    table_caption.innerText = 'Products'
    table_head.innerHTML =
        `
            <th>ID</th>
            <th class="hide-4">Category</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th class="hide-1">Discount Percentage</th>
            <th class="hide-2">Stock</th>
            <th class="hide-1">Discription</th>
            <th class="hide-2">Rating</th>   
        `
    data.forEach((ele) => {
        const tr = document.createElement("tr")
        tr.innerHTML =
            `
                <td>${ele.id}</td>
                <td class="hide-4">${ele.category}</td>
                <td>${ele.title}</td>
                <td>${ele.brand}</td>
                <td>${ele.price}</td>
                <td class="hide-1">${ele.discountPercentage}</td>
                <td class="hide-2">${ele.stock}</td>
                <td class="hide-1">${ele.description}</td>
                <td class="hide-2">${ele.rating}</td>
                
                
            `
        table_body.appendChild(tr)
    })
}

function table3Data(data) {
    const table_caption = document.getElementById("table3-caption")
    const table_body = document.getElementById("table3-body")
    const table_head = document.getElementById("table3-head")

    table_caption.innerText = 'Todos'
    table_head.innerHTML =
        `
            <th>ID</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>UserID</th>
        `
    data.forEach((ele) => {
        const tr = document.createElement("tr")
        let completed;
        if (ele.completed == true) {
            completed = "Yes"
        } else {
            completed = "No"
        }
        tr.innerHTML =
            `
                <td>${ele.id}</td>
                <td>${ele.todo}</td>
                <td>${completed}</td>
                <td>${ele.userId}</td>
            `
        table_body.appendChild(tr)
    })
}

function promiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    resolve(data);
                    table1Data(data.posts);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 1000);
        resolve('true');
    });
}

function promiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    resolve(data);
                    table2Data(data.products);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 2000);
        resolve('true');
    });
}

function promiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    resolve(data);
                    table3Data(data.todos);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 3000);
        resolve('Data');
    });
}

function loadData(event) {

    const body = document.querySelector("body")
    body.style.height = '100%'
    body.style.backgroundColor = 'black'
    event.target.style.display = 'none'

    const table = document.getElementById("tables")
    table.style.display = 'flex'

    promiseAPI1()
        .then(result1 => {
            if (result1)
                return promiseAPI2();
        })
        .then(result2 => {
            if (result2)
                return promiseAPI3();
        })
        .then(result3 => {
            console.log(result3 + " : ")
        })
        .catch(error => {
            console.log("Error: ", error)
        });
}
const button = document.getElementById("show-data")
button.addEventListener("click", loadData)