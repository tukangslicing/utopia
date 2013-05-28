<html>

<body>
<?php
        echo form_open('SessionManager'); 
        ?>
        Username  <input type="text" name="username"><br>
        Password <input type="password" name="password"><br>
        <input type="submit" value="Log In">
        <div id="error">
                <?php echo validation_errors(); ?> 
        </div>

</body>

</html>