import React, { FormEvent } from "react";
import { InputForm } from "../InputForm/InputForm";
import "./login-form.scss";
import { Checkbox } from "../Checkbox/Checkbox";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";

export function LoginForm() {

	function handleSubmitForm(e:FormEvent) {
		e.preventDefault();
	}

	return (
		<div>
			<form action="" onSubmit={(e) => {handleSubmitForm(e);}} className="login-form" method="post">
				<InputForm
					email="E-mail"
					emailPlaceholder="Digite seu e-mail"
					pass="Senha"
					passPlaceholder="Digite sua senha"
				/>
				<div className="login-form-checkbox">
					<Checkbox text="Lembre-me?" link="Esqueci minha senha" />
				</div>
				<div className="login-form-button">
					<ButtonLogin type="submit" title="entrar" />
				</div>
				<div className="login-form-link">
					<p>Não tem uma conta? <a href="#">Registre-se</a></p>
				</div>
			</form>
		</div>
	);
}
