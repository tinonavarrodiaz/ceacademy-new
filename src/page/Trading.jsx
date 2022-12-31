import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Trading = () => {
  useEffect(() => {
    classActive(null);
  }, []);
  return (
    <section className="section container Trading">
      <h1>Trading</h1>
    </section>
  );
};

export default Trading;
