import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Inicio = () => {
  useEffect(() => {
    classActive(null);
  }, []);
  return (
    <section className="section container Inicio">
      <h1>Inicio</h1>
    </section>
  );
};

export default Inicio;
