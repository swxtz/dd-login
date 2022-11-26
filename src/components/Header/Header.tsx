import React from "react";
import loginSvg from "../../assets/svg/log-in.svg";

export function Header () {
	return (
		<div className="header-wrapper">
			<div className="header-title">
				<img src={loginSvg} alt="Log-in" />
				<h2>Faça seu login</h2>
			</div>
		</div>
	);
}