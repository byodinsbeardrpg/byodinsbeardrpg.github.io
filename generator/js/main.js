roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
const class = generate_text("class");
const defence = generate_text("defence");
const vit = generate_text("vit");
const vig = generate_text("vig");
const res = generate_text("res");
$("#character").html(generate_text("character"));
$("#vit").html(roll(6));
$("#vig").html(roll(6));
console.log(res);
$("#res").html(res);
["str", "dex", "wit", "spi"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});