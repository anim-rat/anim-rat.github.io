import "./RichLink.css";

export default function RichLink(props: {
	name: string,
	link: string,
	note: string,
	language?: 'en' | 'jp',
	lastAccess?: Date
}) {
	const {
		name,
		link,
		note,
		language,
		lastAccess,
	} = props;

	return (
		<article className="rich-link">
			<a href={link} target="_blank">
				<h3>{name}</h3>
			</a>
			<p>{note}</p>
			{language && <p>{language}</p>}
			{lastAccess && <p>{lastAccess.toISOString()}</p>}
		</article>
	)
}