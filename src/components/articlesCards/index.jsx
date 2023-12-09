import React from 'react'
import ProductsCard from '../products/index.jsx'

const data = [
  {
    title: 'Adidas Gazelle Negras',
    img: 'https://img01.ztat.net/article/spp-media-p1/996d9b1c4ced4a288ce6035d1a376b2b/22a7ac07b7024f379852aee734d23c95.jpg?imwidth=1800',
    links:
      'https://www.zalando.es/adidas-originals-gazelle-zapatillas-ad112b0h9-q11.html',
    description:
      'Talla 38. No me importa que fuesen grises pero me gustan más las negras'
  },
  {
    title: 'Adidas Original Sudadera',
    img: [
      'https://img01.ztat.net/article/spp-media-p1/b05c8bdeafca4870ab00232a55626982/3576852f2ad1411f94016be0a0edae28.jpg?imwidth=1800',
      'https://img01.ztat.net/article/spp-media-p1/4ce98912f2c044fea5ec9d9fe8c26a77/5e45c5cbf2a7497bbb374de52829ef30.jpg?imwidth=1800',
      'https://img01.ztat.net/article/spp-media-p1/0322f21eca1e45749eca76cdc1312094/f8fedac662364553b39c4239d22b5b8c.jpg?imwidth=1800'
    ],
    links: [
      'https://www.zalando.es/adidas-originals-sudadera-medium-grey-heather-ad121j0qi-c11.html',
      'https://www.zalando.es/adidas-originals-originals-adicolor-relaxed-sudadera-orbit-green-ad121j0qi-n11.html',
      'https://www.zalando.es/adidas-originals-sudadera-mineral-green-ad121j0qi-m12.html'
    ],
    description:
      'Talla 38. Me gusta gris, aunque también me gusta en azul o verde'
  },
  {
    title: 'Pendiente earcuff de la Marca Áurea',
    img: 'https://aureacomplementos.com/cdn/shop/products/pe806p_1200x.jpg?v=1627841829',
    links: 'https://aureacomplementos.com/products/pendiente-ear-cuff-cadena',
    description: 'Pendiente que me gusta en dorado'
  },
  {
    title: 'Pendiente cadena de la Marca Áurea',
    img: 'https://aureacomplementos.com/cdn/shop/products/Aurea-Complementos-Pendiente-con-cadena-Oro-1_1200x.jpg?v=1613165198',
    links: 'https://aureacomplementos.com/products/pendiente-cadena-largo',
    description: 'Pendiente que me gusta en dorado'
  },
  {
    title: 'Pendientes laurel de la Marca Áurea',
    img: 'https://aureacomplementos.com/cdn/shop/products/Pendiente-Trepador-Laurel-Dorado-Par-1300x1300_1200x.jpg?v=1626536464',
    links: 'https://aureacomplementos.com/products/pendiente-trepador-laurel',
    description: 'Pendientes que me gustan en dorado'
  },
  {
    title: 'Pendientes esmeraldas de la Marca Áurea',
    img: 'https://aureacomplementos.com/cdn/shop/products/Aurea-Complementos-Pendiente-Mini-Esmeraldas-Oro_a9c17110-4e7a-45ca-a2e3-6be452ec5c2a_1200x.jpg?v=1613047565',
    links: 'https://aureacomplementos.com/products/aro-esmeraldas',
    description: 'Pendientes que me  en dorado'
  },

  {
    title: 'Abrigo Rosa de Pull & Bear',
    img: 'https://static.pullandbear.net/2/photos//2023/I/0/1/p/7752/330/620/7752330620_2_1_8.jpg?t=1698657325696&imwidth=1920',
    links:
      'https://www.pullandbear.com/es/abrigo-largo-pano-l07752330?categoryId=1010141506&cS=620#colorId=620',
    description: 'Creo que mi talla es S'
  },
  {
    title: 'Funda Ipad',
    img: [
      'https://m.media-amazon.com/images/I/71cT3PwXe7L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61lJoSH9n4L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61JML6OPdzL._AC_SX679_.jpg'
    ],
    links: [
      'https://www.amazon.es/EasyAcc-Premium-funci%C3%B3n-autom%C3%A1tico-pulgadas/dp/B0BVM7YHZV?th=1',
      'https://www.amazon.es/Billionn-iPad-pulgadas-2018-2017/dp/B08MQ9KMZD',
      'https://www.amazon.es/dp/B08XW1P8NJ/ref=twister_B08MQ9M1ZL?_encoding=UTF8&psc=1'
    ],
    description: 'Parecida a la que tengo ahora. Gris plata me gusta'
  },
  {
    title: 'Peñas Arriba',
    img: 'https://imagessl4.casadellibro.com/a/l/s7/14/9788412270914.webp',
    links:
      'https://www.todostuslibros.com/libros/penas-arriba_978-84-122709-1-4',
    description:
      'Libro que me gusta. Edición coleccionista 150 Aniversario. Fanes Editorial o Cátedra. Importante de conseguir en librerías'
  },
  {
    title: 'La Fortuna de los Rouggon / La Jauría',
    img: 'https://www.albaeditorial.es/wp-content/uploads/2020/10/9788484283225-la-fortuna-de-los-rougon-la-jauria-alba-editorial.jpg',
    links:
      'https://www.albaeditorial.es/clasicos/alba-clasica-maior/la-fortuna-de-los-rougon-la-jauria/',
    description:
      'Libro que me gusta. Son dos en uno. Editorial Alba. Importante de conseguir en librerías'
  },
  {
    title: 'Moby dick',
    img: 'https://static.cegal.es/imagenes/marcadas/9788417/978841718158.gif',
    links: 'https://www.todostuslibros.com/libros/moby-dick_978-84-17181-58-1',
    description:
      'Libro que me gusta. Editorial Navona Ineludibles o Valdemar. Importante de conseguir en librerías'
  },
  {
    title: 'El Monje',
    img: 'https://static.cegal.es/imagenes/marcadas/9788477/978847702047.gif',
    links: 'https://www.todostuslibros.com/libros/el-monje_978-84-7702-047-9',
    description:
      'Libro que me gusta. Editorial Valdemar Gótica. Importante de conseguir en librerías'
  },
  {
    title: 'Plancha Vertical',
    img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_94950590?x=600&y=450&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=600&ey=450&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=600&cdy=450',
    links:
      'https://www.mediamarkt.es/es/product/_plancha-de-vapor-25600-56-russell-hobbs-25-gmgmin-260-ml-blanco-94950588.html',
    description:
      'La elegida es solo un ejemplo orientativo ya que no tengo ninguna preferencia-'
  },
  {
    title: 'Cuaderno Paper Blanks Jubileo de Diamantes',
    img: 'https://cdn.paperblanks.com/product_images/9781439793671_Front.webp?1/16/2023',
    links:
      'https://www.paperblanks.com/es/product/journals/diamond-jubilee/pb9367-1',
    description: 'Tapa dura y tamaño Ultra'
  },
  {
    title: "Pijama Nintje Woman's Secret",
    img: 'https://womensecret.com/dw/image/v2/AAYL_PRD/on/demandware.static/-/Sites-gc-ws-master-catalog/default/dwf23fae98/images/hi-res/P_313607812FM.jpg?sw=800&sh=1200&sm=fit&q=50',
    links:
      'https://womensecret.com/es/es/mujer/dormir-y-homewear/pijama-100-algodon-miffy-cuadros/3136078.html',
    description: 'Talla M'
  },
  {
    title: 'Ropa de Deporte en General',
    img: 'https://static.lefties.com/9/static/images/lookbook/1297525/elements/5.jpg?20180504',
    links: 'https://www.zalando.es/deporte-mujer-home/',
    description: 'Depende de lo que sea, talla M o L'
  },
  {
    title: 'Cesta de Ikea',
    img: 'https://www.ikea.com/es/es/images/products/snidad-cesta-ratan__0713103_pe729252_s5.jpg?f=xl',
    links: 'https://www.ikea.com/es/es/p/snidad-cesta-ratan-30394944/',
    description: ''
  }
]

const ArticlesCards = () => {
  return (
    <main className=' bg-emerald-100/75 | text-black | p-7 | flex | flex-col | gap-4 | justify-center | items-center'>
      <h2 className='text-2xl'>Mi Carta:</h2>
      <section className='flex | flex-row | flex-wrap | justify-center | items-stretch | gap-4 | max-w-5xl'>
        {data.map(({ title, img, links, description }) => {
          return (
            <ProductsCard
              title={title}
              img={img}
              links={links}
              description={description}
            />
          )
        })}
      </section>
    </main>
  )
}

export default ArticlesCards
