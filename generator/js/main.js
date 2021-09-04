roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
let defTotal = 0;
if (character.includes("warrior")){
  defTotal = 3;
} else if (character.includes("skald")) {
  defTotal = 2;
} else if (character.includes("scout")) {
  defTotal = 1;
} else if (character.includes("seer")) {
  defTotal = 1;
}
$("#character").html(generate_text("character"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
console.log(res);
$("#res").html(res);
$("#defTotal").html(defTotal);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});