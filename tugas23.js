console.log("FILTER\n============================");
const angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

const newAngka = angka.filter((angkaLebihDariLimaBelas) => {
  return angkaLebihDariLimaBelas >= 15;
});

console.log(newAngka);

const newAngka2 = angka.filter(function newAngka(angkaLebihDariLimaBelas) {
  return angkaLebihDariLimaBelas >= 15;
});

console.log(newAngka2);

const angkaLebihDariLimaBelas = (angka) => {
  return angka >= 15;
};
const newAngka3 = angka.filter(angkaLebihDariLimaBelas);

console.log(newAngka3);
