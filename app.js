// https://www.omnicalculator.com/chemistry/michaelis-menten-equation

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const reactionrateRadio = document.getElementById('reactionrateRadio');
const michaelisconstantRadio = document.getElementById('michaelisconstantRadio');
const maxreactionspeedRadio = document.getElementById('maxreactionspeedRadio');
const substrateconcentrationRadio = document.getElementById('substrateconcentrationRadio');

let reactionrate;
let michaelisconstant = v1;
let maxreactionspeed = v2;
let substrateconcentration = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

reactionrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Michaelis constant';
  variable2.textContent = 'Max reaction speed';
  variable3.textContent = 'Substrate concentration';
  michaelisconstant = v1;
  maxreactionspeed = v2;
  substrateconcentration = v3;
  result.textContent = '';
});

michaelisconstantRadio.addEventListener('click', function() {
  variable1.textContent = 'Reaction rate';
  variable2.textContent = 'Max reaction speed';
  variable3.textContent = 'Substrate concentration';
  reactionrate = v1;
  maxreactionspeed = v2;
  substrateconcentration = v3;
  result.textContent = '';
});

maxreactionspeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Reaction rate';
  variable2.textContent = 'Michaelis constant';
  variable3.textContent = 'Substrate concentration';
  reactionrate = v1;
  michaelisconstant = v2;
  substrateconcentration = v3;
  result.textContent = '';
});

substrateconcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Reaction rate';
  variable2.textContent = 'Michaelis constant';
  variable3.textContent = 'Max reaction speed';
  reactionrate = v1;
  michaelisconstant = v2;
  maxreactionspeed = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(reactionrateRadio.checked)
    result.textContent = `Reaction rate = ${computeReactionrate().toFixed(2)}`;

  else if(michaelisconstantRadio.checked)
    result.textContent = `Michaelis constant = ${computeMichaelisconstant().toFixed(2)}`;

  else if(maxreactionspeedRadio.checked)
    result.textContent = `Max reaction speed = ${computeMaxreactionspeed().toFixed(2)}`;

  else if(substrateconcentrationRadio.checked)
    result.textContent = `Substrate concentration = ${computeSubstrateconcentration().toFixed(2)}`;
})

// calculation

function computeReactionrate() {
  return (Number(maxreactionspeed.value) * Number(substrateconcentration.value)) / (Number(substrateconcentration.value) + Number(michaelisconstant.value));
}

function computeMichaelisconstant() {
  return ((Number(maxreactionspeed.value) * Number(substrateconcentration.value)) / Number(reactionrate.value)) - Number(substrateconcentration.value);
}

function computeMaxreactionspeed() {
  return (Number(reactionrate.value) * (Number(substrateconcentration.value) + Number(michaelisconstant.value))) / Number(substrateconcentration.value);
}

function computeSubstrateconcentration() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}