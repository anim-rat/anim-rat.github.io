import RichLink from "../widgets/RichLink";

function Entry(props: { name: string, type: String, studio: string, }) {
	const title = `${props.name} - ${props.type}`;
	return (
		<RichLink
			name={title}
			note={props.studio}
		/>
	);
}

export default function Material() {
	return (
		<section className="container">
			<h2>Material</h2>
			<p>
				All productions create artifacts to describe characters, props, and
				environments in detail. These collectively form the "settei" (or
				setting) of a series. In addition to character sheets, some studios
				release keyframes, genga (rough keyframes), storyboards, layouts, and
				color designation guides.
			</p>
			<p>
				Not all material is made the same. This list focuses on material for
				series that are in-color, include detailed notes, and are generally very
				complete.
			</p>
			<p>
				Due to significant copyright limitations, links are not provided for any
				of the following entries.
			</p>
			<Entry
				name="Little Witch Academia (TV)"
				type="Settei"
				studio="Studio Trigger"
			/>
			<Entry
				name="Brand New Animal"
				type="Settei"
				studio="Studio Trigger"
			/>
			<Entry
				name="The Idolmaster Cinderella Girls"
				type="Settei"
				studio="A-1 Pictures"
			/>
			<Entry
				name="Kill La Kill Keyframes"
				type="Keyframes"
				studio="Studio Trigger"
			/>
			<Entry
				name="Kiki's Delivery Service"
				type="Storyboard"
				studio="Studio Ghibli"
			/>
			<Entry
				name="The Idolmaster Cinderella Girls"
				type="Color Model"
				studio="Telecom Animation Film"
			/>
			<Entry
				name="Lupin the Third"
				type="Color Model"
				studio="Telecom Animation Film"
			/>
		</section>
	)
}