import React from "react";
import "./logo.scss";

import logoSvg from "../../assets/svg/logo.svg";

export  function Logo() {
	return (
		<div>
			<img src={logoSvg} alt="Camp.in" />
		</div>
	);
}
