// document.querySelectorAll('.drag-list li').forEach(elm => {


//   elm.ondragstart = function () {
//     event.dataTransfer.setData('text/plain', event.target.id);
//     event.target.style.background = "#dd0000";
//   };


//   elm.ondragover = function () {
//     event.preventDefault();
//     let rect = this.getBoundingClientRect();
//     if ((event.clientY - rect.top) < (this.clientHeight / 2)) {
//       //マウスカーソルの位置が要素の半分より上
//       event.target.style.background = "#dd0000";
//     } else {
//       //マウスカーソルの位置が要素の半分より下
//       event.target.style.background = "#ffcf00";
//     }
//   };


//   elm.ondragleave = function () {
//     this.style.borderTop = '';
//     this.style.borderBottom = '';
//     event.target.style.background = '';
//   };


//   elm.ondrop = function () {
//     event.preventDefault();

//     let id = event.dataTransfer.getData('text/plain');
//     let elm_drag = document.getElementById(id);

//     let rect = this.getBoundingClientRect();
//     if ((event.clientY - rect.top) < (this.clientHeight / 2)) {
//       //マウスカーソルの位置が要素の半分より上
//       this.parentNode.insertBefore(elm_drag, this);
//     } else {
//       //マウスカーソルの位置が要素の半分より下
//       this.parentNode.insertBefore(elm_drag, this.nextSibling);
//     }
//     event.target.style.background = '';
//   };
// });


let score = 0;

function showScore() {
  const totalScore = document.getElementById('score-message');

  if (score === 3) {
    totalScore.innerHTML = score + "点：満点！おめでとう！"
  } else if (score === 2) {
    totalScore.innerHTML = score + "点：あともう一息！";
  } else if (score === 1) {
    totalScore.innerHTML = score + "点：まあまあ";
  } else {
    totalScore.innerHTML = score + "点：残念";
  }
}

/**
1問目の正解はBの清少納言
2問目の正解はAの中国
3問目の正解はCのナイル
**/

const correct = '正解です';
const incorrect = '不正解です';

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = '1問目：' + quiz_1.answer.value + 'を選択しました';

  if (quiz_1.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
    // 正解はB
  } else if (quiz_1.answer.value == 'b') {
    console.log(select);
    console.log(correct);
  } else if (quiz_1.answer.value == 'c') {
    score++;
    console.log(select);
    console.log(incorrect);
  } else {
    alert('1問目の答えを入力してください');
  }
  console.log('現在の点数：' + score);
}
function answerQuiz2() {
  const quiz_2 = document.getElementById('quiz-2');
  const select = '2問目：' + quiz_2.answer.value + 'を選択しました';

  // 正解はA
  if (quiz_2.answer.value == 'a') {
    score++;
    console.log(select);
    console.log(correct);
  } else if (quiz_2.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  } else if (quiz_2.answer.value == 'c') {
    console.log(select);
    console.log(incorrect);
  } else {
    alert('2問目の答えを入力してください');
  }
  console.log('現在の点数：' + score);
}

function answerQuiz3() {
  const quiz_3 = document.getElementById('quiz-3');
  const select = '3問目：' + quiz_3.answer.value + 'を選択しました';

  if (quiz_3.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  } else if (quiz_3.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
    // 正解はC
  } else if (quiz_3.answer.value == 'c') {
    score++;
    console.log(select);
    console.log(correct);
  } else {
    alert('3問目の答えを入力してください');
  }
  console.log('現在の点数：' + score);
}
function addAnswer_abbestellen() {
  alert('正解は Ich bestellte ein Taxi ab. です。\n前綴りは分離します。');
}
function addAnswer_abschalten() {
  alert('正解は Schaltetest du das Radio ab? です。\n前綴りは分離します。');
}

function addAnswer_abwaschen() {
  alert('正解は Er wäscht den Schmutz von den Händen ab. です。\n前綴りは分離します。');

}
function addAnswer_anbinden() {
  alert('正解は Er bindet den Hund an. です。\n前綴りは分離します。\n');

}
function addAnswer_anbrennen() {
  alert('正解は　Sie brennt Holz an. です。\n前綴りは分離します。');
}
function addAnswer_ansprechen() {
  alert('正解は Sie spricht Kolleggen mit Vornamen an. です。\n前綴りは分離します。');
}
function addAnswer_aufessen() {
  alert('正解は Iß deine Kartoffeln auf! です。\n前綴りは分離します。')
}
function addAnswer_aufleuchten() {
  {
    alert('正解は Seine Augen leuchteten auf. です。\n前綴りは分離します。')
  }
}
function addAnswer_aufschließen() {
  {
    alert('正解は Er schließt die Tür auf. です。\n前綴りは分離します。')
  }
}
function addAnswer_auslesen() {
  {
    alert('正解は Goethe liest man nie aus. です。\n前綴りは分離します。')
  }
}
function addAnswer_ausschlafen() {
  {
    alert('正解は Im Urlaub habe ich morgens richtig ausgeschlafen. です。\n前綴りは分離しません。');
  }
}
function addAnswer_aussterben() {
  {
    alert('正解は Die Dummen sterben nicht aus. です。\n前綴りは分離します。');
  }
}
function addAnswer_einstürzen() {
  {
    alert('正解は Das Haus wollte einstürzen. です。\n前綴りは分離しません。')
  }
}
function addAnswer_eintreten() {
  {
    alert('正解は Das Raumschiff ist wieder in die Erdatmosphäre eingetreten. です。\n前綴りは分離します。')
  }
}
function addAnswer_einwickeln() {
  {
    alert('正解は Er wickelt ein Geschenk ein. です。\n前綴りは分離します。')
  }
}
function addAnswer_mitarbeiten() {
  {
    alert('正解は Wir arbeiten aktiv mit. です。\n前綴りは分離します。')
  }
}
function addAnswer_mitleiden() {
  {
    alert('正解は Ich leide seiner Not mit. です。\n前綴りは分離します。')
  }
}
