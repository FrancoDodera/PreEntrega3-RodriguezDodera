const productos = [
  {
    id: 1,
    nombre: "Teclado Redragon Kumara k552",
    precio: 12000,
    img: "https://www.mink.com.ar/qloud/ryr/fotos/19862-2.jpg",
  },
  {
    id: 2,
    nombre: "Teclado Redragon Dark Aveger",
    precio: 9500,
    img: "https://redragon.es/content/uploads/2021/04/DARK-AVENGER.png",
  },
  {
    id: 3,
    nombre: "Parlantes Usb",
    precio: 3000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoHd3h7_fWwsjOKMYTRP3ucCtgChAg0lvg-1rr_rQmrciKkN397cUBdf9BmfW9By6Vzg&usqp=CAU",
  },
  {
    id: 4,
    nombre: "Mouse Pad Gamer",
    precio: 2500,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLt4P-rOUh5ElXahSLdyLpeM_kQhqNP7CIDeNG6D-JVNQeTzeUrKlkE5Gr6oYSkGcYB8&usqp=CAU",
  },
  {
    id: 5,
    nombre: "Kit Gamer Noga",
    precio: 10800,
    img: "https://www.lpnk.com.ar/Temp/App_WebSite/App_PictureFiles/Items/NKB-216-ST-800_800.jpg",
  },
  {
    id: 6,
    nombre: "Mouse Inalambrico Genius",
    precio: 2500,
    img: "https://http2.mlstatic.com/D_NQ_NP_782736-MLA32146214199_092019-O.jpg",
  },
  {
    id: 7,
    nombre: "Teclado Noganet",
    precio: 6500,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrXXlGOg3hfhP5c2E4KGcmmM4wJNSorZC_DSjjLEi1L2KOAJG1SqXnC4rqRPjvn2BbrQ&usqp=CAU",
  },
  {
    id: 8,
    nombre: "Auriculares Redragon Lamia",
    precio: 13000,
    img: "https://http2.mlstatic.com/D_NQ_NP_927895-MLA41786682105_052020-O.jpg",
  },
  {
    id: 9,
    nombre: "Gabinete Redragon",
    precio: 9200,
    img: "https://redragon.es/content/uploads/2021/04/DEVASTATOR.png",
  },
  {
    id: 10,
    nombre: "Auriculares Redragon Zeus",
    precio: 10000,
    img: "https://hard-digital.com.ar/files/Auricular%20Redragon%20Zeus%202%20H510-1%20Negro/1.jpg",
  },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
guardarLocal("listaProductos", JSON.stringify(productos));

const miListaDeProductos = JSON.parse(localStorage.getItem("listaProductos"));
console.log(miListaDeProductos);

for (const id of productos) {
  console.log(id.nombre);
}
