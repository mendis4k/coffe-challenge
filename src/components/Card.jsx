import React from "react";
import Star from "./Star";
import FilledStar from "./FilledStar";

const Card = ({ img, name, price, status, rating, votes, available }) => {
  return (
    <div className="w-full md:w-[300px]">
      {status && (
        <p className="absolute mt-2 ml-2 w-[80px] text-black text-sm font-semibold text-center rounded-full bg-yellow-300">
          Popular
        </p>
      )}

      <img
        src={img}
        alt="img"
        className="w-full md:w-[300px] rounded-xl bg-cover"
      />
      <div className="flex justify-between py-4 items-center">
        <h2 className="font-semibold text-lg tracking-wider">{name}</h2>
        <div className="bg-green-200 py-1 px-2 text-sm rounded-md text-black font-bold">
          {price}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          {rating === null ? <Star /> : <FilledStar />}
          <p>{rating}</p>
          <p className="text-zinc-500 font-semibold text-sm">{`${
            votes == 0 ? "No ratings" : `(${votes} votes)`
          } `}</p>
        </div>
        {available != true ? (
          <p className="text-red-400 font-semibold text-sm">Sold Out</p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
