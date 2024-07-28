export default function TracePaint() {
  return (
    <section className="container">
      <h2>Trace Paint</h2>
      <p>
        <strong>Trace-paint</strong> is the process of converting a scanned
        pencil drawing into a clean, colorized anime cel.
      </p>
      <p>
        <strong>Trace</strong> refers to the digitized lines extracted from a
        clean cel drawing. Anime cels are always aliased, meaning there is no
        smooth transition between color regions.
      </p>
      <p>
        <strong>Paint</strong> refers to the process of using a color model to
        fill the areas of a cel with the proper colors. This is sometimes called
        "digital painting" and involves supervision on multiple levels to ensure
        consistency.
      </p>
      <p>
        Traces come in 4 colors.
      </p>
      <ul>
        <li>
          Black lines are visible in the final cel. Often they are recolored
          slightly to improve cohesion.
        </li>
        <li>
          Red lines describe boundaries of color regions and edges of
          highlights. Key places red lines are used are to close the shape of
          the eye and indicate hair highlights. Red lines are not visible in the
          final cel.
        </li>
        <li>
          Blue lines describe the separator between light and shadow. Blue lines
          are not visible in the final cel.
        </li>
        <li>
          Green lines are used if extra information is needed that would be
          confusing to draw using red separators. Green lines are not visible in
          the final cel.
        </li>
      </ul>
      <p>
        Cels before the cleanup pass often leverage colored fills to indicate
        which half of the trace is associated with the colored portion.
      </p>
      <p>
        Additional trace colors beyond red, blue, and green may be used
        depending on specific needs of the production.
      </p>
    </section>
  );
}
