document.addEventListener(
  "click",
  function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (
      target.hasAttribute("data-toggle") &&
      target.getAttribute("data-toggle") == "modal"
    ) {
      if (target.hasAttribute("data-target")) {
        var m_ID = target.getAttribute("data-target");
        var getDemosBtn = document
          .querySelector(`#${m_ID}`)
          .querySelector("#get-demos");
        var backBtn = document
          .querySelector(`#${m_ID}`)
          .querySelector("#back-button");
        document.getElementById(m_ID).classList.add("open");
        document.getElementsByTagName("body")[0].classList.add("no-scroll");
        if (getDemosBtn) {
          getDemosBtn.addEventListener("click", () => {
            getDemosBtn.closest("#modal-content").classList.add("hide");
            getDemosBtn
              .closest("#modal-content")
              .nextElementSibling.classList.add("modal-form-show");
          });
          backBtn.addEventListener("click", (e) => {
            getDemosBtn.closest("#modal-content").classList.remove("hide");
            getDemosBtn
              .closest("#modal-content")
              .nextElementSibling.classList.remove("modal-form-show");
          });
        }
      }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if (
      (target.hasAttribute("data-dismiss") &&
        target.getAttribute("data-dismiss") == "modal") ||
      target.classList.contains("modal")
    ) {
      var modal = document.querySelector('[class="modal open"]');
      modal.classList.remove("open");
      document.getElementsByTagName("body")[0].classList.remove("no-scroll");
    }
  },
  false
);
