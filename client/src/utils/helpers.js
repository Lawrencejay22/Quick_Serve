export const getStars = (r) => {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  return (
    "★".repeat(full) +
    (half ? "½" : "") +
    "☆".repeat(Math.max(0, 5 - full - half))
  );
};

export const showToast = (msg) => {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
};