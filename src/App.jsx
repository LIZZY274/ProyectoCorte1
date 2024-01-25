import React from "react";
import Header from "./components/Header";
import Reserva from "./components/Reserva";
import Letter from "./components/Letter";
import place1 from './assets/place1.png'
import place2 from './assets/place2.png'
import place3 from './assets/place3.png'

import logo from './assets/logo.png'

import food1 from './assets/food1.png'
import food2 from './assets/food2.png'
import CartFavoritos from "./components/cartFavoritos";

function App() {
  return (
    <>
      <Header />
      <main className="pl-16 pr-16 mt-11 my-10">
        <Reserva />

        <section className="mt-12 p-1  ">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-4xl font-bold text-black">
              Lugares disponibles ahora
            </h1>
            <a className="text-sm cursor-pointer font-bold text-[#F93737]">
              Ver todos
            </a>
          </div>
          <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
            <Letter images={place1} />
            <Letter images={place2} />
            <Letter images={place3} />
          </div>
        </section>

        <section className="mt-12 p-1">
          <div className="flex flex-row items-center">
            <h1 className="text-4xl font-bold text-black">
              Platillos favoritos
            </h1>
          </div>

          <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
            <CartFavoritos images={food1}/>
            <CartFavoritos images={food2}/>
            <CartFavoritos images={food1}/>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-center">
                <h1 className="text-4xl font-bold text-black">Ofertas</h1>
            </div>

            <div className="grid grid-cols-3 gap-14 mt-10">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl font-bold">Platillos especiales</h2>
                <p className="text-black font-medium text-2xl">$500</p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl font-bold">Platillos especiales</h2>
                <p className="text-black font-medium text-2xl">$500</p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl font-bold">Platillos especiales</h2>
                <p className="text-black font-medium text-2xl">$500</p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl font-bold">Platillos especiales</h2>
                <p className="text-black font-medium text-2xl">$500</p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl font-bold">Platillos especiales</h2>
                <p className="text-black font-medium text-2xl">$500</p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="text-3xl font-bold">Platillos especiales</h2>
                <p className="text-black font-medium text-2xl">$500</p>
              </div>
            </div>
          </div>
        </section>


        <section className="mt-20 ">
            <div className="flex flex-col gap-5 items-center justify-center">
              <img className="w-52" src={logo} alt="logo" />
              <h1 className=" text-black font-bold text-4xl">Reserva</h1>
              <form className="flex flex-col gap-7" action="">
                <input className="w-[756px] border-2 border-[#9B9090] p-3 rounded-full px-5 text-black" type="text" placeholder="Name" />
                <input className="w-[756px] border-2 border-[#9B9090] p-3 rounded-full px-5 text-black" type="text" placeholder="email" />
                <input className="w-[756px] border-2 border-[#9B9090] p-3 rounded-full px-5 text-black" type="text" placeholder="date" />
                <button className="inline-block bg-[#505BC1] mx-auto p-2 w-[212px] text-white font-medium rounded-lg">Reservar ahora!</button>
              </form>
              
            </div>
        </section>
      </main>
    </>
  );
}

export default App;
