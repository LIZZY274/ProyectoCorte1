import React from "react";

function Letter({ images }) {
  return (
    <section>
      

      <div className="mt-12 flex flex-col gap-6">
        <article className="w-full h-[235px]">
          <img className="w-full h-full object-cover" src={images} alt="img" />
        </article>
        <button className=" inline-block bg-[#F93737] mx-auto p-2 w-[212px] text-white font-medium rounded-lg">
          Reservar ahora!
        </button>
      </div>
    </section>
  );
}

export default Letter;
