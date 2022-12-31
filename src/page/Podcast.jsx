import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Podcast = () => {
  useEffect(() => {
    classActive('media');
  }, []);
  return (
    <section className="section Podcast">
      <h1>Nuestros Podcast</h1>
    </section>
  );
};

export default Podcast;
