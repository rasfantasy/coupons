(function(window, document, undefined) {

  // code that should be taken care of right away

  window.onload = init;

  function init(){
 var cpnBtn = document.querySelector("#cpnBtn");
            var cpnCode = document.getElementById("cpnCode");
            cpnBtn.onclick = function(){
                navigator.clipboard.writeText(cpnCode.innerHTML);
                cpnBtn.innerHTML ="Скопировано";
                setTimeout(function(){
                    cpnBtn.innerHTML="Скопировать код";
                }, 3000);
            }


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const coupons = urlParams.get('coupon');
cpnCode.textContent = coupons;

  }

})(window, document, undefined);