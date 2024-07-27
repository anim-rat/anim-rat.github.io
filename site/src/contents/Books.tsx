import RichLink from "../widgets/RichLink";

function Entry(props: { name: string, author: string, link: string, note: string }) {
	return (
		<RichLink
			name={props.name}
			link={props.link}
			note={props.author + '\n' + props.note}
		/>
	);
}

export default function Books() {
	return (
		<section className="container">
			<h2>Books</h2>
			<p>
				Books are a definitive resource for drawing theory and technique. All
				books listed in this section are in Japanese.
			</p>
			<p>
				Commercial books link to their respective <a
				href="https://www.amazon.co.jp/" target="_blank">Amazon.jp</a> listing.
			</p>
			<Entry
				name="Animator Tasks"
				author="The Association of Japanese Animations"
				link="https://aja.gr.jp/jigyou/ikusei/workbook"
				note="Exercises and fundamentals for Japanese animators (released by AJA for free)"
			/>
			<Entry
				name="Manual for Production Assistants"
				author="The Association of Japanese Animations"
				link="https://aja.gr.jp/jigyou/ikusei/%E3%80%8C%E3%82%A2%E3%83%8B%E3%83%A1%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E5%88%B6%E4%BD%9C%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B-%E5%88%B6%E4%BD%9C%E9%80%B2%E8%A1%8C%E3%81%AE%E3%83%9E%E3%83%8B%E3%83%A5"
				note="Describes management-areas of the production pipeline (includes official English translation)"
			/>
			<Entry
				name="Figure Drawing Fundamentals by an Animator"
				author="Toshi"
				link="https://www.amazon.co.jp/dp/4844365622"
				note="Advanced insight for drawing humans effectively"
			/>
			<Entry
				name="How to Improve Illustration without Pain"
				author="Naoki Saito"
				link="https://www.amazon.co.jp/dp/B0928DSBG8"
				note="Consistently recommended as the starting place for new illustrators"
			/>
		</section>
	)
}