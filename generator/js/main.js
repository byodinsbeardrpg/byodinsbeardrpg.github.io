roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
$("#adventurer").html(generate_text("adventurer"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
var vit = $("#vit").text();
var vig = $("#vig").text();
var res = Number(vit) + Number(vig);
$("#res").html(res);
var def = document.getElementById("defence").value;
$("#defTotal").html(def);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});
