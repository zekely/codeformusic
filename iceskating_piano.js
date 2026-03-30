stack(
  //piano chords (slow + airy)
  note("<[0,4,7] ~ [2,5,9] ~ [4,7,11] ~ [5,9,12]>")
    .sound("gm_piano")
    .scale("major")
    .root("d")
    .slow(4)
    .gain(0.6)
    .room(0.8)
    .reverb(0.7),

  //high notes
  note("12 ~ 14 ~ 16 ~ 19")
    .sound("gm_piano")
    .scale("major")
    .root("d")
    .slow(6)
    .gain(0.3)
    .delay(0.4)
    .delaytime(0.3),

  // very light rhythm
  s("~ hh ~ ~")
    .gain(0.2)
    .room(0.9)
)