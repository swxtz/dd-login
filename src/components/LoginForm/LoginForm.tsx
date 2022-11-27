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
				<InputForm label="E-mail" type={"email"} placeholder="Digite seu e-mail" icon={emailSvg} />
				<InputForm label="Senha"  type={"password"} placeholder="Digite sua senha" icon={lockSvg} img={eyeSvg} />
			</form>
		</div>
	);

}