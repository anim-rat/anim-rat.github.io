function Link(props: { text: string, url: string }) {
  return (
    <a href={props.url} target="_blank">{props.text}</a>
  );
}

export default function ResolutionAndNaming() {
  return (
    <section className="container">
      <h2>Resolution and Naming</h2>
      <p>
        Anime is scanned at a specific resolution and named according to
        prescribed formats. The following resources help to describe some of
        these conventions.
      </p>
      <p>The following public blog post explains some of these conventions.</p>
      <p>
        <Link
          text="Kotluna on Finishing Precautions"
          url="https://kotoluna-08.hatenablog.com/entry/2022/06/14/163525" />
      </p>
      <p>
        Further information can be found in some of the production material for
        major studios. In general, the following points summarize the major
        ideas.
      </p>
      <ul>
        <li>Paper cels are scanned at 144 dpi (2x screen resolution)</li>
        <li>Finished cels are usually 1600 x 900 pixels or smaller</li>
        <li>Cels are named according to their column (such as <code>a[####].tga</code>)</li>
        <li>Suffixes distinguish related cel sequences (such as <code>a_mask[####].tga</code>)</li>
        <li>Targa is the standard format for cels (previews can be generated using <Link text="Pictus" url="https://poppeman.se/pictus/" />)</li>
        <li>Timesheets, layout charts, cels, and backgrounds are kept together in a numbered cut folder (a cut is one shot)</li>
        <li>Cuts are ordered by number from start to finish (movies include 1000+ cuts)</li>
      </ul>
      <p>
        Further metrics for size and placement of guidelines are available on the AJA site.
      </p>
      <p>
        <Link text="AJA Layout Paper Specifications" url="https://aja.gr.jp/jigyou/chousa/aja_layout" />
      </p>
    </section>
  );
}

