<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>パートナー選択</title>
    <!-- reset.cssが先 -->
    <link rel="stylesheet" href="css/reset.css" />
    <!-- style.cssが自分で設定するcss -->
    <link rel="stylesheet" href="css/style.css" />
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />

</head>
<body>

<    <div class="decisionPartner">
    <div class="partner">
    <div class="nes-container is-rounded">
      <p>▼　パートナーをえらんでね</p>
    </div>
  </div>
</div>
      <div class="select">
        <div class="partner">
          <button class="paperImg" value="paper">
              <img src="img/paper.png" alt="パー" />
          </button>
          <button class="rockImg" value="rock">
              <img src="img/rock.png" alt="グー" />
          </button>
          <button class="scissorsImg" value="scissors">
              <img src="img/scissors.png" alt="チョキ" />
          </button>
      </div>
      </div>
    </div>
    <div class="decisionPartnerView">
      <div class="decisionPartner">
        <div class="nes-container is-rounded">
          <p>この子に決めますか？</p>
        <label>
        <label>
          <input type="radio" class="nes-radio" name="answer" />
          <span class="yes">はい</span>
        </label>      
        <label>
          <input type="radio" class="nes-radio" name="answer" />
          <span class="reSelect">いいえ</span>
        </label>
      </div>
      </div>
   </div>
   
   <!-- 戦った結果 -->
   <div class="resultField">
  <div class="resultFieldCenter">
   <div class="nes-container is-rounded">

    <div class="win">
      <p>▼　まおう に かった！</p>
    </div>
  
    <div class="lose">
      <p>▼　まおう に まけた…</p>
    </div>

    <div class="tie">
      <p>▼　まおう と あいこ になった</p>
    </div>
 
    <p class = "retry"><buttion class="nes-btn">もう1回やる</buttion></p>
  </div>
 </div>
</div>


<!-- jQueryを読み込む！必ず先に！ -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<!-- jsを読み込む -->
<script src="js/app.js"></script>

       


</body>
</html>