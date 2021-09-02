import { IProduct } from "../store/modules/cart/types";
import { useDispatch } from "react-redux"
import { addProductToCart } from "../store/modules/cart/actions"
import { useCallback } from 'react'

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])

  return (
    <article>
        <strong>{product.id}</strong>
        <strong>{product.title}</strong> {" - "}
        <strong>{product.price}</strong> {" - "}

        <button 
          type="button"
          onClick={handleAddProductToCart}
        >
          Comprar
        </button>
       </article>
  )
}

export default CatalogItem