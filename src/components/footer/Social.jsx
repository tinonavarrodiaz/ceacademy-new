import {social} from "../../utils/social.js";
const Social = ()=>{
  return(

    <ul className="social">
      {
        social.map(el=>(
          <li key={el.name} className="social__item">
            <a href={el.url}><i className={`${el.icon}`}></i></a>
          </li>
        ))
      }
    </ul>
  )
}
export default Social
