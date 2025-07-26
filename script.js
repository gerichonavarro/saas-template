// Just demo alerts for buttons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert('Demo only: This button has no real functionality.');
  });
});
