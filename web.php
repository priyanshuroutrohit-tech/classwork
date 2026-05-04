<?php

//1. WAP to check a number is even or odd

$num = 7;   // Change the number here

if($num % 2 == 0)
{
    echo $num . " is Even";
}
else
{
    echo $num . " is Odd";
}

// 2. WAP to check a number is palindrome or not

$num = 121;   // Change the number here
$original = $num;
$reverse = 0;

while($num > 0)
{
    $rem = $num % 10;
    $reverse = ($reverse * 10) + $rem;
    $num = (int)($num / 10);
}

if($original == $reverse)
{
    echo $original . " is a Palindrome Number <br><br>";
}
else
{
    echo $original . " is Not a Palindrome Number <br><br>";
}


// 3. WAP to print pattern in webpage using PHP

for($i = 1; $i <= 4; $i++)
{
    for($j = 1; $j <= $i; $j++)
    {
        echo "*";
    }
    echo "<br>";
}
?>