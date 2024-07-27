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

export default function Tutorials() {
	return (
		<section className="container">
			<h2>Tutorials</h2>
			<p>
				Videos and websites specifically designed for explaining techniques in
				detail.
			</p>
			<p>
				Some are in English, some are in Japanese. All are very valuable
				starting points for advanced topics.
			</p>
			<Entry
				name="Dong Chang (YouTube)"
				link="https://www.youtube.com/@DongChang/videos"
				note="Extensive technique explanations in short video format in English"
			/>
			<Entry
				name="Making an Eye Catch (YouTube)"
				link="https://www.youtube.com/playlist?list=PLtDSIiNInRZnobbFoFtZDJLK35gmNCQ-h"
				note="Recordings of an onboarding series for a small Japanese studio with English subtitles"
			/>
		</section>
	)
}