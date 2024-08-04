---
title: "Should you rewrite everything?"
publishDate: "04 Aug 2024"
description: "At what point we need to say stop and rethink what we're doing?"
tags: ["optimization", "software", "legacy-code"]
---

I've been in the software industry for a few years now, and I've seen a lot of things. Some, good, most terrifying.
Today I want to tell a story of a project I've been working on for past few years now that was brought back from the
brink of becoming lovecraftian horror.

## In his house of legacy projects, dead code lies dreaming
Newbies like me a few years ago tend to be placed on legacy projects no one knowing what's there wants to work with,
that's just a fact of life we cannot escape. The horrors of legacy codebases are well established and widely known. I
have seen things that would make clean code fans vomit in disgust. This project was no different. This project ate dev
sanities for breakfast.

Meet the subject of this story, a website that was built in early 2000s and all the updates ever made to it were just
appended to the codebase. This resulted in a single 6 thousand line javascript file that loaded in its entirety on every
page. By the time I joined the project, it was already updated to Symfony 3, but besides that nothing was done to
improve the codebase.

## The oldest and strongest emotion of a dev is fear
For the first few months of my time on the project I was trying to comprehend what is even going on. I was on the brink
of getting our official office emergency whiskey bottle and just chugging down everything that was inside multiple times
throughout the process. Every single little change, even the smallest one had the potential to break multiple pages,
because most random parts of the script were reused in multiple places. I even found a spot where changing a
date format would break on at least 3 pages, because someone whose identity was lost forever in one of the version
control migrations decided to parse the date and time manually to get a countdown timer working. Even simplest of
changes gave me a fright, because no one had any idea what calamity it would bring upon us in the rest of the project.

## Almost nobody codes sober, unless they happen to be insane
I took some convincing, but we managed to get our boss to allow us to use an appropriate amounts of nukes and chemical
weapons to clean up entire backend part of the project. We ended up rewriting close to 85% of the backend code in around
3 months. There were many wonderful things we learned during the process. For example, the search feature that was one of
the main features of the site was making over 400 database calls every time something was searched or a page was
refreshed. No cache. The average wait time for a search was around 40-50 seconds. You're probably asking yourself "how
did no one report the long wait times?". Simple, the userbase of the site is pretty niche and nearing double digits of
users. If someone used it, they were probably used to waiting for years now and didn't consider telling anyone since it
was always like that. We managed to bring the search time down to just around under a second and 3 database queries. It
was only really possible to do that because we also redid the database schema to actually fit data models that were used
in the project.

Basically entire database was nuked and rebuilt from scratch. Turns out, relying on an ORM to do every database call was
a dire mistake. ORMs are great, but have some overheads, especially when you have a lot of relations between tables. And
there were A LOT of relations. We ended up writing raw SQL for most of the queries and only using ORM for the most simple
ones. 

## Do not set up that which you cannot rewrite
The frontend was a different beast. The best we could do at the time was to split the 6 thousand line beast of a
javascript file into multiple smaller chunks. Those chunks were then assigned to their respective pages via webpack.
It's not the most elegant solution, but it gave us a chance to actually be able to start working on the features that
were getting requested that we had to put a pause on because the state of the project made it so adding anything was
just a nightmare and took more and more time as we tiptoed around the minefield of reused global js and css. Did I
mention that the css was also one global file of 3 thousand lines? That we had to leave in, and it's still biting us,
mainly me, in the ass at every step of doing anything on the frontend. There are talks about moving frontend to a
separate project and using the new shiny API we created during the rewrite, but I feel like it's going be a while for
anything to actually move in that direction, since my focus was changed to another project for now. At least with this
current one I have little more to say about our stack and standards!

## The takeaway
If just the thought of making a change that would break everything makes your skin crawl, maybe it's time to spend next
month or so on rewriting and refactoring the project to a usable state. I just wanted to tell this story, because I'm
proud of the work I did along with my coworkers to give this project a literal second life. I wish I could say more, but
I'm still bound by at least one not expired NDA, so I had to omit as many details as possible.

## As for this blog
I'm planning on posting more stories and rants here, so feel free to check back later, you can even subscribe to the 
[RSS feed](https://youhavetrouble.me/rss.xml)!
