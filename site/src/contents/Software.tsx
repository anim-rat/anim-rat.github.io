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

export default function Software() {
	return (
		<section className="container">
			<h2>Software</h2>
			<p>
				Digital tools assist in the workflow to finalize cel painting and
				composite the final movie. These tools often complements workflows
				starting with pencil and paper.
			</p>
			<Entry
				name="Clip Studio Paint"
				link="https://www.clipstudio.net/en/dl/"
				note="End-to-end animation and compositing (EX version strongly recommended)"
			/>
			<Entry
				name="Retas PaintMan"
				link="http://www.retasstudio.net/products/paintman/"
				note="Industry standard coloring tool (limited international availability)"
			/>
			<Entry
				name="OpenToonz"
				link="https://opentoonz.github.io/e/"
				note="End-to-end animation and compositing (strong tool with limited support)"
			/>
			<Entry
				name="Ghibli Scanning Tool"
				link="https://opentoonz.github.io/e/download/gts.html"
				note="Converts pencil drawings to color designators (long page-load time)"
			/>
			<Entry
				name="Adobe After Effects"
				link="https://www.adobe.com/products/aftereffects.html"
				note="Industry standard compositing tool (Adobe CC license required)"
			/>
			<Entry
				name="OLM Anime Tools"
				link="https://olm.co.jp/rd/technology/tools/?lang=en"
				note="Must have plugins for After Effects (smoothing plugin is industry standard)"
			/>
			<Entry
				name="Keyframe MP 2"
				link="https://zurbrigg.com/keyframe-mp"
				note="Handy frame-by-frame video player for animation (paid license)"
			/>
			<Entry
				name="FFmpeg"
				link="https://www.ffmpeg.org/download.html"
				note="Command line video manipulation tool (requires programming knowledge)"
			/>
			<Entry
				name="OpenToonz User Manuals"
				link="https://opentoonz.readthedocs.io/en/latest/"
				note="Instructions for using all major features of OpenToonz"
			/>
			<Entry
				name="Retas Studio User Manuals"
				link="https://www.clip-studio.com/clip_site/rental/rental_download/rsrental/manual"
				note="Instructions for using Retas Studio software (includes Retas PaintMan)"
			/>
		</section>
	)
}