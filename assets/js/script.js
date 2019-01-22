var elem = document.getElementById("lastname");

// Attention : message(); ou message(param); ne fonctionneront pas ici,
// il doit s'agir d'une référence au nom d'une fonction et non d'un appel de cette fonction

elem.onblur = message;

function message() {
  alert("Merci de votre participation");
}

// La propriété onblur renvoie le gestionnaire de l'évènement blur (perte de focus) pour l'élément courant.
