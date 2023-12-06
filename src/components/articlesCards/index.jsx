import React from 'react'
import ProductsCard from '../products/index.jsx'

const antiguos = [
  // {
  //   title: "2 Ventiladores BitFenix 140mm",
  //   img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2LMW5HQzN7sslnFpMQE9dej40FoRPCRtS2Ymq5yNujN0ApsN4TEy1KriaVIWd8kVwjySHfAl4n133szS9CZw0AmYjFc71pKGxMdBU2nNJASqt0OaoMrlntg&usqp=CAE",
  //   links:
  //     "https://www.pccomponentes.com/bitfenix-spectre-pro-ventilador-rgb-140x140mm-con-controlador?srsltid=AYJSbAeOkMzYMBkbLNLS-YmTriT4OyTiVkbV5BAWga4tF2-qBJN1NAuQZh0",
  //   description:
  //     "Es un ventilador para refrigerar el PC. Pido 2 unidades que son las que encajan.",
  // },
  // {
  //   title: "Ventilador Aerocool Mirage 120mm",
  //   img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqjq7tnwdbhkbV2wiISH99gYsdYzWvbhrkqL8FaaxY0LK7VEdT9asS3F-uenBK8TDu5RBkKqgL-X0QobUPbElPEkz8OPsGgq1USAfut3pTXS1WlEtlPxuh&usqp=CAE",
  //   links:
  //     "https://www.pccomponentes.com/aerocool-mirage-12-argb-ventilador-120mm?from=kelkoo&utm_source=366479&utm_medium=afi&utm_campaign=es-go.kelkoogroup.net&awc=20981_1670346228_8e7110aaaf256de4a7374eca544098fc&utm_term=deeplink&utm_content=dc1-kls-prod-ls-02.prod.dc1.kelkoo.net_1670346227865_2636539",
  //   description:
  //     "Es otro ventilador para el PC. Junto con los anteriores, completaría todos los huecos.",
  // },
  // {
  //   title: "Funda Ipad",
  //   img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiIDcvaCIPPc3oc0FUkkGWCXYPsEN9rOtQROeNkqNFOh5cSYKc84clgMALr9T5OK-uyB2KXpY7SmOfUhIs12lLdZB_2f89YJ81nXZTvOA7h4I_V7cXKzUE1A&usqp=CAE",
  //   links:
  //     "https://www.amazon.es/TiMOVO-Compatible-Generation-Inteligente-Transparente/dp/B0B2WPJG15/ref=asc_df_B07WPBSCBL/?tag=googshopes-21&linkCode=df0&hvadid=356462045935&hvpos=&hvnetw=g&hvrand=3916404597152604432&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1005421&hvtargid=pla-826489013455&th=1",
  //   description: "Funda para mi Ipad ya que la mía está ya muy desgastada.",
  // },
  // {
  //   title: "Dualsense PS5 (Segunda Mano)",
  //   img: "https://m.media-amazon.com/images/I/51KNE0DS4vS._AC_SX679_.jpg",
  //   links:
  //     "https://www.game.es/ACCESORIOS/CONTROLLER/PLAYSTATION-5/MANDO-INALAMBRICO-DUALSENSE-BLANCO/183226",
  //   description:
  //     "Mando bluetooth para el PC. Lo pido de segunda mano de la tienda GAME, que viene con garantía. ⚠ATENCIÓN: buscad las etiquetas que aseguran la garantía de GAME 😬. Quizás se pueda encontrar nuevo en otra tienda por el mismo precio.",
  // },
  // {
  //   title: "Ratón Logitech G-502 x",
  //   img: "https://m.media-amazon.com/images/I/71tFbRI585L._AC_SX425_.jpg",
  //   links:
  //   "https://www.amazon.es/Logitech-G502-Rat%C3%B3n-cable-%C3%B3ptico-mec%C3%A1nicos/dp/B07W6HSTNR/ref=asc_df_B07W6HSTNR/?tag=googshopes-21&linkCode=df0&hvadid=593216731606&hvpos=&hvnetw=g&hvrand=15087772364694237309&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1005421&hvtargid=pla-1813364525207&th=1",
  //   description: "Otra opción de ratón 🐁",
  // },
  // {
  //   title: "Welcome to the Moon",
  //   img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjz4G0DcP7wJuFUZKkk5W0nyJd4NZjPO_e_c3XLCjWQbE-ulU9rtf4pOkVDvNj5LjMuEtQi4jcS3tLRSk0n1KF-RoMYBpmc-QrtGLr73f_d_3MEggYlwx3&usqp=CAE",
  //   links: "https://www.juegakens.com/comprar/welcome-to-the-moon/",
  //   description: "Juego de mesa que podría estar agotado 😬",
  // },
  // {
  //   title: "Welcome hacia el Perfecto Hogar",
  //   img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1OUqe87YMbTOtp8MWwZOhwWZZ5f-arndbnTB6wxh0tsJzhxok0XbulMx2UisTICEJzUK-K1vGddZfLHGCzjv9qqHdNymkUe_D6AG6s6z1UBjFtnV0A69w&usqp=CAE",
  //   links:
  //     "https://jugamosuna.es/tienda/2961/comprar-welcome-hacia-el-perfecto-hogar-barato.html",
  //   description: "Juego de mesa",
  // },
]

const data = [
  {
    title: 'Mindbug',
    img: 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/m/i/mindbug.jpg',
    links: 'https://zacatrus.es/mindbug.html',
    description: 'Juego de Mesa - €'
  },
  {
    title: "It's a Wonderful Kingdom",
    img: 'https://www.juegakens.com/wp-content/uploads/2022/05/its-a-wonderful-kingdom-1.jpg',
    links: 'https://www.juegakens.com/comprar/its-a-wonderful-kingdom/',
    description: 'Juego de Mesa - €'
  },
  {
    title: 'La Resistencia de Avalon',
    img: 'https://www.juegakens.com/wp-content/uploads/2022/09/La-Resistencia-Avalon.jpg',
    links: 'https://www.juegakens.com/comprar/la-resistencia-avalon/',
    description: 'Juego de Mesa - €'
  },
  {
    title: 'Arnak: Líderes de la expedición',
    img: 'https://www.juegakens.com/wp-content/uploads/2022/06/Las-ruinas-perdidas-de-Arnak-Lideres-de-la-expedicion-1.jpg',
    links:
      'https://www.juegakens.com/comprar/ruinas-perdidas-de-arnak-lideres-de-la-expedicion/',
    description: 'Expansión del juego Arnak - €'
  },
  {
    title: 'Alhambra',
    img: 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/a/l/alhambra_2020.jpg',
    links: 'https://zacatrus.es/alhambra-edicion-2020.html',
    description: 'Juego de mesa - €'
  },
  {
    title: 'The Island',
    img: 'https://www.juegakens.com/wp-content/uploads/2022/07/the-island.jpg',
    links: 'https://www.juegakens.com/comprar/the-island/',
    description: 'Juego de mesa - €€'
  },
  {
    title: 'Colt Express',
    img: 'https://jugamosuna.es/tienda/32211-large_default/comprar-colt-express-barato.jpg',
    links: 'https://jugamosuna.es/tienda/321/comprar-colt-express-barato.html',
    description: 'Juego de Mesa - €€'
  },
  {
    title: 'Arnak: La Expedicion Perdida',
    img: 'https://www.juegakens.com/wp-content/uploads/2023/10/las-ruinas-perdidas-de-arnak-la-expedicion-perdida.png',
    links:
      'https://www.juegakens.com/comprar/ruinas-perdidas-de-arnak-la-expedicion-perdida/',
    description: 'Expansión del juego Arnak - €€'
  },
  {
    title: "It's a Wonderful World",
    img: 'https://www.juegakens.com/wp-content/uploads/2022/06/Its-a-wonderful-world-1.jpg',
    links:
      'https://jugamosuna.es/tienda/8343/comprar-its-a-wonderful-world-barato.html',
    description: 'Juego de mesa - €€'
  },
  {
    title: 'Clank!',
    img: 'https://media.zacatrus.com/catalog/product/cache/f22f70ef8ee260256901b557cf6bf49a/c/l/clank_el_juego_de_mesa.jpg',
    links: 'https://zacatrus.es/clank.html',
    description: 'Juego de mesa - €€'
  },
  {
    title: 'Stone Age',
    img: 'https://www.juegakens.com/wp-content/uploads/2022/07/stone-age.jpg',
    links: 'https://www.juegakens.com/comprar/stone-age/',
    description: 'Juego de mesa - €€'
  },
  {
    title: 'King of Monster Island',
    img: 'https://jugamosuna.es/tienda/73687-large_default/comprar-king-of-monster-island-barato.jpg',
    links:
      'https://jugamosuna.es/tienda/23156/comprar-king-of-monster-island-barato.html',
    description: 'Juego de mesa - €€€'
  },
  {
    title: 'Teraforming Mars',
    img: 'https://jugamosuna.es/tienda/16921-large_default/comprar-terraforming-mars-barato.jpg',
    links:
      'https://jugamosuna.es/tienda/1447/comprar-terraforming-mars-barato.html',
    description: 'Juego de mesa - €€€'
  },
  {
    title: 'Everdell',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRwtc9J_ObJHaYniA2WjgUA9FQwSGUqqN8TAa0Mh95ZMPPQD5gSmlEro2iqrMBWr1sY0tj2t-8xHOmDTUXuRR_zuylyMa0jj1ihjAhIJSbZ&usqp=CAE',
    links: 'https://jugamosuna.es/tienda/6408/comprar-everdell-barato.html',
    description: 'Juego de mesa - €€€'
  },
  {
    title: 'Aventureros al Tren: La vuelta al Mundo',
    img: 'https://jugamosuna.es/tienda/32702-large_default/comprar-aventureros-al-tren-la-vuelta-al-mundo-barato.jpg',
    links:
      'https://jugamosuna.es/tienda/965/comprar-aventureros-al-tren-la-vuelta-al-mundo-barato.html',
    description: 'Juego de mesa - €€€'
  },
  {
    title: 'GloomHaven: Fauces del León',
    img: 'https://www.juegakens.com/wp-content/uploads/2022/09/Gloomhaven-fauces-del-leon.jpg',
    links: 'https://www.juegakens.com/comprar/gloomhaven-fauces-del-leon/',
    description: 'Juego de mesa - €€€'
  },
  {
    title: 'Hub Usb',
    img: 'https://m.media-amazon.com/images/I/71GgBiwJ37L._AC_SX679_.jpg',
    links: 'https://www.amazon.es/dp/B0BW2TLQ8S?ref=emc_p_m_5_i_atc',
    description: 'Adaptador para ampliar puertos al Macbook Pro'
  },
  {
    title: 'Alfombrilla para el escritorio',
    img: 'https://m.media-amazon.com/images/I/81QAGGtYzCL._AC_SX679_.jpg',
    links:
      'https://www.amazon.es/Silent-Monsters-Alfombrilla-Gaming-Oficina/dp/B01FFFSORA?th=1',
    description: 'Alfombrilla para el escritorio. La quiero de 90x40cm'
  },
  {
    title: 'Soporte Macbook',
    img: 'https://thumb.pccomponentes.com/w-530-530/articles/40/408926/1615-nox-axys-stand-elevador-plegable-para-portatil-hasta-17-0c1b5a4f-13bd-40ae-87e6-76edb59872bd.jpg',
    links:
      'https://www.pccomponentes.com/nox-axys-stand-elevador-plegable-para-portatil-hasta-17',
    description:
      'Soporte para usar en conjunto con el monitor del pc el macbook o el ipad'
  },
  {
    title: 'Adaptador para mandos USB',
    img: 'https://m.media-amazon.com/images/I/61m7nRDnAzL._AC_SX679_.jpg',
    links:
      'https://www.amazon.es/MAYFLASH-Bluetooth-Raspberry-Compatible-Controller/dp/B09YRBZZQ3?th=1',
    description: 'Con este adaptador podre usaar el mando de la ps5 en la ps4'
  },
  {
    title: 'Disco SSD para el PC',
    img: 'https://m.media-amazon.com/images/I/91-FVVyFqCL._AC_SX679_.jpg',
    links:
      'https://www.amazon.es/WD_BLACK-SN770-hasta-velocidad-lectura/dp/B09QV692XY?th=1',
    description: 'Disco para aumentar el almacenamiento del ordenador'
  },
  {
    title: 'Módulos Ram para el PC',
    img: 'https://thumb.pccomponentes.com/w-530-530/articles/21/217575/1.jpg',
    links:
      'https://www.pccomponentes.com/team-group-delta-white-rgb-ddr4-3200-pc4-25600-16gb-2x8gb-cl16',
    description:
      '2 Módulos de Ram para aumentar la memoria de procesamiento del ordernador'
  },
  {
    title: 'Zapatillas Adidas Gazelle',
    img: 'https://m.media-amazon.com/images/I/71l4PPW1dxL._AC_UX625_.jpg',
    links:
      'https://www.amazon.es/Originals-Gazelle-Zapatillas-Colores-Collegiate/dp/B01EI9HE5W/ref=asc_df_B01EI9HE5W/?tag=googshopes-21&linkCode=df0&hvadid=195273257015&hvpos=&hvnetw=g&hvrand=17255770962371093460&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1005421&hvtargid=pla-177220134010&psc=1',
    description:
      'Tenis Adidas azules. Mi talla es la 42 1/2, pero también me valdría la 42 2/3 o 43'
  },
  {
    title: 'Botines Panama Jack',
    img: 'https://img01.ztat.net/article/spp-media-p1/d25da9ef6ff1375eb297b920639de3e3/b8fb68b4b38b45e5b8c27c78741e3029.jpg?imwidth=1800&filter=packshot',
    links:
      'https://www.zalando.es/panama-jack-botas-para-la-nieve-bark-pa312d00t-o11.html',
    description:
      'Tenis Adidas azules. Mi talla es la 42 1/2, pero también me valdría la 42 2/3 o 43'
  },
  {
    title: 'Diseño Final Fantasy',
    img: 'https://srv.latostadora.com/image/cloud_strife_soldier_first_class--id:02c0fc4a-23d0-47fd-a60e-54b4a31aba1f;s:H_A5;b:f2f2f2;w:520;h:0;f:f;i:1356235191734135623201709265.jpg',
    links:
      'https://www.latostadora.com/web/cloud_strife_soldier_first_class/5191734',
    description:
      'Diseño que me gusta y que se puede aplicar a camisetas, sudaderas o inlcuso tazas. Talla M'
  },
  {
    title: 'Diseño Cowboy bebop 2',
    img: 'https://srv.latostadora.com/image/mono_racer_sumi-e--id:967035f8-67a4-47f3-a2bb-8f8530557c9d;s:H_A5;b:f2f2f2;w:520;h:0;f:f;i:1356231194057135623201709265.jpg',
    links: 'https://www.latostadora.com/web/mono_racer_sumi-e/1194057',
    description:
      'Diseño que me gusta y que se puede aplicar a camisetas, sudaderas o inlcuso tazas. Talla M'
  },
  {
    title: 'Diseño Legends Psx',
    img: 'https://srv.latostadora.com/image/the_legends_1995-2005--id:3602b6e5-e523-4e27-a4f5-12724c18fd87;s:H_A20;b:f2f2f2;w:520;h:0;f:f;i:13562313229761356232017092620.jpg',
    links: 'https://www.latostadora.com/web/the_legends_1995-2005/1322976',
    description:
      'Diseño que me gusta y que se puede aplicar a camisetas, sudaderas o inlcuso tazas. Talla M'
  },
  {
    title: 'Diseño One Piece 1',
    img: 'https://srv.latostadora.com/image/3d2y_-_one_piece--id:0e0f7dda-b78a-4dc4-b4cd-9e1697a4adbd;s:H_A5;b:f2f2f2;w:520;f:f;i:1356237104982135623201709265.jpg',
    links: 'https://www.latostadora.com/web/3d2y_-_one_piece/7104982?s=H_A5',
    description:
      'Diseño que me gusta y que se puede aplicar a camisetas, sudaderas o inlcuso tazas. Talla M'
  },
  {
    title: 'Diseño One Piece 2',
    img: 'https://srv.latostadora.com/image/piratas_ukiyo-e--id:5603028a-17b7-429c-b4cc-c181f9d20edd;s:H_A1;b:f2f2f2;w:520;f:f;i:1356235443024135623201709261.jpg',
    links: 'https://www.latostadora.com/web/piratas_ukiyo-e/5443024',
    description:
      'Diseño que me gusta y que se puede aplicar a camisetas, sudaderas o inlcuso tazas. Talla M'
  }
]

const ArticlesCards = () => {
  return (
    <main className='bg-gray-100/75 | text-black | p-7 | flex | flex-col | gap-4 | justify-center | items-center'>
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
