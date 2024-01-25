import React from "react";

function Reserva() {
  return (
    <>
      <div className="bg-[#505BC1] w-full h-[310px] rounded-sm flex flex-col gap-6 items-center justify-center">
        <h1 className="text-white font-bold text-5xl">
          Encuentra tu mesa para cualquier ocasión
        </h1>
        <div className="flex flex-row w-full pl-40 pr-40">
          <input
            className="w-full p-2 text-sm rounded-s-full border-r border-black"
            placeholder="Fecha de reserva"
            type="date"
          />
          <input
            className="w-full p-2 text-sm border-r border-black"
            placeholder="Horario"
            type="time"
          />
          <input
            className="w-full p-2 text-sm rounded-e-full border-black"
            placeholder="Numero de personas a reservar"
            type="number"
          />

          <div className="ml-3">
            <button className="p-2 rounded-3xl px-5 font-bold text-white bg-[#F93737] text-1xl">
              Vamos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserva;
