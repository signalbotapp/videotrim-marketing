---
title: "The complete guide to vertical video: specs, formats, and best practices for YouTube Shorts, Reels, and TikTok"
description: "Everything you need to ship vertical video right — aspect ratio, resolution, safe zones, captions, file formats, and per-platform best practices."
pubDate: 2026-03-05
author: "Mara Voss"
category: "Guides"
readingTime: "9 min read"
---

Vertical video looks deceptively simple — turn the phone sideways and you're done.
But the gap between a clip that fills the screen cleanly and one with letterboxed
bars, captions hidden behind the UI, or a subject floating off-center is the gap
between a post that holds attention and one that gets scrolled past.

This is the reference I wish I'd had when I started. It's evergreen on the parts
that rarely change — geometry, safe zones, framing — and honest about the parts
that drift, like per-platform length limits.

## The core spec: 9:16

Vertical video is built around the **9:16 aspect ratio**. That's the shape of a
phone held upright, and it's the canvas every short-form platform expects.

- **Aspect ratio:** 9:16 (width to height)
- **Standard resolution:** **1080 × 1920** pixels — the practical baseline for
  full-HD vertical
- **Higher option:** 2160 × 3840 (4K vertical) if your source supports it and you
  want headroom
- **Minimum you should accept:** 720 × 1280, below which clips look soft on
  modern phones

If you only remember one number, remember 1080 × 1920. It's the format that plays
clean everywhere without upscaling or bars.

## Frame rate and bitrate

- **Frame rate:** 30 fps is the safe default. Use 60 fps for fast motion or
  gameplay where smoothness reads. Match your source rate rather than converting
  if you can — frame-rate conversion can introduce judder.
- **Bitrate:** Platforms re-encode everything on upload, so don't agonize over it.
  Export at a generous bitrate (roughly 10–15 Mbps for 1080p vertical) so the
  version you hand over is clean before their compression touches it.

The principle: give the platform the cleanest possible file, because every upload
gets compressed once it lands. Quality only goes down from your export.

## File formats and sizing

| Property | Recommendation |
|---|---|
| Container | MP4 (H.264) is the universal safe choice; MOV and WebM also work |
| Audio | AAC, stereo, 128 kbps or higher |
| Color | Standard Rec. 709; avoid exotic profiles that platforms may misread |
| File size | Keep exports lean; oversized files get harder-compressed, not better |

Stick with MP4/H.264 unless you have a specific reason not to. It's the format
least likely to surprise you on any platform. Videotrim exports full-HD MP4 with
no watermark, and accepts MP4, MOV, and WebM — plus YouTube and Vimeo links — as
sources, so you rarely have to convert anything by hand.

## Safe zones: the most-ignored rule

Here's the trap. The platform overlays its own interface on top of your video —
username, caption, like and share buttons, the progress bar, sometimes a
follow button. **Anything you place in those regions can get covered.**

Think of the 9:16 frame in three bands:

- **Top ~10–15%** — often clipped by status bars or the top UI. Keep critical
  content out.
- **Bottom ~20%** — the danger zone. Captions, the source account name, and the
  CTA text frequently live here on the platform's side. Don't put *your* text here.
- **Right edge ~10%** — the action buttons (like, comment, share, save) stack
  here. Keep faces and key visuals off this strip.

The safe approach: design for a **center column** with comfortable margins, and
assume the outer edges and bottom fifth may be obscured. When in doubt, pull text
and faces toward the middle.

## Captions and on-screen text

Most feed video is watched on mute, so captions aren't decoration — they're the
audio track for the majority of your audience. A few rules:

- **Place captions in the upper-middle third**, clear of the bottom UI band. The
  default "bottom of screen" position fights the platform's own overlays.
- **Go word by word.** Static, sentence-long subtitles read like a foreign film;
  word-level captions that land in sync with the speaker keep the eye moving.
  This is exactly the kind of timing that's miserable to do by hand and trivial to
  automate.
- **Size for a thumb.** Text should be legible on a phone at arm's length without
  squinting — that usually means bigger than feels right on a desktop preview.
- **High contrast.** A subtle outline or backing keeps text readable over busy
  footage.

For why this matters so much, see
[why captions double watch time](/blog/why-captions-double-watch-time/). With
Videotrim, captions are word-by-word automatically, and if you fix a word the
timing follows it — plus caption presets so your style stays consistent across a
batch.

## Framing the subject

Vertical is a tall, narrow window, so framing is unforgiving. A wide horizontal
shot crammed into 9:16 either gets bars or a brutal crop.

- **Keep the subject in the upper-center.** Eyes around the upper third reads as
  natural and leaves room for captions without crowding the face.
- **Reframe, don't just crop.** When repurposing a horizontal source, the goal is
  to track the subject so they stay centered as the action moves — not to slap a
  static crop on a moving scene.
- **Fill the frame.** Letterbox bars signal "this was made for another format" and
  read as lower-effort to a scrolling viewer.

Reframing horizontal footage to vertical by hand is tedious. Videotrim outputs
vertical or wide clips, and you set the framing — so a 16:9 source becomes a clean
9:16 clip with your subject placed where you want it.

## Length limits by platform

Length limits are the part of this guide most likely to be out of date by the time
you read it — every platform has expanded its caps repeatedly, and they differ by
platform. So treat the following as *direction*, not permanent fact, and check the
current limit in-app before you plan around an exact second count.

- **YouTube Shorts** — built for short vertical clips; the Shorts shelf has a
  defined upper bound that has grown over time. Anything comfortably under a
  minute is safely "a Short."
- **Instagram Reels** — supports progressively longer durations than it once did;
  the tightest, most-shared Reels still tend to run short.
- **TikTok** — has the most generous upper limit of the three and keeps raising
  it, but the clips that travel are usually far shorter than the maximum.

The consistent truth across all three: the *limit* keeps rising, but the clips
that actually perform stay short. Don't fill the cap because you can.

## Per-platform best practices at a glance

| | YouTube Shorts | Instagram Reels | TikTok |
|---|---|---|---|
| Aspect ratio | 9:16 | 9:16 | 9:16 |
| Target resolution | 1080 × 1920 | 1080 × 1920 | 1080 × 1920 |
| Caption placement | Upper-middle, clear of title | Upper-middle, avoid bottom UI | Upper-middle, avoid right rail |
| Hook timing | First 1–2 seconds | First 1–2 seconds | First 1–2 seconds |
| Length instinct | Tight, sub-minute wins | Short and shareable | Short beats the max |
| Watermarks | Avoid third-party marks | Avoid third-party marks | Avoid third-party marks |

One thing every column shares: the hook lives in the first second or two. See
[building a strong hook in the first two seconds](/blog/strong-hook-first-two-seconds/)
for the part of the clip that decides everything.

## A pre-publish checklist

1. Exported 9:16 at 1080 × 1920 (or higher), MP4/H.264.
2. Subject framed upper-center, no letterbox bars.
3. Captions on, word by word, in the upper-middle third.
4. Nothing critical in the top 15%, bottom 20%, or right edge.
5. Hook lands in the first one to two seconds.
6. No third-party watermark.

Get the geometry and the safe zones right once and they're right forever — those
rules barely change. Spend your real attention on the hook and the captions,
because that's where the watching actually happens.
