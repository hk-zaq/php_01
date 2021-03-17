<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>じゃんけんクエスト</title>
    <!-- reset.cssが先 -->
    <link rel="stylesheet" href="css/reset.css" />
    <!-- style.cssが自分で設定するcss -->
    <link rel="stylesheet" href="css/style.css" />
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
  </head>

  <body>
    <!-- この中に書く -->

  
    <h1 class="top">じゃんけん　クエスト</h1>
    <form method="get" action="select.php" class = "start">
      <p>
      <input type="submit" class="nes-btn" href="#" value = "ぼうけんを始める">
      </p>
</form>
   

    <!-- jQueryを読み込む！必ず先に！ -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

    <!-- jsを読み込む -->
    <script src="js/app.js"></script>

  </body>
</html>
