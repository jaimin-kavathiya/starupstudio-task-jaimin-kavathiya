"use client"
import FilterMenu from '@/components/filterMenu';
import FilterBar from '@/components/filterBar';
import { useEffect, useState } from 'react'

import ProductCard from './productCard';
import { ProductData } from '@/typings/product';

const Products = () => {

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className='w-full sm:px-14 py-5'>
      <FilterBar isFilterOpen={isFilterOpen} productCount={products?.length} setFilterOpen={setFilterOpen} />
      <div className="flex">
        <div className={`absolute z-1 bg-white w-full md:w-1/3 lg:w-1/4 min-w-[300px] ${isFilterOpen ? "block" : "hidden"} absolute z-2 sm:relative`}>
          <FilterMenu />
        </div>

        <div className={`w-full justify-center grid grid-flow-row ${isFilterOpen ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"} xl:auto-rows-auto	gap-2 p-2`} >
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default Products;