import React from "react";

import BookLayout from "./BookLayout";

const BookScreen = ({ data }) => {
  const [book, setBook] = React.useState({ loss: [], gain: [], maximum: 0 });

  React.useEffect(() => {
    const { loss, gain, maximum } = book;
    let newMax = maximum;

    data.forEach((transaction, index) => {
      const [, , total] = transaction;

      if (Math.abs(total) > newMax) newMax = Math.abs(total);

      if (total >= 0) {
        gain.unshift(transaction);
        if (gain.length > 24) gain.pop();
      } else {
        loss.unshift(transaction);
        if (loss.length > 24) loss.pop();
      }

      if (index === data.length - 1) setBook({ loss, gain, maximum: newMax });
    });
  }, [data]);

  return <BookLayout data={book} />;
};

export default BookScreen;
