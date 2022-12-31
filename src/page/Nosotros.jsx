import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Nosotros = () => {
  useEffect(() => {
    classActive(null);
  }, []);
  return (
    <section className="section Nosotros">
      <h1>Nosotros</h1>
    </section>
  );
};

export default Nosotros;
