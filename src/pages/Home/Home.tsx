import React from "react";
import "./home.scss";

import { Logo } from "../../components/Logo/Logo";
import { HeaderForm } from "../../components/HeaderForm/HeaderForm";

export function Home() {
	return (
		<div>
			<div className="home-wrapper">
				<div className="home-logo">
					<Logo />
				</div>
				<div className="home-form">
					<HeaderForm />
				</div>
			</div>
		</div>
	);
}
