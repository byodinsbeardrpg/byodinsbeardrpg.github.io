roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
$("#character").html(generate_text("character"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
$("#vit").html(vit);
$("#vig").html(vig);
let res = vit + vig;
console.log(res);
$("#res").html(res);
$("#defTotal").html(defTotal);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});