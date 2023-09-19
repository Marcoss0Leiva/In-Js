var swiper = new Swipe(".mySwiper", {
  sliderPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      sliderPerView: 1,
    },
    520: {
      sliderPerView: 2,
    },
    950: {
      sliderPerView: 3,
    },
  },
});

//Carrito
const carrito = document.getElementById("carrito");
const elememtos = document.getElementById("lista");
const elementos2 = document.getElementById("lista-2");
const lista = document.quearySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
  elememtos.addEventListener("click", comprarElementos);
  elememto2.addEventListener("click", comprarElementos);

  carrito.addEventListener("click", eliminarElemento);

  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

  document.addEventListener("DOMcontentLoaded", leerLocalStorage);
}

function insetarCarrito(elemento) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
        <img src= ${elemento.imagen}" width=100">
    </td>

    <td>
         ${elemento.titulo}
    </td>

    <td>
         ${elemento.precio}
    </td>

    <td>
        < a herf ="#" class="borrar" data-id=${elemento.titulo}>X<>
    </td>
    
    `;
  lista.appendChild(row);
  guardarElementoLocalStore(elemento);
}

function eliminarElemento(e) {
  e.preventDefault();

  let elemento, elementoId;

  if (e.target.classList.contains("borrar")) {
    e.target.parenElement.parenElement.remove();
    elemento = e.target.parenElement.parenElement;
    elementoId = elemento.quearySelector("a").getAttibutte("data-id");
  }

  eliminarElementoLocalStorage(elementoId);
}

function vaciarCarrito() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  varciarLocalStorage();
  return false;
}

function guardarElementoLocalStore(elemento) {
  let elememtos;

  elememtos = obtenerelementosLocalStorage();

  elememtos.push(elemento);

  localStorage.setItem("elementos", JSON.stringify(elememtos));
}

function obtenerelementosLocalStorage() {
  let elementosLS;

  if (localStorage.getItem("elemento") === null) {
    elementosLS = [];
  } else {
    elementosLS = JSON.parse(localStorage.getItem("elememtos"));
  }

  return elememtosLS;
}

function leerLocalStorage() {
  let elememtosLS;

  elememtosLS = obtenerelementosLocalStorage();

  elememtosLS.forEach(function (elememtos) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        <img src= ${elemento.imagen}" width=100">
    </td>

    <td>
         ${elemento.titulo}
    </td>

    <td>
         ${elemento.precio}
    </td>

    <td>
        < a herf ="#" class="borrar" data-id=${elemento.titulo}>X<>
    </td>
    
    `;
    lista.appendChild(row);
  });
}

function eliminarElementoLocalStorage(elemento) {
  let elememtosLS;

  elememtosLS = obtenerelementosLocalStorage();
  elememtosLS.forEach(function (elememtosLS, index) {
    if (elememtosLS.id === elememtos) {
      elememtosLS.splice(index, 1);
    }
  });

  localStorage.setItem("elemento", JSON.stringify(elememtosLS));
}

function varciarLocalStorage() {
  localStorage.crear();
}
