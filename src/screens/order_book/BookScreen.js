import React from "react";
import { useSelector } from "react-redux";

import BookLayout from "./BookLayout";

const BookScreen = () => {
  const book = useSelector(state => state.trading.book);
  const [maximum, setMaximum] = React.useState(0);
  const [size, setSize] = React.useState(book.loss.length);

  const { loss, gain } = book;

  React.useEffect(() => {
    let newMax = maximum;
    let newSize = 0;

    if (loss.length && loss.length > newSize) {
      newSize = loss.length;
    }

    if (gain.length && gain.length > newSize) {
      newSize = gain.length;
    }

    console.log("----------------------Size", size);

    newSize !== size && setSize(newSize);

    loss.forEach(transaction => {
      const [, , total] = transaction;
      if (Math.abs(total) > newMax) newMax = Math.abs(total);
    });

    gain.forEach(transaction => {
      const [, , total] = transaction;
      if (total > newMax) newMax = total;
    });

    newMax !== maximum && setMaximum(newMax);
  }, [loss, gain]);

  return <BookLayout data={book} maximum={maximum} size={size} />;
};

export default BookScreen;
