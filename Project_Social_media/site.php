<html>
  <head>
    <meata charset="utf-8">
      <title></title>
  </head>
  <body>


    <form action="site.php" method="get">
      Name: <input type="text" name="color"> <br>
      Plural: <input type="text" name="plural"> <br>
      Celebrity: <input type="text" name="celebrity"> <br>

      <input type="submit">

    </form>

    <?php
      $color = $_GET["color"];
      $plural = $_GET["plural"];
      $celebrity = $_GET["celebrity"];

      echo "Roses are $color <br>";
      echo "$plural are blue <br>";
      echo "I love $celebrity<br>";
    

    ?>

  </body>

</html>