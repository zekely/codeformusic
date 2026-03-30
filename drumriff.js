stack(
  // groovy loop
  s("bd ~ sd ~ bd hh sd hh")
    .gain(0.9),

  // arpeggiated feel
  note("0 4 7 12 7 4")
    .sound("gm_guitar_clean")
    .scale("minor")
    .root("c")
    .slow(2)
    .gain(0.6)
)