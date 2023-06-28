cat(parseInt(prompt("Masukkan angka! :")));

function cat(pola) {
  let hasil = "";

  for (let i = 1; i <= pola + 1; i++) {
    for (let j = 1; j <= pola + 2; j++) {
      hasil += "🐈";
    }
    hasil += "\n";
  }

  console.log(hasil);
}
