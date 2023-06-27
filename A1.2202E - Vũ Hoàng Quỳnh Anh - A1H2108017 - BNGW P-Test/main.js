var mySplitText1 = new SplitText(".title", { type: "words, chars" });
TweenMax.staggerFrom(mySplitText1.chars, 0.5, { opacity: 0, rotation: -180, y: -100, ease: Back.easeOut }, 0.02)

var mySplitText2 = new SplitText(".description", { type: "words, chars" });
TweenMax.staggerFrom(mySplitText2.chars, 0.5, { opacity: 0, rotation: -180, y: -100, ease: Back.easeOut }, 0.01)