---
title: "A homelab adventure"
publishDate: "18 Nov 2025"
description: "\"Fine, I'll do it myself.\""
tags: ["software", "homelab"]
---

## The bare minimum

When I think back, it all started with a friend asking if I can help them learn proxmox. I didn't know anything about
proxmox, so I told them sorry, but it somehow stuck with me. Few months later I realized I'm not really using my mini
gmktec pc for much. I initially bought it for playing league of legends, since I'm daily driving linux and it was about
time riot decided to require installing a rootkit on your specifically windows machine to play their game. I found
myself not playing much, so it went. I grabbed a thumb drive, burned proxmox iso on it and gave it a go.

After the first impressions of the web interface, I kew what should be the first service to run on it. Pihole. I've
been using adguard dns on my router before, but I liked the idea of hosting dns server locally on my own network. It
even comes with an option to define local dns records, so I can use actual domain names instead of ip addresses to
access my other services.

Very second thing I installed was homeassistant. I actually tested using it before, hosted on my main PC in a docker
container, but it lacked plugin support and some things I wanted to do were just not possible without them. Thus, my
first actual VM was born. The only smart device I had at the time was a lightbulb in my room, that I was using a mobile
app to control. Luckily the bulb fully supported homeassistant, so I just hooked it right up, and now I can turn it off
if I forget to do it before going out.

## The files
So, now that I had a dedicated machine running proxmox I might as well host my music and movies on it, right? So I
created jellyfin CT. When doing so, I made my first mistake. "I need space for my media, so I'll just create a 1TB mount
point. What could go wrong?". Well, turns out that a lot can go wrong when you later decide to add more services that
concern media, like navidrome for music streaming. And now I need to duplicate my music files, because there is no easy
way to share the same local storage between two containers that is not absolutely cursed. So I pivot straight into
another mistake: doing the exact same thing, but with samba server. Now I have a local mount point on that smb share and
at least I can share my media between multiple containers and even manage the files myself from my pc. While it's still
not great, it's an upgrade. At least I don't have to duplicate my files anymore. With that disaster temporarily out of
the way it's time to add some actually useful stuff.

## The useful stuff
I got Homarr as a dashboard for quick access to my other services. While it's working fine for me, I'm considering
writing my own dashboard in the future to have ultimate control over it. Next were Prowlarr and deluge client, deluge of
course having mounted my smb share as download location. I also added n8n instance, mainly to mess around with, but
it ended up being pretty simple way of automating a few things, including discord notifications for articles from this
very blog! Next up, freshRSS for centralizing my news and youtube subscriptions in one place.

Having all of that is sure nice and all, but what if I want to go somewhere and still be able to watch me some anime
or listen to my music on the go? Sadly this part kinda sucks. My asus router I got way before I did any thinking about
homelabbing has vpn built in, so I just set that up and am now using wireguard to connect directly to my home network.
For now, it works. I plan on building my own router in the future, so I can have more control, because asus stock
firmware absolutely sucks and requires consent to send data to their servers to enable any functionality that might be
remotely useful.

## Gaming
For the longest time I wanted to get my forever minecraft world off the internet and host it in my house, so I can still
access it if the internet goes down. I simply installed pterodactyl wings CT and added it to my existing pterodactyl
panel (which after today's cloudflare outage I now plan to also bring onto my homelab). Now my world, testing server and
a proxy are running on my mini pc. I still want my friends to be albe to join, so I repurposed the old vps where the
server was running before and set up nginx and haproxy to forward the traffic to the minecraft proxy running at home.
The old vps happens to have 500mbps connection and my home connection is 1tbps, so even if the nightmare scenario
happens and the proxy gets ddosed, I will still enough wiggle room to keep my home connection usable.

## The storage situation
Turns out having just 2 nvme slots with 1tb and 4tb drives respectively is not enough if you want to download all media
you might ever want to watch. Free space was running low and it was running out fast. I decided to make an actual
investment into my home setup and bought a 4-bay NAS from terra master. For the drives, I got 3 12tb WD purples and
set them up in raid5, giving me 24tb of usable space with basic redundancy. I could now move all my media files off the
mini pc and start using that space for more things. I still use that 4tb nvme as a file server for some of the
containers that need faster storage, but most of the files now live on the NAS.

As I got a separate device for storage, I've set it up so proxmox now backups all the VMs and CTs directly onto the NAS.
Pterodactyl wings on my proxmox node are also now configured to save backups on the NAS. I also had borg backup set up
for my main pc, but I just changed my daily driver distro from ubuntu to cachyos and I haven't found time to set up borg
on it yet, but hopefully I will manage to get enough time to do it before any major failure happens.

## Smart home
I mentioned that while setting up homeassistant I only had a smart bulb to play with. Since then, I've been accumulating
IoT devices. My room now has a smart extension cord that tracks how much power my pc is using, I switched all lightbulbs
in the house to ones I can control with homeassistant and I made some automations involving the wireless switches that
communicate over zigbee. I also own a roomba, which I can control with homeassistant, but it's been getting worse and
worse since I disconnected it from the internet, so when it finally dies I plan on replacing it with a vacuum that I can
flash with custom firmware and fully control locally. Some miscellaneous things I also have zigbee thermometers per
room, printer and tv. I don't trust any of the electronic locks, so none of that will be ever happening.

## Where am I now?
In a pretty good place, I feel. Things are running smoothly, I have backups and redundancy in place. Some basic
automation and more freedom with what I can do in my house. Of course, there's still things to do. Like finally sorting
out that leftover local storage that was left on the original samba server CT and migrating all the files from it onto
properly mounted directory that can be accessed by multiple containers without going though network stack. I learned
quite a bit from this whole endeavor and I know I will learn more as I improve and expand my homelab. I'll be sure to
share any major updates to the story here, so check back, or even subscribe to the RSS feed linked to this site!
