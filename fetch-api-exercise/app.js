import 'bootstrap/dist/css/bootstrap.min.css';

async function getUsers() {
  try {
    const usersObj = await fetch('https://reqres.in/api/users/')
    const usersInfo = await usersObj.json()
    usersInfo.data.map(item => {
      document.querySelector('.row').innerHTML += `
      <div class="col">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title ">${item.first_name}</h5>
            <p class="card-text">
              ${item.email}
            </p>
            
          </div>
          <img src="${item.avatar}" class="card-img-bottom" alt="..." />
        </div>
      </div>`
    })
  } catch (error) {
    document.querySelector('.row').innerHTML += `<div class="err-msg">error: ${error.message}</div>`
  }
}

getUsers();