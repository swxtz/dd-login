import React, { InputHTMLAttributes, useState } from "react";
import { IconLock } from "../IconLock/IconLock";
import { IconMail } from "../IconMail/IconMail";
import "./input-form.scss";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
	email: string;
	emailPlaceholder: string;
	pass: string;
	passPlaceholder: string;
}

export function InputForm({
	email,
	pass,
	emailPlaceholder,
	passPlaceholder,
	...rest
}: InputFormProps) {
	const [isEmailFocus, setIsEmailFocus] = useState(false);
	const [isPassFocus, setIsPassFocus] = useState(false);

	return (
		<div className="input-wrapper">
			<p>{email}</p>
			<div className="input-content">
				<IconMail fill={isEmailFocus ? "#FFC632" : "#AFB6C2"} />
				<input
					className="input-input"
					placeholder={emailPlaceholder}
					onFocus={() => {
						setIsEmailFocus(true);
					}}
					onBlur={() => {
						setIsEmailFocus(false);
					}}
					type="text"
					{...rest}
				/>
			</div>

			<p>{pass}</p>
			<div className="input-content">
				<IconLock fill={isPassFocus ? "#FFC632" : "#AFB6C2"} />
				<input
					className="input-input"
					placeholder={passPlaceholder}
					onFocus={() => {
						setIsPassFocus(true);
					}}
					onBlur={() => {
						setIsPassFocus(false);
					}}
					type="pass"
					{...rest}
				/>
			</div>
		</div>
	);
}
