# TODO

## Jumpscares

The old page had jumpscares, but every sound and image pointed at `example.com` placeholders, so none of them ever worked. Bring them back properly.

### Assets (need real files in the repo)
- [ ] Scream sound: `audio/scream.mp3`, short (under 1 s), loud hit
- [ ] Demon face: `images/demon.jpg`, full-screen, grainy black and white to match the ritual photos
- [ ] 2-3 extra flash frames (ghouls, the band, a distorted logo): `images/flash/*.jpg`
- [ ] Optional: low drone ambience `audio/ambience.mp3` and a whisper `audio/whisper.mp3` for hovering the gallery

### Behaviour
- [ ] Sound needs a click first (browsers block it), so arm the scares when the visitor clicks `[ BETREE AS JY DURF ]` on the splash
- [ ] Main jumpscare: demon face fills the screen for ~0.4-0.8 s with the scream and a hard VHS tear (reuse `body.tear`)
- [ ] Timing: never in the first 20 s, then random, at most once every 60-90 s, so it stays scary instead of annoying
- [ ] Rare trigger on hover: gallery thumbnails, the counter hitting a 666 number, or hovering the REC dot
- [ ] Single-frame flashes (100 ms) of the flash images, rarer than the main scare
- [ ] Glitch the page title bar text into the demon's name for a frame
- [ ] Don't fire while the YouTube video or SoundCloud is playing (it would wreck the song); only while idle

### Safety
- [ ] Respect `prefers-reduced-motion`: no flashes or shakes, just a still image fading in
- [ ] Keep flashes under 3 per second (seizure guideline, WCAG 2.3.1)
- [ ] Small toggle in the menu: `» skrikke: aan / af` (scares on/off), remembered in localStorage
- [ ] Mention on the splash warning: `bevat skrikke en flitsende beelde` (contains scares and flashing images)

### Other
- [ ] Decide whether the visitor counter stays a fake creeping-up-from-666 counter or gets labelled as decor
