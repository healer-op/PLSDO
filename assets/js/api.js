const feature = "https://script.google.com/macros/s/AKfycbw2yWSKz5iWq1X0cJ3jCv4sbhMV1TvinAQVbgoccHnlhNS1KroMxrppr6Q01TA8o2aG/exec"

async function healer() {
    try {
        let data = await (await fetch(`${feature}`)).json();
        data = data.reverse()
        const featured_html = data.map((f, i) => {
            return `
            <div class="info">
                <img
                    src="${data[i].image}">
                <h5>${data[i].username}</h5>
            </div>`;
        }).join('');
        document.querySelector("#username").insertAdjacentHTML("afterbegin", featured_html);
    } catch (error) {
        console.log(error)
    }
}
healer()