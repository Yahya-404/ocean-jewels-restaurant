import Image from "next/image";
import { LuMinus, LuPlus } from "react-icons/lu";

const CartCard = ({
  id,
  name,
  img,
  price,
  type,
  dishes,

  pieces,
  updatePieces,
}: {
  id: number;
  name: string;
  img: string;
  type: string;
  dishes: number;
  price: number;

  pieces: number;
  updatePieces: (id: number, pieces: number) => void;
}) => {
  const handleDeletePieces = () => {
    updatePieces(id, pieces - 1);
  };

  const handleAddingPieces = () => {
    updatePieces(id, pieces + 1);
  };

  return (
    <div className="flex items-center gap-4 w-full max-w-sm rounded-3xl p-3 bg-menu-card shadow-card cubic-bezier-2">
      {/* Image */}
      <Image src={img} alt="dish" width={80} height={80} />
      <div className="w-full">
        <h3 className="text-lg capitalize">{name}</h3>
        <span className="text-accent font-semibold">{price} EGP</span>
        <div className="w-full flex-between">
          <div>
            <span className="text-primary-200 capitalize">{type}</span>
            <span> - </span>
            <span className="text-primary-200">{dishes} Pieces</span>
          </div>
          <div className="flex gap-2">
            <button
              className="flex-center text-xl font-medium bg-cart-btn w-6 h-6 rounded-md hover:bg-cart-btn-hover cursor-pointer"
              onClick={handleDeletePieces}
            >
              <LuMinus fontSize={15} />
            </button>
            <span>{pieces}</span>
            <button
              className="flex-center text-xl font-medium bg-cart-btn w-6 h-6 rounded-md hover:bg-cart-btn-hover cursor-pointer"
              onClick={handleAddingPieces}
            >
              <LuPlus fontSize={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
