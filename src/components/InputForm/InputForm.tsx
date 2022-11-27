import React, { InputHTMLAttributes, useState } from "react";
import { IconMail } from "../IconMail/IconMail";
import "./input-form.scss";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	icon?: string;
	img?: string;
}

export function InputForm({ label, icon, img, ...rest }: InputFormProps) {

	const [isFocus, setIsFocus] = useState(false);

	return (
		<div className="input-wrapper">
			<p>{label}</p>
			<div className="input-content">
				<IconMail fill={isFocus ? "#FFC632" : "#AFB6C2"} />
				<input onFocus={() => {setIsFocus(true);}} onBlur={() => {setIsFocus(false);}} type="text" {...rest} />
				<img src={img} alt="" />
			</div>
		</div>
	);
}
