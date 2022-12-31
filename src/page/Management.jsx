import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';

const Management = () => {
  useEffect(() => {
    classActive(null);
  }, []);
  return (
    <section className="section container Management">
      <h1>Management</h1>
    </section>
  );
};

export default Management;
