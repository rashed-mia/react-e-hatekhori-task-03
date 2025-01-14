import CarDetails from "./CarDetails";
const cars = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

export default function CarGallery() {
  return (
    <div className="m-4 border p-4 rounded-lg shadow-sm">
      <ul className="grid grid-cols-3 justify-center items-center gap-4 shadow-sm">
        {cars.map((car) => (
          <li key={car.id}>
            <CarDetails car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}
