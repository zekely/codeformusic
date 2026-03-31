stack(
  sound("bd ~ ~ sn ~ ~ bd ~").gain(0.7).room(0.5),
  sound("~ hh ~ hh ~ hh ~ hh").gain(0.25).room(0.8),
  note("c ~ d ~ g ~ e ~").sound("sine").slow(2).room(0.9)
)