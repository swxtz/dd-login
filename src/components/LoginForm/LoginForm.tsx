import React from "react";
import { InputForm } from "../InputForm/InputForm";

import emailSvg from "../../assets/svg/mail.svg";
import emailFocusSvg from "../../assets/svg/mail-focus.svg";

import lockSvg from "../../assets/svg/lock.svg";
import lockFocusSvg from "../../assets/svg/lock-focus.svg";

import eyeSvg from "../../assets/svg/eye.svg";

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
			</form>
		</div>
	);
}
