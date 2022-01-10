const $email = document.getElementById("hidden-electronicmail");
$email.addEventListener('click', e => {
  e.preventDefault();
  var _email = (e.target.dataset.electronicmail.replace(/AT/, '@').replace(/DOT/, '.'));
  e.target.removeAttribute('id');
  e.target.setAttribute('href', 'mailto:' + _email);
  e.target.innerHTML = _email;
}, {once: true});