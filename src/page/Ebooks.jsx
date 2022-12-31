import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Ebooks = () => {
  useEffect(() => {
    classActive('media');
  }, []);
  return (
    <section className="section Ebooks">
      <h1>Nuestros Ebooks</h1>
    </section>
  );
};

export default Ebooks;
