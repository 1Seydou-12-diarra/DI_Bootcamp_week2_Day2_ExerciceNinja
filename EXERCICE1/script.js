/**
 * Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
 */


const PremièreDateAniv = Number(prompt("entrez la premiere annee d'anniversaire"));
const DeuxiemeDateAniv = Number(prompt("entrez la deuxieme annee d'anniversaire"));

if (PremièreDateAniv < DeuxiemeDateAniv) {
  // Personne 2 est plus jeune
  const ageDifference = DeuxiemeDateAniv - PremièreDateAniv;
  const halfAge = ageDifference * 2;
  const halfAgeYear = PremièreDateAniv + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else if (DeuxiemeDateAniv < PremièreDateAniv) {
  // Personne 1 est plus jeune
  const ageDifference = PremièreDateAniv - DeuxiemeDateAniv;
  const halfAge = ageDifference * 2;
  const halfAgeYear = DeuxiemeDateAniv + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else {
  // Les personnes ont le même âge
  console.log(`Les personnes ont le même âge`);
}