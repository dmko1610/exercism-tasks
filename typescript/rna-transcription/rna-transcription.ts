const DNA: any = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

class Transcriptor {
  toRna(inputCode: string) {
    return inputCode.split('').map(el => {
      if (!DNA[el]) {
        throw new Error('Invalid input DNA.')
      }
      return DNA[el]
    }).join('');
  }
}

export default Transcriptor