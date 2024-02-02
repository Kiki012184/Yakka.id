document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const itemList = document.getElementById('itemList');

            data.forEach(item => {
                const card = `
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="container-fluid contentyk-bento">
                        <img src="${item.image}" class="shadow" alt="${item.name}">
                        <div class="p-1">
                          <h6>${item.name}</h6>
                          <p>${item.description}</p>
                          <a href="${item.link}" class="btn"><i class="bi bi-download"></i> Download</a>
                        </div>
                      </div>
                    </div>
                `;
                itemList.innerHTML += card;
            });
        })
        .catch(error => console.error('Error:', error));
});