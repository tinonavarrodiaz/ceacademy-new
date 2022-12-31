const Newsletter = ()=>{
  return(
    <div className="Newsletter">
      <h3>Suscríbete a nuestro newsletter</h3>
      <form action="#"className={'Newsletter__form'}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Escribe tu email"
        />
        <button type="submit" className="btn btn-dark ">Suscribirme</button>
      </form>
    </div>
  )
}
export default Newsletter
