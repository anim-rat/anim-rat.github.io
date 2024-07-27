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

export default function Websites() {
	return (
		<section className="container">
			<h2>Websites</h2>
			<p>
				Much useful information is available on Japanese websites.
			</p>
			<p>
				Enabling automatic site translation in your browser is strongly
				recommended for quickly locating relevant topics.
			</p>
			<Entry
				name="The Association of Japanese Animations (AJA)"
				link="https://aja.gr.jp/"
				note="Contains extensive information on all areas of anime production"
			/>
			<Entry
				name="Japanese Color Certification"
				link="https://japancolor.jp/related_files/JapanColor_Digital_Leaflet_English.pdf"
				note="Describes process for becoming certified in color design"
			/>
			<Entry
				name="Sakugabooru"
				link="https://www.sakugabooru.com/"
				note="Tagged database for animation clips and partially-complete genga"
			/>
			<Entry
				name="Enomoto Method Writing Training"
				link="https://enomotomethod.jp/column/"
				note="Teaches fundamentals of Japanese novel writing"
			/>
		</section>
	)
}