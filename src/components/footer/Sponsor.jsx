import sponsors from "../../utils/sponsors.js";

const Sponsor = ()=>{
  return (
    <>
      <h3>Patrocinios</h3>
    <ul className="sponsor">
      {
        sponsors.map((el)=>(
          <li className="sponsor__item" key={el.name}>
            <a href={el.url} target={'_blank'}>{el.url}</a>
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default Sponsor
