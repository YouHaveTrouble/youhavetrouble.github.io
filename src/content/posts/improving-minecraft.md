---
title: "Improving minecraft"
publishDate: "09 May 2025"
description: "Applying good principles of game design to minecraft."
tags: [ "games", "game-design", "minecraft" ]
---

In this post I wanted to talk a little bit about game design theories and how they can be applied to the game I've been
playing and modding for a while now, Minecraft.

## Addressing sand/gravel duplication

To solve any kind of issue, we need to understand where the root of the problem lies. In this case, the problem is that
there isn't a reliable way to obtain large amounts of sand and gravel. Even mojang themselves acknowledged this and are
looking for a way to provide a solution.

My proposal is to add a mechanic to already existing item, the anvil. Anvil falling is currently just used for a meme or
for traps. Why not give it another use? If you drop an anvil on cobblestone, it could break it down into gravel. If you
then drop it again on gravel, it could break it down into sand. It would be amazing to see anvil juggling contraptions
with pistons and slime blocks, along with a classic cobblestone generator. This way using existing mechanics we created
something new that effectively solves the problem of getting sand and gravel reliably without having to destroy your
local desert biome.

You can try this solution in action on paper/purpur server using
<a href="https://modrinth.com/plugin/purpurextras" target="_blank">PurpurExtras'</a> `anvil-crushes-blocks` option.

## Item durability

Items breaking has been a status quo in Minecraft for a long time. At the start tools and armor were meant to be
disposable and easily replaced. As time went on, this changed significantly. Now a lot of resources can be invested to
create a perfect set of tools and armor. This development is not bad by itself, we can definitely work around it, but
first we need to figure out what doesn't fit in the current state of the game. We need to follow the symptoms to get to
the root of the problem.

The first thing anyone wants on their items currently is definitely mending. It pretty much trivializes entire durability
mechanic. You just need to build a mob farm and swing by it sometimes to keep your items permanently. This has severe
side effects on the entire equipment system. There is no need to ever decide what armor to wear, you just show up in your
infinite maxed netherite armor and don't think about it.

For this, I propose two steps to be taken that might sound insane, but I promise you they work as a whole.

1. Remove the cumulative cost of repairing items using an anvil. Items are a huge time and effort investment now, there
is no need to take away the ability to repair them more than few times. Apart from that, this system is just fine as it
is. It takes resources and a level per material piece to repair items, that's high enough cost, and it keeps players
farming the materials to fix their equipment.
2. Remove mending enchantment. This might sound absolutely absurd, but let's think about it for a second. If you have
mending on your gear, the gear progression ends on that. There's nothing more you can do or prepare. Combined with
removing the anvil cumulative repair cost, this will add additional depth of equipment management. Should I use my maxed
netherite armor for this fight knowing that I will need to get more netherite to repair it? Or should I use my diamond
armor that's cheaper to maintain? People that prefer to minmax still have the option to do so, even in-combat repair
would still be possible, it would even be faster than mending and experience potions.

I personally used this ruleset to play myself and a couple of servers I ran. If you want to try it out, you can use
<a href="https://purpurmc.org" target="_blank">Purpur's</a> `anvil.cumulative-cost` option and
<a href="https://modrinth.com/plugin/mending-be-gone" target="_blank">Mending-Be-Gone</a> plugin.

## Counterplay

This one is a bit more subjective than the previous entries, but I genuinely believe it's worth considering. It really
sucks when you get one-shot and there is nothing you can do about it. So, I propose to have a player health threshold,
where if player is above it, they will not be able to die from a single hit. Imagine a situation where someone drops on
you with a mace, you're on full health, but you die instantly. That doesn't sound really fair. With my suggestion, you
would be left with 1 health left, and you'd have precious time to react by pulling out a totem or a shield. Thresholds
value could be configurable, but I'd say 10 health (5 hearts) is a good starting point.

You can find a plugin that implements this idea <a href="https://modrinth.com/plugin/counterplay" target="_blank">here.</a>

## Finishing thoughts

This blog post is a culmination of me theorising and experimenting with minecraft mechanics for nearly 5 years now.
I hope at least some people will adapt these changes on their servers to make things more interesting. I also hope that
you will also think how the game could be improved and experiment with different new mechanics as well! Thanks for reading!
