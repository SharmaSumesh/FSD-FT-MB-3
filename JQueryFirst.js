<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="jquery.js"></script>
</head>
<body>
    
</body>
<script>
    $(document).ready(function()
    {
        alert("Hello world");
    }
    )
</script>
</html> -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

</head>
<body>
    
</body>
<script>
    $(document).ready(function()
    {
        alert("Hello World");
    })
</script>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <style>
        #first
        {
            border: 2px solid black;
            background-color: aqua;

        }
    </style>
</head>
<body>
    <div id="first">
        <h1>This is heaidng</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum?</p>
    </div>
</body>
<script>
    $(document).ready(function()
    {
        var a = $("#first").html(); // innerHTML 
        console.log(a);
    })
</script>
</html>
Basic Synatx of jquery :- 
$(document).ready(function()
{
    <!-- writes jquery here -->
})
    var a = document.getElementsByClassName("first");
    document.getElementById("first")
document.getElementByClass("first")
    // but in jquery 
    $(.first);
    $(#firstdi);
    $('p');
</script>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

</head>
<body>
    <div class="first">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, cum.</p>
     

    </div>
    <div id="firstid">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam!
    </div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus!</p>
    <button>Hide</button>
    <button class="btn">show</button>
</body>
<script>
    $(document).ready(function()
    {
        $('button').click(function()
        {
            $('.first').hide();
        });
    })
    $(document).ready(function()
    {
        $('.btn').click(function()
        {
            $('.first').show();
        });
    })
    
</script>
<script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

</head>
<body>
    <h1>Lorem ipsum dolor sit.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, perspiciatis unde. Cupiditate quas commodi aliquid repellat odio laudantium dolor magni delectus quaerat tempora. Debitis voluptate repellat odio repellendus omnis excepturi!\</p>
    <button>click</button>
</body>
<script>
     $(document).ready(function()
    {
      $('button').click(function()
      {
        $("p:first").hide();
      }
      );
    })
</script>
</html>
dblclick :- 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

</head>
<body>
    <div class="first">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>

    </div>
</body>
<script>
    $(document).ready(function()
    {
      $('p').dblclick(function()
      {
        $(this).hide();
      }
      );
    })
</script>
</html>
MouseEnter: -
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

</head>
<body>
    <div id="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id.</div>

</body>
<script>
    $(document).ready(function()
{
  $('#first').mouseenter(function()
  {
    alert("Hello")
  }
  );
})
</script>

</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

</head>
<body>
    <div id="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, id.</div>

</body>
<script>
    $(document).ready(function()
{
  $('#first').mousedown(function()
  {
    alert("Hello")
  }
  );
})
</script>

</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <style>
        #first
        {
            height: 100px;
            width: 100px;
            background-color: aqua;
            color: white;
        }
        #second
        {
            height: 100px;
            width: 100px;
            background-color: antiquewhite;

        }
    </style>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    </head>
<body>
<div id="first"></div>
<div id="second"></div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate.</p>
<button>Click here</button>
</body>
<script>
    $(document).ready(function()
    {
      $('button').click(function()
      {
        $('.first').fadeOut();
        $('#second').fadeOut(3000);
      });
    });
</script>
</html>
Fade:-
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <style>
        #first
        {
            height: 100px;
            width: 100px;
            background-color: aqua;
            color: white;
        }
        #second
        {
            height: 100px;
            width: 100px;
            background-color: antiquewhite;

        }
    </style>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    </head>
<body>
<div id="first"></div>
<div id="second"></div>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate.</p>
<button>Click here</button>
</body>
<script>
    $(document).ready(function()
    {
     $('button').click(function()
     {
        $("#second").fadeToggle();
     });
    });
</script>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
</head>
<body>
    <div id="first">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, veniam?</div>
    <div id="second">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, veniam?</div>
    <div id="third">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, veniam?</div>
    <button>first</button>
</body>
<script>
 $(document).ready(function()
    {
        $('button').click(function()
        {
            var a = $("#first").html();
              console.log(a);
        })
   
    // var b = $("#second").html();
    // var c=  $("#third").html();
    // console.log(a);
    // console.log(b);
    // console.log(c);
    });
</script>
</html>
