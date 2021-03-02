/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import OrderedItem from '../OrderedItem';
import ItemQuantity from '../ItemQuantity';

export default function CompleteOrderedItem({
  itemName,
  itemPrice,
  itemQuantity,
  minusButton,
  plusButton,
  itemTotalPrice,
}) {
  return (
    <Fragment>
      <OrderedItem
        itemNameText={itemName}
        itemPriceText={itemPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      />
      <ItemQuantity
        minusButton={minusButton}
        plusButton={plusButton}
        itemQuantity={itemQuantity}
        itemTotalPrice={itemTotalPrice}
      />
    </Fragment>
  );
}
