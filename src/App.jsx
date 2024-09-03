import Button from "./components/Button";
import Card from "./components/Card";
import cafeBg from "./assets/bg-cafe.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Vetor from "./components/Vetor";

const api =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

function App() {
  const [data, setData] = useState([]);

  const getAlloffeData = async () => {
    // https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json
    await axios
      .get(api)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlloffeData();
  }, []);
  return (
    <main className="flex flex-col items-center justify-center">
      <img src={cafeBg} alt="abg img" className="relative w-full -z-10" />

      <div className="w-[60%] flex items-center justify-center flex-col p-14 rounded-2xl bg-zinc-900 -mt-32">
        <section className="w-[70%] py-10 px-10  flex items-center justify-center flex-col gap-10">
          <h1 className="font-bold text-4xl">Our Collection</h1>
          <div className="absolute -z-0' ml-48 mb-32">
            <Vetor />
          </div>
          <p className="text-xl text-gray-500 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat a
            sunt odio sed similique modi neque nisi itaque repudiandae quo
            officia, doloribus deleniti vel.
          </p>

          <div className="flex gap-7">
            <Button className="w-[150px] h-[40px] bg-gray-500 rounded-lg">
              All Products
            </Button>
            <Button className="button-not-filed">Available Now</Button>
          </div>
        </section>
        <section className=" justify-center items-center grid mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((coffe) => (
            <Card
              key={coffe.id}
              status={coffe.popular}
              img={coffe.image}
              name={coffe.name}
              available={coffe.available}
              price={coffe.price}
              rating={coffe.rating}
              votes={coffe.votes}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
