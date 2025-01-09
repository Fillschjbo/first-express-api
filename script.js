async function getData() {
    const response = await fetch("http://localhost:3000/fragrances");
    const data = await response.json();
    console.log(data)
    document.querySelector(".container").innerText = data;
}

async function postData() {
    const response = await fetch("http://localhost:3000/fragrances", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            brand: "",
            name: "angels share",
            scents: ["cinnamon", "apple", "booze"]
        })
    })
    const data = await response.json();
    console.log(data)
}

getData()
postData()