export const formatRupiah = (number) => {
  let reverse = number?.toString().split("").reverse().join("");
  console.log("reverse", reverse);
  let ribuan = reverse?.match(/\d{1,3}/g);
  let hasil = ribuan?.join(".").split("").reverse().join("");
  return hasil;
};
