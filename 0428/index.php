<?php
require("libs/contenido.php");
require("libs/cosas.php");
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  <div class="container">
    <div class="header">
        <ul>
          <?php
          menu($menu);
           ?>
        </ul>
    </div>
    <div class="body">

      <?php
        if (isset($menu[$_GET["p"]-1])) { ?>
          <h3><?php echo $menu[$_GET["p"]-1]['titulo']; ?></h3>
          <p><?php echo $menu[$_GET["p"]-1]['contenido']; ?></p>
          <?php
        } else {
          echo "no se encontro elemento";
        }
       ?>

<pre>
<?php
//rint_r($menu);
 ?>
</pre>

      <?php
      //echo "<p> el valor de p es ".$_GET["p"]." y ".$_GET["q"]."</p>";
    //   if ($_GET["p"]==1)
    //   {
    //   pagina1();
    // } elseif ($_GET["p"]==2) {
    //   pagina2();
    // } elseif ($_GET["p"]==3) {
    //     pagina3();
    //     }

      ?>



    </div>
    <div class="">
      <form class="" action="procesar.php" method="post">
<input type="text" name="nombre" value="" placeholder="Ingrese el nombre">
<input type="password" name="contranha" value="" placeholder="ingrese contrasenha">
<button type="submit" name="button">Enviar</button>
      </form>

    </div>

  </div>
  </body>
</html>
