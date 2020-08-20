interface Serie {
  digits: number[];
}
function Series(serie: string) {
  this.digits = serie.split('');
}

export default Series;
