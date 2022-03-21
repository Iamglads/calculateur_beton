function calcule(form) {
  // semelle

  let lg1 = eval(form.Length1.value);

  if (lg1 > 0) {
    lg1 = lg1 * eval(form.L1U.value);
    let l1 = eval(form.Width1.value) * eval(form.La1U.value);
    l1 = (l1 + lg1) * 2;
    let h1 = eval(form.Width4.value) * eval(form.La4U.value);
    let p1 = eval(form.Epaisseur1.value) * eval(form.E1U.value);
  } else {
    let h1 = eval(form.Width1.value) * eval(form.La1U.value);
    let l1 = eval(form.Width4.value) * eval(form.La4U.value);
    let p1 = eval(form.Epaisseur1.value) * eval(form.E1U.value);
  }

  // Murs
  let lg2 = eval(form.Length2.value);

  if (lg2 > 0) {
    lg2 = lg2 * eval(form.L2U.value);
    let l2 = eval(form.Width2.value) * eval(form.La2U.value);
    l2 = (l2 + lg2) * 2;
    let h2 = eval(form.Hauteur2.value) * eval(form.H2U.value);
    let p2 = eval(form.Epaisseur2.value) * eval(form.E2U.value);
  } else {
    let h2 = eval(form.Width2.value) * eval(form.La2U.value);
    let l2 = eval(form.Hauteur2.value) * eval(form.H2U.value);
    let p2 = eval(form.Epaisseur2.value) * eval(form.E2U.value);
  }

  // Plancher
  let l3 = eval(form.Length3.value) * eval(form.L3U.value);
  let h3 = eval(form.Width3.value) * eval(form.La3U.value);
  let p3 = eval(form.Epaisseur3.value) * eval(form.E3U.value);

  // Sonotube
  let rayon = eval(form.rayonSonotube.value) * eval(form.R4U.value);
  let l4 = eval(form.Longueur4.value) * eval(form.L4U.value);
  let q4 = eval(form.Quantite4.value);

  let totalSemelle = Math.round(l1 * h1 * p1 * 100 + 0.499) / 100;
  let totalMurs = Math.round(l2 * h2 * p2 * 100 + 0.499) / 100;
  let totalPlancher = Math.round(l3 * h3 * p3 * 100 + 0.499) / 100;
  let totalSonotube =
    (Math.round(PI * Math.pow(rayon, 2) * l4 * q4) * 100) / 100;
  let total = totalSemelle + totalMurs + totalPlancher + totalSonotube;

  form.resultTotalSemelle.value = totalSemelle;
  form.resultTotalMurs.value = totalMurs;
  form.resultTotalPlancher.value = totalPlancher;
  form.resultTotalSonotube.value = totalSonotube;

  // display total
  form.resultTotalAll.value = Math.round(total * 100) / 100;
}
