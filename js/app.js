// 組み合わせると
$(function () {
  // この中に記述

  // パーボタンを押す
  $(".paperImg").click(function () {
    $(".decisionPartnerView").fadeIn();
    $(".rockImg").fadeOut();
    $(".scissorsImg").fadeOut();
    myPartner = $(this).val();
  });
  // グーを選んだ
  $(".rockImg").click(function () {
    $(".decisionPartnerView").fadeIn();
    $(".paperImg").fadeOut();
    $(".scissorsImg").fadeOut();
    myPartner = $(this).val();
  });
  // チョキを選んだ
  $(".scissorsImg").click(function () {
    $(".decisionPartnerView").fadeIn();
    $(".rockImg").fadeOut();
    $(".paperImg").fadeOut();
    myPartner = $(this).val();
  });

  // 「はい」ボタンを押す
  $(".yes").click(function () {
    console.log(myPartner);
    // $(".decisionPartner").fadeOut();
    // 魔王の手をランダムで作る
    var t = Math.ceil(Math.random() * 3);
    var devilPartner = "";
    if (t === 1) {
      devilPartner = "魔王はグーを選んだ";
    } else if (t === 2) {
      devilPartner = "魔王はチョキを選んだ";
    } else if (t === 3) {
      devilPartner = "魔王はパーを選んだ";
    }
    console.log(devilPartner);

    // 自分がパーを選んだ時
    if (myPartner === "paper" && devilPartner === "魔王はグーを選んだ") {
      $(".win").fadeIn();
      $(".win").prepend("▼　まおう は グー をえらんだ");
      $(".win").append("<img src='img/rock.png' alt='グー' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    } else if (
      myPartner === "paper" &&
      devilPartner === "魔王はチョキを選んだ"
    ) {
      $(".lose").fadeIn();
      $(".lose").prepend("▼　まおう は チョキ をえらんだ");
      $(".lose").append("<img src='img/scissors.png' alt='チョキ' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    } else if (myPartner === "paper" && devilPartner === "魔王はパーを選んだ") {
      $(".tie").fadeIn();
      $(".tie").prepend("▼　まおう は パー をえらんだ");
      $(".tie").append("<img src='img/paper.png' alt='パー' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    }
    //  自分がチョキを選んだ時
    else if (
      myPartner === "scissors" &&
      devilPartner === "魔王はグーを選んだ"
    ) {
      $(".lose").fadeIn();
      $(".lose").prepend("▼　まおう は グー をえらんだ");
      $(".lose").append("<img src='img/rock.png' alt='グー' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    } else if (
      myPartner === "scissors" &&
      devilPartner === "魔王はチョキを選んだ"
    ) {
      $(".tie").fadeIn();
      $(".tie").prepend("▼　まおう は チョキ をえらんだ");
      $(".tie").append("<img src='img/scissors.png' alt='チョキ' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    } else if (
      myPartner === "scissors" &&
      devilPartner === "魔王はパーを選んだ"
    ) {
      $(".win").fadeIn();
      $(".win").prepend("▼　まおう は パー をえらんだ");
      $(".win").append("<img src='img/paper.png' alt='パー' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    }
    //  自分がグーを選んだ時
    else if (myPartner === "rock" && devilPartner === "魔王はグーを選んだ") {
      $(".tie").fadeIn();
      $(".tie").prepend("▼　まおう は グー をえらんだ");
      $(".tie").append("<img src='img/rock.png' alt='グー' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    } else if (
      myPartner === "rock" &&
      devilPartner === "魔王はチョキを選んだ"
    ) {
      $(".win").fadeIn();
      $(".win").prepend("▼　まおう は チョキ をえらんだ");
      $(".win").append("<img src='img/scissors.png' alt='チョキ' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    } else if (myPartner === "rock" && devilPartner === "魔王はパーを選んだ") {
      $(".lose").fadeIn();
      $(".lose").prepend("▼　まおう は パー をえらんだ");
      $(".lose").append("<img src='img/paper.png' alt='パー' />");
      $(".resultField").fadeIn();
      $(".retry").fadeIn();
    }
  });

  // 「選びなおす」ボタンを押す

  $(".reSelect").click(function () {
    $(".paperImg").fadeIn();
    $(".scissorsImg").fadeIn();
    $(".rockImg").fadeIn();
    $(".decisionPartnerView").fadeOut();
  });

  // 「もう1回やる」ボタンを押す

  $(".retry").click(function () {
    location.reload();
  });
});
