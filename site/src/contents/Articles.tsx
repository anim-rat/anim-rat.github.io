import RichLink from "../widgets/RichLink";

function Entry(props: { name: string, link: string, note: string }) {
	return (
		<RichLink
			name={props.name}
			link={props.link}
			note={props.note}
		/>
	);
}

export default function Articles() {
	return (
		<section className="container">
			<h2>Articles</h2>
			<p>
				Scattered pages about a specific technique, tool, or procedure.
			</p>
			<Entry
				name="Kotluna on Sweat Types"
				link="https://kotoluna-08.hatenablog.com/entry/2022/07/07/135201"
				note="Briefly explains the two standard types of anime sweat"
			/>
		</section>
	)
}