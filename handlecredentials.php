<?php
if (!empty($_POST['na']) && !empty($_POST['pw']))
{
    echo "<strong>Post received.</strong> <br/> <br/> <strong>Name:</strong> " . $_POST['name'] . "<br/><strong>Info:</strong> ";
}
else
{
    echo "Post not received.";
}
?>
