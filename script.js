document.addEventListener("DOMContentLoaded", function () {
  var copyBtn = document.getElementById("copy-cmd");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = copyBtn.getAttribute("data-copy") || "npx sir-claude";
      navigator.clipboard.writeText(text).then(function () {
        var original = copyBtn.textContent;
        copyBtn.textContent = "copied!";
        setTimeout(function () {
          copyBtn.textContent = original;
        }, 1500);
      });
    });
  }
});
