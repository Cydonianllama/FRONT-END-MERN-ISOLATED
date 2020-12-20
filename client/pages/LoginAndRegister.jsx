function LoginAndRegister(){
    return(
            <div class="conatiner-login-register">
                <div class="presentatio-app">
                    <h2>TITLE APP</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, incidunt?</p>
                </div>
                <div class="conatiner-forms">
                    <form id="form-login" >
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button type="submit">Login</button>
                        <div class="actions-form-login">
                            <button id="btn-go-register">Still not register ?</button>
                        </div>
                     </form>
                    <form id="form-register" >
                        <input type="text" placeholder="fullname"/>
                        <input type="username" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>
                        <div class="actions-register">
                            <button id="btn-show-password">Show Pass</button>
                            <button id="btn-go-login">You have account?</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}
export default LoginAndRegister;