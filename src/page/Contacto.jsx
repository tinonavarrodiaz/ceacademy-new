import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Contacto = () => {
  useEffect(() => {
    classActive(null);
  }, []);
  return (
    <section className="section container Contacto">
      <h1>Contacto</h1>
    </section>
  );
};

export default Contacto;
