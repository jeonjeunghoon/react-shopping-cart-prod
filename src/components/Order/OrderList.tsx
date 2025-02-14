import { styled } from 'styled-components';
import * as List from './OrderItem';

import { CartProduct } from '../../types/product';

interface OrderListProps {
  orderItems: CartProduct[];
}

const OrderList = ({ orderItems }: OrderListProps) => {
  return (
    <StyledOrderList>
      {orderItems.map(orderItem => (
        <List.OrderItem key={orderItem.id} orderItem={orderItem} />
      ))}
    </StyledOrderList>
  );
};

const StyledOrderList = styled.ul`
  width: 100%;

  & > li:not(:last-child) {
    border-bottom: 1px solid #aaaaaa;
  }
`;

export default OrderList;
