function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var excFacts = []
  var i
  while (i < facts.length) {
    excFacts[i] = `${facts[i]}!!!`
    i ++
    console.log(i)
  }
  return excFacts
}