roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
$("#character").html(generate_text("character"));
if (character.includes("warrior")){
  defTotal = 3;
} else if (character.includes("skald")) {
  defTotal = 2;
} else if (character.includes("scout")) {
  defTotal = 1;
} else if (character.includes("seer")) {
  defTotal = 1;
}
$("#vit").html(roll(6));
$("#vig").html(roll(6));
var vit = $("#vit").text();
var vig = $("#vig").text();
var res = Number(vit) + Number(vig);
$("#res").html(res);
$("#defTotal").html(defTotal);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});