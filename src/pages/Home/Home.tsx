import React from "react";
import "./home.scss";

import { Logo } from "../../components/Logo/Logo";

export function Home() {
	return (
		<div>
			<div className="home-wrapper">
				<div className="home-logo">
					<Logo />
				</div>
			</div>
		</div>
	);
}
