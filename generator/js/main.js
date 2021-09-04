roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
$("#character").html(generate_text("character"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
var res = '+${"#vit"} + +${"#vig"}';
$("#res").html(res);
$("#defTotal").html(defTotal);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});