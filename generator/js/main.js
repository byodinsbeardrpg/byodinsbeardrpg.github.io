roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
if (class.includes("warrior")){
  defTotal = 3;
} else if (class.includes("skald")) {
  defTotal = 2;
} else if (class.includes("scout")) {
  defTotal = 1;
} else if (class.includes("seer")) {
  defTotal = 1;
}
$("#defTotal").html(defTotal);
$("#character").html(generate_text("character"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
console.log(res);
$("#res").html(res);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});