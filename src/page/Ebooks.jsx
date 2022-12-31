import React, { useEffect } from 'react';
import { classActive } from '../utils/classActive';
const bookImg = "/img/ebook.png"
const ebooks = []

for (let i = 0; i<10; i++){
  ebooks.push(bookImg)
}
console.log(ebooks)

const Ebooks = () => {
  useEffect(() => {
    classActive('media');
  }, []);
  return (
    <section className="section container Ebooks">
      <h1>Nuestros Ebooks</h1>
      {
        ebooks.map((el,i)=>(
            <img key={i} src={el} alt={`book ${i}`}/>
          ))
      }
    </section>
  );
};

export default Ebooks;

