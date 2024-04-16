import React from "react";
import FillButton from "./FillButton";
import FoodCard from "./FoodCard";

const items = [
  {
    foodId: "1234123k4nlk41nlk23n41okno3241",
    image: require("@/assets/fideua-rape-gamba-knoweats.jpg"),
    title: "Fideua de rape y gamba",
    weight: 420,
    ingredients: [
      require("@/assets/crustaceos.svg"),
      require("@/assets/gluten.svg"),
      require("@/assets/pescado.svg"),
      require("@/assets/moluscos.svg"),
      require("@/assets/apio.svg"),
    ],
    price: 6.75,
    nutrimentalInformation: {
      Calorias: 508,
      Proteinas: 39,
      Carbohidratos: 69,
      Grasas: 12,
    },
    inStock: false,
    balance: true,
  },
  {
    foodId: "1234123k4nlk41nlk23n41o",
    image: require("@/assets/Costilla-bbq-knoweats.jpg"),
    title: "Costilla bbq",
    weight: 450,
    ingredients: [
      require("@/assets/gluten.svg"),
      require("@/assets/apio.svg"),
    ],
    price: 6.99,
    nutrimentalInformation: {
      Calorias: 608,
      Proteinas: 50,
      Carbohidratos: 100,
      Grasas: 15,
    },
    inStock: true,
    balance: false,
  },
  {
    foodId: "1234123k4nlk41nlk23n",
    image: require("@/assets/fusili-pesto-brocoli-knoweats.jpg"),
    title: "Pesto Brocoli",
    weight: 470,
    ingredients: [
      require("@/assets/vegano.svg"),
      require("@/assets/apio.svg"),
      require("@/assets/mostaza.svg"),
      require("@/assets/soja.svg")
    ],
    price: 8.25,
    nutrimentalInformation: {
      Calorias: 568,
      Proteinas: 10,
      Carbohidratos: 300,
      Grasas: 7,
    },
    inStock: true,
    balance: true,
  },
  {
    foodId: "1234123k4nlk41nlk",
    image: require("@/assets/salmon-teriyaki-pure-boniato-detalle.jpg"),
    title: "Salmon teriyaki",
    weight: 390,
    ingredients: [
      require("@/assets/pescado.svg"),
      require("@/assets/mostaza.svg"),
      require("@/assets/soja.svg")
    ],
    price: 7.32,
    nutrimentalInformation: {
      Calorias: 368,
      Proteinas: 60,
      Carbohidratos: 200,
      Grasas: 10,
    },
    inStock: false,
    balance: true,
  },
];

const MainCourses = () => {
  return (
    <section className="lg:px-16 p-4 lg:pt-10 w-full max-w-screen-2xl">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center md:text-5xl font-bold mb-7 mt-4">
          Tienes que probar
        </h1>
        <ul className="w-full gap-4 flex overflow-scroll">
          {items.map((foodItem) => {
            return <FoodCard key={foodItem.foodId} foodItem={foodItem} />;
          })}
        </ul>
        <FillButton title="Ver Todos" className="mt-10 px-20" />
      </div>
    </section>
  );
};

export default MainCourses;
