import 'bootstrap/dist/css/bootstrap.css'
const Login = () => {
  return (
    <>
      <div className='container mt-4'>
        {/*   mt-4 separa container do teto */}
        <div className='row align-items-center'>
          <div className='col-md-10 mx-auto col-lg-5'>
            {/*    col-md-10 dispositivos médios (md)  usaremos tamanho 10         */}
            {/*  mx-auto significa margem automática grande a esquerda                 */}
            {/*   col-lg-5 dispositivos grandes (lg large)  trabalhamos com tamanho 5   */}

            <form className='p4 p-md-5 rounded-3 bg-info'>
              {/*   Usaremos padding p-4, colocaremos padding para     */}
              {/*      dispositivo médio com tamanho 5, assim: p-md-5  */}
              {/*   Colocaremos BORDA redonda, assim: border rounded-3 */}
              {/*   Terá cor de   fundo background, assim: bg-light    */}

              <div className='form-floating mb-3'>
                {/*   Vamos usar classe form-floating e deixar a div em  posição relativa  */}
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  placeholder='E-mail'
                />
                <label>E-mail</label>
              </div>

              <div className='form-floating mb-3'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  placeholder='Senha'
                />
                <label>E-mail</label>
              </div>

              <div className='checkbox mb-3'>
                <label>
                     {/*  Vamos usar classe form-floating e deixar a div em posição relativa */}
                     <input type='checkbox' value='lembre-me' /> Lembrar senha
                </label>
              </div>

              <button className='w-100 btn btn-lg btn-success' type='submit'>
                {' '}
                Entrar
              </button>
              {/*  btn-lg é um botão lg=largo ou grande e btn-success é verde */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
