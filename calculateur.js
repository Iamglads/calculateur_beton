const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const btnCalculate = document.querySelector(".btn-calculate");
const btnClear = document.querySelector(".btn-clear");

function multiply(paramOne, paramTwo) {
  return paramOne * paramTwo;
}

function calcule(form) {
  // semelle

  var longueurSemelle = form.Length1.value;

  if (longueurSemelle > 0) {
    longueurSemelle = multiply(longueurSemelle, form.L1U.value);
    var l1 = multiply(form.largeurSemelle.value, form.La1U.value);
    l1 = (l1 + longueurSemelle) * 2;
    var h1 = multiply(form.Width4.value, form.La4U.value);
    var p1 = multiply(form.Epaisseur1.value, form.E1U.value);
  } else {
    var h1 = multiply(form.largeurSemelle.value, form.La1U.value);
    var l1 = multiply(form.Width4.value, form.La4U.value);
    var p1 = multiply(form.Epaisseur1.value, form.E1U.value);
  }

  // Murs
  var longueurMurs = form.Length2.value;

  if (longueurMurs > 0) {
    longueurMurs = longueurMurs * form.L2U.value;
    var l2 = multiply(form.Width2.value, form.La2U.value);
    l2 = (l2 + longueurMurs) * 2;
    var h2 = multiply(form.Hauteur2.value, form.H2U.value);
    var p2 = multiply(form.Epaisseur2.value, form.E2U.value);
  } else {
    var h2 = multiply(form.Width2.value, form.La2U.value);
    var l2 = multiply(form.Hauteur2.value, form.H2U.value);
    var p2 = multiply(form.Epaisseur2.value, form.E2U.value);
  }

  // Plancher
  var l3 = multiply(form.Length3.value, form.L3U.value);
  var h3 = multiply(form.Width3.value, form.La3U.value);
  var p3 = multiply(form.Epaisseur3.value, form.E3U.value);

  // Sonotube
  var rayon = multiply(form.rayonSonotube.value, form.R4U.value);
  var l4 = multiply(form.Longueur4.value, form.L4U.value);
  var q4 = form.Quantite4.value;

  var totalSemelle = Math.round(l1 * h1 * p1 * 100 + 0.499) / 100;
  var totalMurs = Math.round(l2 * h2 * p2 * 100 + 0.499) / 100;
  var totalPlancher = Math.round(l3 * h3 * p3 * 100 + 0.499) / 100;
  var totalSonotube =
    (Math.round(Math.PI * Math.pow(rayon, 2) * l4 * q4) * 100) / 100;
  var total = totalSemelle + totalMurs + totalPlancher + totalSonotube;

  form.resultTotalSemelle.value = totalSemelle;
  form.resultTotalMurs.value = totalMurs;
  form.resultTotalPlancher.value = totalPlancher;
  form.resultTotalSonotube.value = totalSonotube;

  // display total
  form.resultTotalAll.value = Math.round(total * 100) / 100;
}

btnCalculate.addEventListener("click", () => {
  calcule(form);
});

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});
