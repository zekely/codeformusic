stack(
  // piano chords (slow + airy)
  note("<[d4,f#4,a4] [e4,g4,b4] [f#4,a4,c#5] [g4,b4,d5]>")
    .slow(4)
    .sound("piano")
    .gain(0.6)
    .room(0.8),

  // high melody notes
  note("<d5 e5 f#5 a5>")
    .slow(6)
    .sound("piano")
    .gain(0.3)
    .delay(0.4)
    .delaytime(0.3)
    .delayfeedback(0.3),

  // light hi-hat rhythm
  s("~ hh ~ ~")
    .gain(0.2)
    .room(0.9)
)
