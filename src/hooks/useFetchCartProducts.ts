import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { cartProductState } from '../states/cartProducts';
import { useEffect } from 'react';
import { serverNameState } from '../states/serverName';
import fetchApis from '../apis/fetchApis';
import { CartProduct } from '../types/product';

const useFetchCartProducts = () => {
  const serverName = useRecoilValue(serverNameState);

  const setCartProducts = useSetRecoilState(cartProductState);
  const resetCartProducts = useResetRecoilState(cartProductState);

  useEffect(() => {
    const { getData } = fetchApis(serverName);

    const fetch = async () => {
      try {
        const cartProducts = await getData<CartProduct[]>('/cart-items');
        setCartProducts(cartProducts);
      } catch {
        resetCartProducts();
      }
    };

    fetch();
  }, [resetCartProducts, serverName, setCartProducts]);

  return serverName;
};

export default useFetchCartProducts;
