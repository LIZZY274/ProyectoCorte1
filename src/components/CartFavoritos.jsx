import React from "react";

function CartFavoritos({images}) {
  return (
    <>
      <div className="mt-12 flex flex-col gap-6">
        <article className="w-full h-[235px]">
          <img className="w-full h-full object-cover" src={images} alt="img" />
        </article>
      </div>
    </>
  );
}

export default CartFavoritos;
