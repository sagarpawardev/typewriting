var msgs = ["Thankyou for your time to pave a way for us"];

// Typewriting Program
var msgIdx = -1;
function nextMsg() {
  msgIdx = (msgIdx + 1) % msgs.length;
  return Array.from(msgs[msgIdx]);
}

var stkVisible = [];
var stkInvisible = nextMsg().reverse();
var forward = true;

function typeNextIn(time) {
  var txt = document.getElementById("txt");
  txt.innerHTML = stkVisible.join("");
  setTimeout(() => {
    if (forward) {
      stkVisible.push(stkInvisible.pop());
      if (stkInvisible.length === 0) {
        typeNextIn(800);
        forward = false;
      } else {
        typeNextIn(250);
      }
    } else {
      stkInvisible.push(stkVisible.pop());
      if (stkVisible.length == 0) {
        forward = true;
        stkInvisible = nextMsg().reverse();
        typeNextIn(1000);
      } else {
        typeNextIn(100);
      }
    }
  }, time);
}

function blinkCursor() {
  setInterval(() => {
    toggleVisiblity();
  }, 350);
}

function toggleVisiblity() {
  var cursor = document.getElementById("cursor");
  cursor.style.visibility =
    cursor.style.visibility === "visible" ? "hidden" : "visible";
}

typeNextIn(0);
blinkCursor();
