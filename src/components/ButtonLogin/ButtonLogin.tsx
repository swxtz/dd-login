import "./styles.scss";

import { ButtonProps } from "../../types/ButtonTypes";

export function ButtonLogin({title, ...rest}: ButtonProps) {
	return (
		<div className="button-wrapper">
			<button  {...rest}>{title}</button>
		</div>
	);
}
