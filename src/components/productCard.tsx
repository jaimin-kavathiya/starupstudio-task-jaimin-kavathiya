import { ProductData } from '@/typings/product';
import Image from "next/image";
import WishListIcon from "@/assets/images/header-icons/wishlist-icon.png";


interface ProdctProps {
  product: ProductData
}
const ProductCard: React.FC<ProdctProps> = (props) => {
  const { product } = props;

  return (
    <div key={product.id} className="min-w-[167px] mb-3 max-w-[300px]">
      <Image
          className="w-full h-[224px]"
          src={product.image}
          alt={product.title}
          width={300}
          height={100}
          priority
          />
      <div>
        <h2 className='whitespace-nowrap text-ellipsis overflow-hidden w-10/12 text-lg font-bold'>{product.title}</h2>
        <div className='flex gap-2 text-gray-400 font-light text-sm items-end'>
          <p><span className='underline'>Sign in</span> or Create an account to see pricing</p>
          <Image priority src={WishListIcon} className="sm:w-6 sm:h-6 w-[20px] h-[20px] cursor-pointer" alt="wishlist" />
        </div>
      </div>

    </div>
  )
}

export default ProductCard;