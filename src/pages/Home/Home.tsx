import React from "react";
import "./home.scss";

import { Logo } from "../../components/Logo/Logo";
import { HeaderForm } from "../../components/HeaderForm/HeaderForm";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Checkbox } from "../../components/Checkbox/Checkbox";

export function Home() {
	return (
		<div>
			<div className="home-wrapper">
				<div className="home-logo">
					<Logo />
				</div>
				<div className="home-form">
					<HeaderForm />
					<div className="home-inputs">
						<LoginForm />
					</div>
					<div className="home-about-form">
						<Checkbox 
							text="Lembre-me?"
							link="Esqueceu sua senha?"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
