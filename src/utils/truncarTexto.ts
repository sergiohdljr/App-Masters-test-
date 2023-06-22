export const truncarTexto = (texto: string, comprimentoMaximo: number) => {
  if (texto.length <= comprimentoMaximo) {
    return texto;
  } else {
    const textoTruncado = texto.slice(0, comprimentoMaximo);
    return textoTruncado + "...";
  }
};
