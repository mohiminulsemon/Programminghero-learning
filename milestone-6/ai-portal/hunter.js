const loadAllData = (x) => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showData(data.data , x));
}


loadAllData(1);

// see more button

document.getElementById('btn-show-all').addEventListener('click', function(){
    toggleSpinner(true);
    loadAllData(2);
  })


//   displaying cards

const showData = (data, x) => {

    const cardContainer = document.getElementById('card-container');

       if(x === 1){
        toggleSpinner(true);
        data.tools.slice(0,6).forEach(element => {
            const cardDiv = document.createElement('div');
                cardDiv.classList.add('col');
                cardDiv.innerHTML = `
                <div class="card h-100 p-2">
                <img style="height: 200px" src="${element.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                  <p class="card-text">
                  ${generateFeatures(element.features)}
                  </p>
                  
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <div>
                    <h4>${element.name}</h4>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>${element.published_in}</p>
                  </div>
                  <button class="btn" onclick="loadDetails('${element.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg></button>
                </div>
              </div>
                `;
            cardContainer.appendChild(cardDiv);
        });
        toggleSpinner(false);
       }
       else{
        cardContainer.textContent = '';

        data.tools.forEach(element => {
            const cardDiv = document.createElement('div');
                cardDiv.classList.add('col');
                cardDiv.innerHTML = `
                <div class="card h-100 p-2">
                <img style="height: 200px" src="${element.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                  <p class="card-text">
                  ${generateFeatures(element.features)}
                  </p>
                  
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <div>
                    <h4>${element.name}</h4>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>${element.published_in}</p>
                  </div>
                  <button class="btn" onclick="loadDetails('${element.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg></button>
                </div>
              </div>
                `;
            cardContainer.appendChild(cardDiv);
        });
         const showall = document.getElementById('show-all');
         showall.classList.add('d-none')

          // stop spinner or loader
    toggleSpinner(false);
       }
}

const generateFeatures = (features) => {
    let featureHTML = '';
    for (let i = 0; i < features.length ; i++) {
        featureHTML += `<li>${features[i]}</li>`;
    }
    return featureHTML;
  }

// toggle spinner

  const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


// modals section

function loadDetails(id) {
    let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showModals(data));
}

const showModals = data =>{
    const modalSection = document.getElementById('modal-section');
    modalSection.textContent = '';

    const modalDiv = document.createElement('div');

    modalDiv.innerHTML= `
    <div class="d-md-flex justify-content-around">
    <div class="border rounded w-md-50">
    <div>
    <h3 class="mb-2">${data.data.description}</h3>
    </div>
    <div class="d-flex justify-content-around">
         <div class="shadow rounded p-3" style="width: 30%">
             <h6>${data.data.pricing[0].price}</h6>
             <h6>${data.data.pricing[0].plan}</h6>
         </div>
         <div class="shadow rounded p-3" style="width: 30%">
             <h6>${data.data.pricing[1].price}</h6>
             <h6>${data.data.pricing[1].plan}</h6>
          </div>
          <div class="shadow rounded p-3" style="width: 30%">
            <h6>${data.data.pricing[2].price}</h6>
            <h6>${data.data.pricing[2].plan}</h6>
           </div>
     </div>
  </div> 

  <div class="card w-md-50">
<img src="${data.data.image_link[0]}" class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text fs-3">${data.data.input_output_examples[0].input}</p>
  <p class="card-text fs-5">${data.data.input_output_examples[0].output}</p>
</div>
</div>
    </div>  
    `;
    modalSection.appendChild(modalDiv);
}