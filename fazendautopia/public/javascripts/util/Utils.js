
class Utils {
  static exibirFormulario(element, classe, reset = false) {
    let item = document.querySelector(element);
    item.classList.remove(classe);
    if (reset) {
      item.querySelector('form').reset();
    }
  }
  static ocultarFormulario(element, classe, reset = false) {
    let item = document.querySelector(element);
    item.classList.add(classe);
    if (reset) {
      item.querySelector('form').reset();
    }
  }
  static alterarBooleanPorStatusString(numero) {
    if (numero == 1 || numero == true) {
      return 'Ativo';
    } else {
      return 'Bloqueado';
    }
  }
}
