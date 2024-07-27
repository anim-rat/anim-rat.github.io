import RichLink from "../widgets/RichLink";

function Entry(props: { name: string, link: string, note: string, }) {
	return (
		<RichLink
			name={props.name}
			link={props.link}
			note={props.note}
		/>
	);
}

export default function Translation() {
	return (
		<section className="container">
			<h2>Translation Tools</h2>
			<p>
				With the proper tools and techniques, it is possible to read almost all
				foreign text on a page. These are best paired with a dedicated
				dictionary when precision is needed.
			</p>
			<Entry
				name="Google Translate (Image Mode)"
				link="https://translate.google.com/?sl=ja&tl=en&op=images"
				note="Particular adept with technical language"
			/>
			<Entry
				name="DeepL (Mobile/Desktop)"
				link="https://www.deepl.com/en/translator"
				note="Particularly useful for reading handwriting"
			/>
			<Entry
				name="Tofugu"
				link="https://www.tofugu.com/learn-japanese/"
				note="Learning the basics of Japanese greatly helps translation efforts"
			/>
		</section>
	)
}