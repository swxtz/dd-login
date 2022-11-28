import React from "react";
import { InputForm } from "../InputForm/InputForm";
import "./login-form.scss";
import { Checkbox } from "../Checkbox/Checkbox";

export function LoginForm() {
	return (
		<div>
			<form action="" className="login-form" method="post">
				<InputForm
					email="E-mail"
					emailPlaceholder="Digite seu e-mail"
					pass="Senha"
					passPlaceholder="Digite sua senha"
				/>
				<div className="login-form-checkbox">
					<Checkbox text="Lembre-me?" link="Esqueci minha senha" />
				</div>
			</form>
		</div>
	);
}
