const products = [
    { 
        id: '1', 
        name: 'Alba latex', 
        price: 1000, 
        category: 'interior', 
        img:'https://www.sibaco.com/archivos/website/productos/520/principal.png', 
        stock: 25, 
        description:'Latex ideal para el interior del hogar'
    },

    { id: '2', 
    name: 'Alba color mate', 
    price: 800, 
    category: 'interior', 
    img:'https://dcdn.mitiendanube.com/stores/002/552/837/products/diseno-sin-titulo-2023-07-16t205323-4031-e246b925b2db43799416895516305694-1024-1024.webp', 
    stock: 16, 
    description:'Alba color mate buenisimo'},

    { id: '3', 
    name: 'Tersuave esmalte sintetico', 
    price: 1200, 
    category: 'exterior', 
    img:'https://acdn.mitiendanube.com/stores/001/743/130/products/tersilux-esmalte-sintetico-3en1-br-4l-2-copia-cf28313f854889b4fa16970451593921-1024-1024.webp', 
    stock: 2, 
    description:'pintura 3 en 1 ideal para muebles de exterior'},

    { id: '4', 
    name: 'Alba enduido', 
    price: 800, 
    category: 'exterior', 
    img:'https://pisano.vtexassets.com/arquivos/ids/292468/52.png?v=638404128935230000',
    stock: 5,
    description:'Enduido especial para grietas del exterior'},

    { id: '5', 
    name: 'Alba alta temperatura', 
    price: 800, 
    category: 'exterior', 
    img:'https://www.pintureriasimagen.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/p/p/pp-000706_pp-000706_0_2022-07-08_20_00_10.jpg', 
    stock: 16, 
    description:'Pintura Sintética Brillante especialmente formulada para soportar temperaturas hasta 250°C. Calidad Premium'},

    { id: '6', 
    name: 'Alba pileta', 
    price: 800, 
    category: 'exterior', 
    img:'https://www.pintureriasambito.com/media/catalog/product/cache/415c0a5e055fde9ea8ce42fba96d9c3b/d/u/duralba-piscinas.jpg', 
    stock: 16, 
    description:'Látex para Piletas de Natación Mate. Formulación especial a base de polímeros acrílicos que le otorga a la película impermeabilidad, gran adherencia y flexibilidad. Evita la adherencia de algas, hongos, moho y suciedad. Resistente a los productos recomendados para el tratamiento del agua'},

    { id: '7', 
    name: 'Sinteplast thinner standard', 
    price: 800, 
    category: 'diluyente', 
    img:'https://pintureriasagitario.com.ar/wp-content/uploads/2018/05/Thinner-Standard.jpg', 
    stock: 16, 
    description:'producto ideal para aquellos que buscan un diluyente y solvente de alta calidad. Con su marca reconocida, Sinteplast, garantiza resultados óptimos en cada uso.'},

    { id: '8', 
    name: 'Solvex thinner multiusos', 
    price: 800, 
    category: 'diluyente', 
    img:'https://www.colorin.com/wp-content/uploads/2020/01/solvex-mult-4-litro.png', 
    stock: 16, 
    description:'Solvex Multiuso es un thinner de evaporación rápida y regulada. Permite la aplicación de lacas y impresiones nitrocelulósicas y nitrosintéticas como selladores y fondos para la industria de la madera, muebles y también para productos automotor y acabados en general. Puede usarse como un excelente auxiliar para tareas de limpieza de resinas, aceites, grasas, ceras, sustancias bituminosas y carbonosas, favoreciendo así múltiples aplicaciones en el hogar, el taller y la industria'},

    { id: '9', 
    name: 'Tersuave thinner oro', 
    price: 800, 
    category: 'diluyente', 
    img:'https://pintureriasoceano.com.ar/wp-content/uploads/2021/06/Thinner-Oro.jpg', 
    stock: 16, 
    description:'Tersuave Thinner Oro forma parte de una línea de productos que permiten diluir eficazmente pinturas y lacas de la línea de automotor e industrial, otorgando alta performance de brillo y un acabado final inmejorable de acuerdo al magnífico balance de sus componentes, favoreciendo la aplicación con soplete según las exigencias pretendidas. Thinner Oro permite obtener brillos duraderos y una extraordinaria nivelación en un rango de evaporación equilibrada, logrando excelente comportamiento a mediano y alto rango de temperaturas, evitando el blanqueo y el velado por su extraordinaria fórmula Hi-Performance hasta con 80 % HRA a 20°C. Importante: NO apto para productos poliuretánicos.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id ===productId))
        },1000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category ===categoryId))
        },1000)
    })
}