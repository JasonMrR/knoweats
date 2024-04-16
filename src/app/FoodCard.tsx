import Image from "next/image";

interface FoodItem {
  foodId: string,
  image: string,
  title: string,
  weight: number,
  price: number,
  ingredients: Array<string>,
  nutrimentalInformation: InfoNutrimental,
  inStock: boolean,
  balance: boolean,
}
interface InfoNutrimental {
  "Calorias": number,
  "Proteinas": number,
  "Carbohidratos": number,
  "Grasas": number,
}

interface FoodCardProps {
  foodItem: FoodItem;
}

const FoodCard = ({ foodItem }: FoodCardProps) => {
  return (
    <li className="bg-card-color w-1/4 min-w-80 h-128 rounded-xl flex flex-col overflow-hidden">
      <div className="w-full h-1/2 relative">
        <Image
          src={foodItem.image}
          alt={`Imagen del platillo ${foodItem.title}`}
          className="w-full h-full object-cover"
          priority
        />
        <h2 className={`${foodItem.balance ? "absolute" : "hidden"} top-0 right-0 m-2 px-6 py-1 bg-card-filter-color-1 rounded-xl text-white font-bold text-xl tracking-wider`}>equilibrado</h2>
        <p className={`${foodItem.inStock ? "hidden" : "absolute"} bottom-0 left-0 m-2 px-2 py-1 bg-black text-white font-medium rounded-xl`}>Agotado</p>
      </div>
      <div className="flex flex-col grow justify-between p-4">
        <h3 className="text-lg font-bold">{foodItem.title}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-base text-text-hint">({foodItem.weight}g)</span>
            <ul className="flex gap-1">
              {
                foodItem.ingredients.map((item, index) => {
                  return (
                    <li key={index}>
                      <Image
                        src={item}
                        alt={`Imagen de ingrediente`}
                        width={27}
                        height={27}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <h2 className="text-xl font-bold">{foodItem.price}€</h2>
          <ul className="flex justify-evenly bg-white rounded-xl text-sm py-1">
            <li className="flex flex-col justify-center items-center">
              {foodItem.nutrimentalInformation["Calorias"]}
              <span className="text-xsm text-text-hint">Calorias</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              {foodItem.nutrimentalInformation["Proteinas"]}
              <span className="text-xsm text-text-hint">Proteinas</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              {foodItem.nutrimentalInformation["Carbohidratos"]}
              <span className="text-xsm text-text-hint">Carbohidratos</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              {foodItem.nutrimentalInformation["Grasas"]}
              <span className="text-xsm text-text-hint">Grasas</span>
            </li>
          </ul>
          <button className={`text-xl py-1 mt-3 bg-secondary-color uppercase rounded-full text-white font-bold ${!foodItem.inStock && "disabled bg-orange-200"}`}>
            {
              foodItem.inStock ? "Agregar" : "Agotado"
            }
          </button>
        </div>
      </div>
    </li>
  );
};

export default FoodCard;
