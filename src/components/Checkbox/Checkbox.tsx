import "./styles.scss";

interface CheckboxProps {
	text: string;
	link: string;
}

export function Checkbox({ text, link }: CheckboxProps) {
	return (
		<div className="checkbox-wrapper">
			<div className="checkbox-content">
				<input type="checkbox" className="checkbox-checkbox" name="Lembre-me" />
				<span>{text}</span>
			</div>
			<div className="checkbox-link">
				<a href="#">{link}</a>
			</div>
		</div>
	);
}
