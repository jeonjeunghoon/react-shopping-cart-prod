import type { ChangeEventHandler } from 'react';
import styled from 'styled-components';

import AmountCounter from '../Common/AmountCounter';
import Image from '../Common/Image';
import CheckBox from '../Common/CheckBox';

import TrashCanIcon from '../../assets/TrashCanIcon';
import type { CartProduct } from '../../types/product';
import useProductQuantity from '../../hooks/useProductQuantity';
import useChecked from '../../hooks/useChecked';

interface CartProductItemProps {
  cartProduct: CartProduct;
}

export const CartProductItem = ({ cartProduct }: CartProductItemProps) => {
  const { id, quantity, product } = cartProduct;
  const { name, price, imageUrl } = product;

  const { deleteProduct } = useProductQuantity(id, quantity);
  const { targetChecked, updateChecked, deleteChecked } =
    useChecked(cartProduct);

  const toggleProductChecked: ChangeEventHandler<HTMLInputElement> = event => {
    updateChecked(event.currentTarget.checked);
  };

  const deleteProductAndChecked = () => {
    deleteProduct();
    deleteChecked();
  };

  return (
    <StyledCartProductItem>
      <CartFlexBox>
        <CheckBox
          id={`cart-product-check-${id}`}
          onChange={toggleProductChecked}
          checked={targetChecked ? true : false}
        />
        <Image src={imageUrl} alt={name} loading="lazy" size="small" />
        <ProductName>{name}</ProductName>
      </CartFlexBox>
      <CartInfoContainer>
        <DeleteButton type="button" onClick={deleteProductAndChecked}>
          <TrashCanIcon />
        </DeleteButton>
        <AmountCounter
          cartItemId={id}
          count={quantity}
          minCount={1}
          variant="medium"
        />
        <ProductPrice>
          {(price * quantity).toLocaleString('ko-KR')}원
        </ProductPrice>
      </CartInfoContainer>
    </StyledCartProductItem>
  );
};

const StyledCartProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0;

  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const CartFlexBox = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    flex-direction: column;
    column-gap: 15px;
  }
`;

const ProductName = styled.p`
  margin: 10px 0 0 0;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breakPoints.small}) {
    margin: 0;
    font-size: 20px;
    line-height: 1.5;
  }
`;

const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    position: static;
    height: initial;
  }
`;

const DeleteButton = styled.button`
  height: 24px;
  line-height: 24px;
`;

const ProductPrice = styled.p`
  height: 24px;
  line-height: 24px;
`;

export default CartProductItem;
