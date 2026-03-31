stack(
  sound("bd [bd bd] ~ sn bd ~ sn").sometimes(fast(2)),
  sound("hh hh [hh hh] hh").fast(2).pan(sine),
  note("c e g b").sound("sawtooth").fast(2)
)