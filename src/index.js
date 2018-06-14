const botonCifrar = document.getElementById("boton-cifrar");
const botonDesCifraar = document.getElementById("boton-des-cifrar");
const offset = document.getElementById("offset");
const encode = document.getElementById("encode");
const decode = document.getElementById("decode");




botonCifrar.addEventListener("click", event => {
  window.cipher.encode(offset.value, encode.value);
});


botonDesCifraar.addEventListener("click", event => {
  window.cipher.decode(decode.value, offset.value);
})
