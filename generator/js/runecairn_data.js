gen_data['adventurer'] = [
  'You are <i> {name}</i>. You have {physique} physique, {skin} skin, {hair} hair, and {face} face. You speak in a {speech} manner. You are {vice} yet {virtue}.<p>In another life, you were a {class}'
]

gen_data['class'] = [
  '{warrior}','{skald}','{scout}','{seer}'
]

gen_data['warrior'] = [
  '<b>warrior</b>.<h3>Equipment</h3><li><b>Key item: </b>Linden wood shield</li><li><b>Armour: </b>Chainmail (2 Defence, bulky)</li><li><b>Shield: </b>Linden wood shield (<b>key item</b>, +1 Defence)</li><li><b>Weapon(s): </b>Bearded axe (d8), ash wood spear (d6, 20\')</li><li><b>Other gear: </b>Memento of defeat</li><li><b>Inventory: </b> Remaining free slots, <b>4 out of 10</b></li><h3>Skills</h3> <p><em><strong>Block (reaction)</strong></em>. Raise shield; <strong>Str</strong> save to avoid all <strong>physical damage</strong> (<strong>Fatigue</strong>).</p> <p><strong><em>Disarm</em>.</strong> Hook your opponent’s weapon hand; target needs to make a <strong>Dex</strong> save or be disarmed (<strong>Fatigue</strong>).</p> <p><strong><em>Hack</em>.</strong> Attack your opponent in a frenzy for <strong>double damage</strong> (<strong>Fatigue</strong>).</p> <ul> <li><strong>Dire strike</strong>: Your opponent must make a <strong>Str</strong> save or stagger from the ferocity of the attack, moving back 5’ and losing their next turn.</li> </ul> <p><strong><em>Parry (reaction)</em>.</strong> Deflect an incoming attack and riposte (<strong>Str</strong>):</p> <ul> <li><strong>Success:</strong> Avoid all <strong>physical damage</strong> and retaliate for <strong>damage advantage.</strong></li> <li><strong>Failure:</strong> Retaliatory attack from the target at <strong>damage advantage</strong>.</li> </ul> <p><strong><em>Thrust</em>.</strong> Lunge forward to extend the range of your weapon and strike targets up to <strong>10 feet</strong> away (<strong>Fatigue</strong>).</p><input type="hidden" id="defence" name="defence" value="3">'
]
  
gen_data['skald'] = [
  '<b>skald</b>.<h3>Equipment</h3><li><b>Key item: </b>Runic focus</li><li><b>Armour: </b>Reindeer hide (1 Defence) and leather hood (+1 Defence)</li><li><b>Weapon(s): </b>Steel sword (d6)</li><li><b>Magic: </b>Sagas ({saga})</li><li><b>Other gear: </b>Runic focus (key, small), sacred waters (d10), sacrificial bundle (small)</li><li><b>Inventory: </b>Remaining free slots, <b>5 out of 10</b></li><h3>Skills</h3> <p><strong><em>Scold</em>.</strong> Manifest cutting words to wield as a dagger or throw at opponents for <strong>d4</strong> damage, 20ft range.</p> <p><strong><em>Shout (reaction)</em>.</strong> Your voice propels a shockwave that staggers a foe within <strong>melee range</strong>; <strong>Spi</strong> save to disrupt an attack and take no damage (<strong>Fatigue</strong>).</p> <p><strong><em>Sunder</em>.</strong> Tear through your opponent’s armour for <strong>d4 damage</strong>; first occurrence causes target to lose <strong>1 Def</strong> (<strong>Fatigue</strong>).</p> <p><strong><em>Heal</em> (saga).</strong> Call upon the remaining power of the gods to heal your wounds; restore <strong>10 Resilience</strong> and clear the <strong>Deprived</strong> condition (<strong>Fatigue</strong>).</p> <p><strong><em>Lightning Spear</em> (saga).</strong> Summon a crackling bolt of lightning; strike your foe for <strong>d8 damage</strong>, 60ft range (<strong>Fatigue</strong>).</p><input type="hidden" id="defence" name="defence" value="2">'
]
  
gen_data['scout'] = [
  '<b>scout</b>.<h3>Equipment</h3><li><b>Key item: </b>Hunting knives</li><li><b>Armour: </b>Quilted cloth (1 Defence)</li><li><b>Weapon(s): </b>Hunting knives (key, d6), elm shortbow (bulky, d6, 60\')</li><li><b>Other gear: </b>Fire oil (blast, d8), skeleton key (small)</li><li><b>Inventory: </b>Remaining free slots, <b>5 out of 10</b></li><h3>Skills</h3> <p><em><strong>Backstab</strong></em>. Duck behind your enemy and inflict a critical strike (<strong>Dex</strong>):</p> <ul> <li><strong>Success:</strong> Strike your target for <strong>double damage.</strong></li> <li><strong>Failure:</strong> Retaliatory attack from the target at <strong>damage advantage.</strong></li> <li><strong>Dire strike:</strong> Follow up with an extra attack that bypasses defence.</li> </ul> <p><strong><em>Dash (reaction)</em>.</strong> Deftly dodge to evade an attack (<strong>Dex</strong>, <strong>Fatigue</strong>):</p> <ul> <li><strong>Success:</strong> Avoid <strong>all damage.</strong></li> <li><strong>Failure: Impair</strong> the enemy’s attack, reducing to <strong>d4 damage.</strong></li> </ul> <p><strong><em>Lacerate</em>.</strong> Slice a deep wound in your enemy for an initial <strong>d6 damage;</strong> roll <strong>d4</strong> to determine bleed damage and duration (<strong>Fatigue</strong>).</p> <p><strong><em>Volley</em>.</strong> Fire two arrows without hesitation—roll damage die twice (<strong>Fatigue</strong>).</p> <ul> <li><strong>Dire strike:</strong> Fire another arrow and roll another damage die.</li> </ul><input type="hidden" id="defence" name="defence" value="1">'
]
  
gen_data['seer'] = [
  '<b>seer</b>.<h3>Equipment</h3><li><b>Key item: </b>Yew staff</li><li><b>Armour: </b>Stout linen (0 Defence)</li><li><b>Weapon(s): </b>Yew staff (key, d6)</li><li><b>Magic: </b>Spells ({runestone})</li><li><b>Other gear: </b>Bleached jawbone</li><li><b>Inventory: </b>Remaining free slots, <b>7 out of 10</b></li><h3>Skills</h3> <p><strong><em>Barrier (reaction)</em>.</strong> Cast a barrier spell (Wit, Fatigue):</p> <ul> <li><strong>Success:</strong> Raise a magical shield to negate all damage from the attack.</li> <li><strong>Failure:</strong> Impose <strong>damage disadvantage</strong> on the target’s attack.</li> </ul> <p><strong><em>Clobber</em>.</strong> Smash the enemy’s head with <strong>damage advantage</strong>; target needs to make a <strong>Str</strong> save or be dazed, losing their next turn (<strong>Fatigue</strong>).</p> <p><strong><em>Greystone</em>.</strong> Cast a magical stone as if from a sling for <strong>d4</strong> damage, 30’ range.</p> <p><strong><em>Slow</em> (spell).</strong> Slows nearby enemies (<strong>Fatigue</strong>).</p> <p><strong><em>Seiðr spear</em> (spell).</strong> Propel a spear of pure energy; strike your foe with the spear for <strong>d10 damage</strong>, 60’ range (<strong>Fatigue</strong>).</p><input type="hidden" id="defence" name="defence" value="0">'
]

gen_data['name'] = [
'Alvar'
, 'Anna'
, 'Anri'
, 'Ari'
, 'Arne'
, 'Arnkatla'
, 'Astrid'
, 'Auður'
, 'Birger'
, 'Bjørn'
, 'Bo'
, 'Bodil'
, 'Darri'
, 'Edda'
, 'Einar'
, 'Emil'
, 'Erik'
, 'Estrid'
, 'Flosi'
, 'Flóki'
, 'Freyja'
, 'Frida'
, 'Frode'
, 'Funi'
, 'Gertrud'
, 'Gorm'
, 'Gro'
, 'Gunhild'
, 'Gunnar'
, 'Guðmundur'
, 'Guðrún'
, 'Halfdan'
, 'Hallbera'
, 'Harald'
, 'Harpa'
, 'Hekla'
, 'Helgi'
, 'Hilda'
, 'Hilmir'
, 'Hrefna'
, 'Inga'
, 'Ingibjörg'
, 'Ingólfur'
, 'Jóhanna'
, 'Jón'
, 'Karitas'
, 'Katla'
, 'Kaðlín'
, 'Ketill'
, 'Knud'
, 'Kristján'
, 'Kristín'
, 'Kåre'
, 'Leif'
, 'Lind'
, 'Liv'
, 'Logi'
, 'Lukka'
, 'Magnús'
, 'Margrét'
, 'María'
, 'Njal'
, 'Nói'
, 'Orri'
, 'Randi'
, 'Revna'
, 'Roar'
, 'Rune'
, 'Saga'
, 'Salvar'
, 'Sif'
, 'Sigmar'
, 'Signe'
, 'Sigrid'
, 'Sigríður'
, 'Sigrún'
, 'Skarde'
, 'Stefán'
, 'Sten'
, 'Sune'
, 'Sunna'
, 'Svend'
, 'Thurid'
, 'Thyra'
, 'Toke'
, 'Tora'
, 'Torsten'
, 'Tove'
, 'Troels'
, 'Trygve'
, 'Ulfhild'
, 'Valgerður'
, 'Vilmar'
, 'Von'
, 'Yrsa'
, 'Åge'
, 'Åse'
, 'Ólafur'
, 'Ødger'
, 'Þuríður'
]

gen_data['physique'] = [
'an athletic'
, 'a brawny'
, 'a diminutive'
, 'a lanky'
, 'a rugged'
, 'a slim'
, 'a short'
, 'a statuesque'
, 'a stout'
, 'a towering'
]

gen_data['skin'] = [
'wrinkled'
, 'drawn'
, 'birthmarked'
, 'pockmarked'
, 'rosy'
, 'rough'
, 'smooth'
, 'freckled'
, 'scarred'
, 'weathered'
]

gen_data['hair'] = [
'shaved'
, 'braided'
, 'curly'
, 'matted'
, 'frizzy'
, 'flowing'
, 'luxurious'
, 'oily'
, 'wavy'
, 'wispy'
]

gen_data['face'] = [
'a bony'
, 'a damaged'
, 'a chiselled'
, 'an elongated'
, 'a pale'
, 'a symmetrical'
, 'a fierce'
, 'a sharp'
, 'a square'
, 'a sunken'
]

gen_data['speech'] = [
'blunt'
, 'booming'
, 'cryptic'
, 'droning'
, 'formal'
, 'gravelly'
, 'precise'
, 'squeaky'
, 'eloquent'
, 'whispery'
]

gen_data['virtue'] = [
'ambitious'
, 'cautious'
, 'courageous'
, 'disciplined'
, 'gregarious'
, 'honourable'
, 'humble'
, 'merciful'
, 'serene'
, 'tolerant'
]

gen_data['vice'] = [
'aggressive'
, 'bitter'
, 'craven'
, 'deceitful'
, 'greedy'
, 'lazy'
, 'nervous'
, 'rude'
, 'vain'
, 'vengeful'
]

gen_data['misfortune'] = [
  'abandoned'
,  'addicted'
,  'blackmailed'
,  'condemned'
,  'cursed'
,  'abandoned'
,  'addicted'
,  'blackmailed'
,  'condemned'
,  'cursed'
]

gen_data['saga'] = [
  'lightning spear'
,  'cure wounds'
]

gen_data['runestone'] = [
  'slow'
,  'seiðr spear'
]
