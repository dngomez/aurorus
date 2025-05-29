export const BAR_PEOPLE = 9
export const TABLE_PEOPLE = 6
export const TABLE_NUMBER = 3
export const TABLE_USAGE_TIME = 60
export const MAX_BOOK_DAYS = 14
export const LATEST_BOOK_HOUR = 18

export const DAYS = [
  { letter: "L", name: "lunes", number: 1 },
  { letter: "M", name: "martes", number: 2 },
  { letter: "M", name: "miércoles", number: 3 },
  { letter: "J", name: "jueves", number: 4 },
  { letter: "V", name: "viernes", number: 5 },
  { letter: "S", name: "sábado", number: 6 },
  { letter: "D", name: "domingo", number: 7 },
]

export const MONTHS = [
  { letter: "Ene", name: "Enero", number: 1 },
  { letter: "Feb", name: "Febrero", number: 2 },
  { letter: "Mar", name: "Marzo", number: 3 },
  { letter: "Abr", name: "Abril", number: 4 },
  { letter: "May", name: "Mayo", number: 5 },
  { letter: "Jun", name: "Junio", number: 6 },
  { letter: "Jul", name: "Julio", number: 7 },
  { letter: "Ago", name: "Agosto", number: 8 },
  { letter: "Sep", name: "Septiembre", number: 9 },
  { letter: "Oct", name: "Octubre", number: 10 },
  { letter: "Nov", name: "Noviembre", number: 11 },
  { letter: "Dic", name: "Diciembre", number: 12 },
]

export const LOCATION_OPTIONS = [
  { value: "bar", label: "Barra" },
  { value: "table", label: "Mesa" },
]

export const DISHES = [
  {
    name: "Enchiladas Verdes",
    shortDescription: "Tortillas rellenas de pollo con salsa verde.",
    longDescription:
      "Deliciosas enchiladas rellenas de pollo desmenuzado y cubiertas con salsa verde, queso fresco y cebolla. Servidas con arroz y frijoles.",
    image: "/plato2.jpg",
    price: 10.0,
    category: "entrada",
  },
  {
    name: "Tacos al Pastor",
    shortDescription: "Tacos con carne de cerdo adobada y piña.",
    longDescription:
      "Tacos tradicionales de carne de cerdo marinada en adobo, asada a la perfección y servida con piña fresca, cebolla y cilantro en tortillas de maíz.",
    image: "/plato2.jpg",
    price: 8.5,
    category: "entrada",
  },
  {
    name: "Pozole Rojo",
    shortDescription: "Sopa espesa de maíz con carne de cerdo y chiles.",
    longDescription:
      "Un plato clásico mexicano, consistente en maíz pozolero cocido con carne de cerdo, chiles guajillo y especias, servido con lechuga, rábanos y limón.",
    image: "/plato2.jpg",
    price: 9.0,
    category: "entrada",
  },
  {
    name: "Chiles en Nogada",
    shortDescription: "Pimientos rellenos con picadillo y salsa de nueces.",
    longDescription:
      "Pimientos poblanos rellenos de un picadillo de carne, fruta y especias, cubiertos con salsa de nueces blancas y decorados con granada y perejil.",
    image: "/plato2.jpg",
    price: 12.0,
    category: "entrada",
  },
  {
    name: "Ceviche de Camarón",
    shortDescription: "Camarones marinados en limón con cebolla y cilantro.",
    longDescription:
      "Camarones frescos marinados en jugo de limón, mezclados con cebolla, tomate, cilantro y un toque de chile, servido frío como aperitivo.",
    image: "/plato2.jpg",
    price: 7.5,
    category: "entrada",
  },
  {
    name: "Enchiladas Verdes",
    shortDescription: "Tortillas rellenas de pollo con salsa verde.",
    longDescription:
      "Deliciosas enchiladas rellenas de pollo desmenuzado y cubiertas con salsa verde, queso fresco y cebolla. Servidas con arroz y frijoles.",
    image: "/plato2.jpg",
    price: 10.0,
    category: "fondo",
  },
  {
    name: "Tacos al Pastor",
    shortDescription: "Tacos con carne de cerdo adobada y piña.",
    longDescription:
      "Tacos tradicionales de carne de cerdo marinada en adobo, asada a la perfección y servida con piña fresca, cebolla y cilantro en tortillas de maíz.",
    image: "/plato2.jpg",
    price: 8.5,
    category: "fondo",
  },
  {
    name: "Pozole Rojo",
    shortDescription: "Sopa espesa de maíz con carne de cerdo y chiles.",
    longDescription:
      "Un plato clásico mexicano, consistente en maíz pozolero cocido con carne de cerdo, chiles guajillo y especias, servido con lechuga, rábanos y limón.",
    image: "/plato2.jpg",
    price: 9.0,
    category: "fondo",
  },
  {
    name: "Chiles en Nogada",
    shortDescription: "Pimientos rellenos con picadillo y salsa de nueces.",
    longDescription:
      "Pimientos poblanos rellenos de un picadillo de carne, fruta y especias, cubiertos con salsa de nueces blancas y decorados con granada y perejil.",
    image: "/plato2.jpg",
    price: 12.0,
    category: "fondo",
  },
  {
    name: "Ceviche de Camarón",
    shortDescription: "Camarones marinados en limón con cebolla y cilantro.",
    longDescription:
      "Camarones frescos marinados en jugo de limón, mezclados con cebolla, tomate, cilantro y un toque de chile, servido frío como aperitivo.",
    image: "/plato2.jpg",
    price: 7.5,
    category: "fondo",
  },
  {
    name: "Churrasco",
    shortDescription: "Filete de carne a la parrilla con salsas variadas.",
    longDescription:
      "Un jugoso filete de res a la parrilla, acompañado de salsas, papas asadas y ensalada fresca.",
    image: "/plato2.jpg",
    price: 15.0,
    category: "fondo",
  },
  {
    name: "Paella Valenciana",
    shortDescription: "Arroz con mariscos, pollo y verduras.",
    longDescription:
      "Un plato emblemático español, arroz cocido con mariscos, pollo, verduras y azafrán, cocinado en una paella tradicional.",
    image: "/plato2.jpg",
    price: 20.0,
    category: "fondo",
  },
  {
    name: "Sushi Variado",
    shortDescription: "Selección de sushi con diferentes ingredientes.",
    longDescription:
      "Una variedad de sushi que incluye maki, nigiri y sashimi, preparado con ingredientes frescos como salmón, atún, camarón y vegetales.",
    image: "/plato2.jpg",
    price: 18.0,
    category: "fondo",
  },
  {
    name: "Lasagna Supremo",
    shortDescription: "Capas de pasta con carne, queso y salsa de tomate.",
    longDescription:
      "Lasagna hecha con capas de pasta, carne molida, queso ricotta y salsa de tomate, horneada hasta obtener una textura dorada y deliciosa.",
    image: "/plato2.jpg",
    price: 13.5,
    category: "fondo",
  },
  {
    name: "Falafel con Tahini",
    shortDescription: "Croquetas de garbanzo con salsa de tahini.",
    longDescription:
      "Bolas de falafel fritas, hechas de garbanzo y especias, servidas con ensalada y salsa de tahini y limón, típicas de la cocina del Medio Oriente.",
    image: "/plato2.jpg",
    price: 9.5,
    category: "fondo",
  },
  {
    name: "Churrasco",
    shortDescription: "Filete de carne a la parrilla con salsas variadas.",
    longDescription:
      "Un jugoso filete de res a la parrilla, acompañado de salsas, papas asadas y ensalada fresca.",
    image: "/plato2.jpg",
    price: 15.0,
    category: "postre",
  },
  {
    name: "Paella Valenciana",
    shortDescription: "Arroz con mariscos, pollo y verduras.",
    longDescription:
      "Un plato emblemático español, arroz cocido con mariscos, pollo, verduras y azafrán, cocinado en una paella tradicional.",
    image: "/plato2.jpg",
    price: 20.0,
    category: "postre",
  },
  {
    name: "Sushi Variado",
    shortDescription: "Selección de sushi con diferentes ingredientes.",
    longDescription:
      "Una variedad de sushi que incluye maki, nigiri y sashimi, preparado con ingredientes frescos como salmón, atún, camarón y vegetales.",
    image: "/plato2.jpg",
    price: 18.0,
    category: "postre",
  },
  {
    name: "Lasagna Supremo",
    shortDescription: "Capas de pasta con carne, queso y salsa de tomate.",
    longDescription:
      "Lasagna hecha con capas de pasta, carne molida, queso ricotta y salsa de tomate, horneada hasta obtener una textura dorada y deliciosa.",
    image: "/plato2.jpg",
    price: 13.5,
    category: "postre",
  },
  {
    name: "Falafel con Tahini",
    shortDescription: "Croquetas de garbanzo con salsa de tahini.",
    longDescription:
      "Bolas de falafel fritas, hechas de garbanzo y especias, servidas con ensalada y salsa de tahini y limón, típicas de la cocina del Medio Oriente.",
    image: "/plato2.jpg",
    price: 9.5,
    category: "postre",
  },
  {
    name: "Churrasco",
    shortDescription: "Filete de carne a la parrilla con salsas variadas.",
    longDescription:
      "Un jugoso filete de res a la parrilla, acompañado de salsas, papas asadas y ensalada fresca.",
    image: "/plato2.jpg",
    price: 15.0,
    category: "bebida",
  },
  {
    name: "Paella Valenciana",
    shortDescription: "Arroz con mariscos, pollo y verduras.",
    longDescription:
      "Un plato emblemático español, arroz cocido con mariscos, pollo, verduras y azafrán, cocinado en una paella tradicional.",
    image: "/plato2.jpg",
    price: 20.0,
    category: "bebida",
  },
  {
    name: "Sushi Variado",
    shortDescription: "Selección de sushi con diferentes ingredientes.",
    longDescription:
      "Una variedad de sushi que incluye maki, nigiri y sashimi, preparado con ingredientes frescos como salmón, atún, camarón y vegetales.",
    image: "/plato2.jpg",
    price: 18.0,
    category: "bebida",
  },
  {
    name: "Lasagna Supremo",
    shortDescription: "Capas de pasta con carne, queso y salsa de tomate.",
    longDescription:
      "Lasagna hecha con capas de pasta, carne molida, queso ricotta y salsa de tomate, horneada hasta obtener una textura dorada y deliciosa.",
    image: "/plato2.jpg",
    price: 13.5,
    category: "bebida",
  },
  {
    name: "Falafel con Tahini",
    shortDescription: "Croquetas de garbanzo con salsa de tahini.",
    longDescription:
      "Bolas de falafel fritas, hechas de garbanzo y especias, servidas con ensalada y salsa de tahini y limón, típicas de la cocina del Medio Oriente.",
    image: "/plato2.jpg",
    price: 9.5,
    category: "bebida",
  },
]
