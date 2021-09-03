roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};

console.log(total);
$("#character").html(generate_text("character"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});
$("#armorTotal").html(armorTotal);
$("#total").html(total);
$("#gold").html(roll(6) + roll(6) + roll(6));