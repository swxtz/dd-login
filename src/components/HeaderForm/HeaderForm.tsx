import React from "react";
import loginSvg from "../../assets/svg/log-in.svg";
import "./header-form.scss";

export function HeaderForm() {
	return (
		<div className="header-wrapper">
			<div className="header-title">
				<img src={loginSvg} alt="Log-in" />
				<h2>Faça seu login</h2>
			</div>
			<div className="header-subtitle">
				<p>Entre com suas informações de cadastro.</p>
			</div>
		</div>
	);
}