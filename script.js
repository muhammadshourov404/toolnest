/* ================================================
   ToolNest — Shared JavaScript
   © 2025 Muhammad Shourov. All rights reserved.
   Version: 1.0.0
   ================================================ */

'use strict';

/* ================================================
   TOOLS DATA — Central registry
   ================================================ */
const TN_TOOLS = [
  /* TEXT */
  { id:'word-counter',        cat:'text',      title:'Word Counter',           titleBn:'শব্দ গণনা',            desc:'শব্দ, অক্ষর, বাক্য ও পড়ার সময় গণনা করুন।',            icon:'align-left',     color:'#2563eb', bg:'#eff6ff',  badge:'hot',  file:'tools/text/word-counter.html'        },
  { id:'case-converter',      cat:'text',      title:'Case Converter',         titleBn:'কেস কনভার্টার',         desc:'UPPER, lower, Title, Sentence case রূপান্তর করুন।',    icon:'type',           color:'#2563eb', bg:'#eff6ff',  badge:'',     file:'tools/text/case-converter.html'      },
  { id:'plagiarism-checker',  cat:'text',      title:'Plagiarism Checker',     titleBn:'প্লেজিয়ারিজম চেকার',  desc:'লেখার মৌলিকতা যাচাই করুন জমার আগে।',                 icon:'shield-check',   color:'#2563eb', bg:'#eff6ff',  badge:'hot',  file:'tools/text/plagiarism-checker.html'  },
  { id:'readability-checker', cat:'text',      title:'Readability Checker',    titleBn:'পাঠযোগ্যতা যাচাই',     desc:'লেখা কতটা সহজবোধ্য তা বিশ্লেষণ করুন।',               icon:'book-open',      color:'#2563eb', bg:'#eff6ff',  badge:'',     file:'tools/text/readability-checker.html' },
  { id:'find-replace',        cat:'text',      title:'Find & Replace',         titleBn:'খুঁজুন ও প্রতিস্থাপন', desc:'বড় টেক্সটে শব্দ খুঁজুন ও পরিবর্তন করুন।',           icon:'search',         color:'#2563eb', bg:'#eff6ff',  badge:'new',  file:'tools/text/find-replace.html'        },
  { id:'synonym-finder',      cat:'text',      title:'Synonym Finder',         titleBn:'সমার্থক শব্দ',          desc:'যেকোনো ইংরেজি শব্দের সমার্থক ও বিপরীত শব্দ।',       icon:'book',           color:'#2563eb', bg:'#eff6ff',  badge:'new',  file:'tools/text/synonym-finder.html'      },
  { id:'lorem-ipsum',         cat:'text',      title:'Lorem Ipsum Generator',  titleBn:'লরেম ইপসাম',            desc:'ডিজাইন ও টেস্টিংয়ের জন্য ডামি টেক্সট তৈরি।',        icon:'file-text',      color:'#2563eb', bg:'#eff6ff',  badge:'',     file:'tools/text/lorem-ipsum.html'         },
  { id:'slug-generator',      cat:'text',      title:'Slug Generator',         titleBn:'স্লাগ জেনারেটর',        desc:'URL-বান্ধব slug তৈরি করুন।',                          icon:'link',           color:'#2563eb', bg:'#eff6ff',  badge:'new',  file:'tools/text/slug-generator.html'      },
  /* MATH */
  { id:'gpa-calculator',      cat:'math',      title:'GPA Calculator',         titleBn:'জিপিএ ক্যালকুলেটর',    desc:'SSC, HSC, Honours সব সিস্টেমে GPA হিসাব।',            icon:'award',          color:'#7c3aed', bg:'#faf5ff',  badge:'hot',  file:'tools/math/gpa-calculator.html'      },
  { id:'scientific-calc',     cat:'math',      title:'Scientific Calculator',  titleBn:'সায়েন্টিফিক ক্যালক', desc:'sin, cos, log সহ সব গণিত এক জায়গায়।',                icon:'calculator',     color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/math/scientific-calc.html'     },
  { id:'percentage-calc',     cat:'math',      title:'Percentage Calculator',  titleBn:'শতকরা ক্যালকুলেটর',    desc:'ছাড়, নম্বর, প্রবৃদ্ধি — সব শতকরা এক ক্লিকে।',       icon:'percent',        color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/math/percentage-calc.html'     },
  { id:'equation-solver',     cat:'math',      title:'Equation Solver',        titleBn:'সমীকরণ সমাধান',        desc:'রৈখিক ও দ্বিঘাত সমীকরণ ধাপে ধাপে সমাধান।',          icon:'function-square',color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/math/equation-solver.html'    },
  { id:'geometry-calc',       cat:'math',      title:'Geometry Calculator',    titleBn:'জ্যামিতি ক্যালকুলেটর', desc:'ত্রিভুজ, বৃত্ত, আয়তক্ষেত্রের ক্ষেত্রফল।',           icon:'shapes',         color:'#7c3aed', bg:'#faf5ff',  badge:'new',  file:'tools/math/geometry-calc.html'       },
  { id:'statistics-calc',     cat:'math',      title:'Statistics Calculator',  titleBn:'পরিসংখ্যান',            desc:'Mean, Median, Mode, SD হিসাব করুন।',                  icon:'bar-chart-2',    color:'#7c3aed', bg:'#faf5ff',  badge:'new',  file:'tools/math/statistics-calc.html'     },
  { id:'matrix-calc',         cat:'math',      title:'Matrix Calculator',      titleBn:'ম্যাট্রিক্স',           desc:'Matrix যোগ, বিয়োগ, গুণ ও Determinant।',              icon:'grid',           color:'#7c3aed', bg:'#faf5ff',  badge:'new',  file:'tools/math/matrix-calc.html'         },
  /* AI */
  { id:'text-summarizer',     cat:'ai',        title:'Text Summarizer',        titleBn:'টেক্সট সারসংক্ষেপ',    desc:'দীর্ঘ প্রবন্ধ মুহূর্তের মধ্যে সংক্ষিপ্ত করুন।',      icon:'sparkles',       color:'#0891b2', bg:'#ecfeff',  badge:'ai',   file:'tools/ai/text-summarizer.html'       },
  { id:'grammar-checker',     cat:'ai',        title:'Grammar Checker',        titleBn:'ব্যাকরণ যাচাই',        desc:'ব্যাকরণ ও লেখার ধরন AI দিয়ে উন্নত করুন।',           icon:'spell-check',    color:'#0891b2', bg:'#ecfeff',  badge:'ai',   file:'tools/ai/grammar-checker.html'       },
  { id:'essay-generator',     cat:'ai',        title:'Essay Idea Generator',   titleBn:'প্রবন্ধ আইডিয়া',       desc:'যেকোনো বিষয়ে প্রবন্ধের রূপরেখা তৈরি করুন।',         icon:'lightbulb',      color:'#0891b2', bg:'#ecfeff',  badge:'ai',   file:'tools/ai/essay-generator.html'       },
  { id:'ai-translator',       cat:'ai',        title:'AI Translator',          titleBn:'AI অনুবাদক',            desc:'বাংলা-ইংরেজি-আরবি সহ ৫০+ ভাষায় অনুবাদ।',           icon:'languages',      color:'#0891b2', bg:'#ecfeff',  badge:'ai',   file:'tools/ai/ai-translator.html'         },
  { id:'cover-letter',        cat:'ai',        title:'Cover Letter Generator', titleBn:'কভার লেটার',            desc:'AI দিয়ে পেশাদার কভার লেটার তৈরি করুন।',              icon:'mail',           color:'#0891b2', bg:'#ecfeff',  badge:'new',  file:'tools/ai/cover-letter.html'          },
  { id:'paraphrasing',        cat:'ai',        title:'Paraphrasing Tool',      titleBn:'প্যারাফ্রেজিং',         desc:'লেখা নিজের ভাষায় পুনরায় লিখুন AI দিয়ে।',           icon:'refresh-cw',     color:'#0891b2', bg:'#ecfeff',  badge:'new',  file:'tools/ai/paraphrasing.html'          },
  /* CONVERTER */
  { id:'unit-converter',      cat:'converter', title:'Unit Converter',         titleBn:'একক রূপান্তরক',         desc:'দৈর্ঘ্য, ভর, তাপ — ১৫+ ক্যাটাগরি রূপান্তর।',        icon:'ruler',          color:'#d97706', bg:'#fffbeb',  badge:'hot',  file:'tools/converter/unit-converter.html' },
  { id:'currency-converter',  cat:'converter', title:'Currency Converter',     titleBn:'মুদ্রা রূপান্তরক',      desc:'লাইভ রেটে ১৭০+ দেশের মুদ্রা রূপান্তর।',              icon:'coins',          color:'#d97706', bg:'#fffbeb',  badge:'hot',  file:'tools/converter/currency-converter.html'},
  { id:'timezone-converter',  cat:'converter', title:'Time Zone Converter',    titleBn:'টাইমজোন',               desc:'বিশ্বের যেকোনো শহরের সময়ের পার্থক্য।',              icon:'clock',          color:'#d97706', bg:'#fffbeb',  badge:'',     file:'tools/converter/timezone-converter.html'},
  { id:'number-system',       cat:'converter', title:'Number System Converter',titleBn:'সংখ্যা পদ্ধতি',         desc:'Binary, Hex, Decimal, Octal রূপান্তর।',               icon:'binary',         color:'#d97706', bg:'#fffbeb',  badge:'',     file:'tools/converter/number-system.html'  },
  { id:'roman-numeral',       cat:'converter', title:'Roman Numeral Converter',titleBn:'রোমান সংখ্যা',           desc:'আরবি ও রোমান সংখ্যা রূপান্তর।',                      icon:'roman',          color:'#d97706', bg:'#fffbeb',  badge:'',     file:'tools/converter/roman-numeral.html'  },
  { id:'text-to-speech',      cat:'converter', title:'Text to Speech',         titleBn:'টেক্সট থেকে কথা',       desc:'যেকোনো টেক্সট পড়ে শোনান ব্রাউজারেই।',               icon:'volume-2',       color:'#d97706', bg:'#fffbeb',  badge:'new',  file:'tools/converter/text-to-speech.html' },
  { id:'cooking-converter',   cat:'converter', title:'Cooking Unit Converter', titleBn:'রান্নার একক',            desc:'কাপ, টেবিলস্পুন, মিলি — রান্নার সব একক।',           icon:'utensils',       color:'#d97706', bg:'#fffbeb',  badge:'new',  file:'tools/converter/cooking-converter.html'},
  /* IMAGE */
  { id:'image-compressor',    cat:'image',     title:'Image Compressor',       titleBn:'ইমেজ কম্প্রেসর',        desc:'ছবির সাইজ কমান মান না হারিয়ে।',                      icon:'image',          color:'#db2777', bg:'#fdf2f8',  badge:'hot',  file:'tools/image/image-compressor.html'   },
  { id:'image-resizer',       cat:'image',     title:'Image Resizer & Cropper',titleBn:'ইমেজ রিসাইজার',         desc:'ছবির আকার পরিবর্তন ও ক্রপ করুন।',                    icon:'crop',           color:'#db2777', bg:'#fdf2f8',  badge:'',     file:'tools/image/image-resizer.html'      },
  { id:'image-converter',     cat:'image',     title:'Image Format Converter', titleBn:'ইমেজ ফরম্যাট',           desc:'PNG, JPG, WEBP, GIF ফরম্যাট পরিবর্তন।',              icon:'file-image',     color:'#db2777', bg:'#fdf2f8',  badge:'new',  file:'tools/image/image-converter.html'    },
  { id:'color-picker',        cat:'image',     title:'Color Picker & Palette', titleBn:'রং বাছাইকারী',           desc:'রং বাছাই করুন, HEX/RGB/HSL কোড পান।',                icon:'pipette',        color:'#db2777', bg:'#fdf2f8',  badge:'',     file:'tools/image/color-picker.html'       },
  { id:'ascii-art',           cat:'image',     title:'ASCII Art Generator',    titleBn:'ASCII আর্ট',             desc:'যেকোনো টেক্সট থেকে ASCII আর্ট তৈরি।',                icon:'terminal',       color:'#db2777', bg:'#fdf2f8',  badge:'new',  file:'tools/image/ascii-art.html'          },
  /* CODING */
  { id:'json-formatter',      cat:'coding',    title:'JSON Formatter',         titleBn:'JSON ফরম্যাটার',         desc:'JSON সুন্দরভাবে ফরম্যাট ও যাচাই করুন।',              icon:'braces',         color:'#16a34a', bg:'#f0fdf4',  badge:'hot',  file:'tools/coding/json-formatter.html'    },
  { id:'html-beautifier',     cat:'coding',    title:'HTML Beautifier',        titleBn:'HTML বিউটিফায়ার',        desc:'HTML কোড পরিষ্কার বা ছোট করুন।',                     icon:'code',           color:'#16a34a', bg:'#f0fdf4',  badge:'',     file:'tools/coding/html-beautifier.html'   },
  { id:'base64',              cat:'coding',    title:'Base64 Encoder/Decoder', titleBn:'বেস৬৪ কোডার',           desc:'টেক্সট বা ফাইল Base64-এ রূপান্তর।',                  icon:'lock',           color:'#16a34a', bg:'#f0fdf4',  badge:'',     file:'tools/coding/base64.html'            },
  { id:'password-generator',  cat:'coding',    title:'Password Generator',     titleBn:'পাসওয়ার্ড জেনারেটর',   desc:'শক্তিশালী পাসওয়ার্ড তৈরি করুন।',                    icon:'key',            color:'#16a34a', bg:'#f0fdf4',  badge:'',     file:'tools/coding/password-generator.html'},
  { id:'url-encoder',         cat:'coding',    title:'URL Encoder/Decoder',    titleBn:'URL এনকোডার',           desc:'URL-এ বিশেষ অক্ষর এনকোড বা ডিকোড।',                 icon:'link-2',         color:'#16a34a', bg:'#f0fdf4',  badge:'new',  file:'tools/coding/url-encoder.html'       },
  { id:'regex-tester',        cat:'coding',    title:'Regex Tester',           titleBn:'রিজেক্স টেস্টার',        desc:'Regular Expression লিখুন ও পরীক্ষা করুন।',           icon:'filter',         color:'#16a34a', bg:'#f0fdf4',  badge:'new',  file:'tools/coding/regex-tester.html'      },
  /* HEALTH */
  { id:'bmi-calculator',      cat:'health',    title:'BMI Calculator',         titleBn:'বিএমআই ক্যালকুলেটর',   desc:'Body Mass Index হিসাব করুন।',                         icon:'activity',       color:'#dc2626', bg:'#fef2f2',  badge:'hot',  file:'tools/health/bmi-calculator.html'    },
  { id:'calorie-calculator',  cat:'health',    title:'Calorie Calculator',     titleBn:'ক্যালরি ক্যালকুলেটর', desc:'দৈনিক ক্যালরির চাহিদা হিসাব।',                       icon:'flame',          color:'#dc2626', bg:'#fef2f2',  badge:'new',  file:'tools/health/calorie-calculator.html'},
  { id:'water-intake',        cat:'health',    title:'Water Intake Calculator',titleBn:'পানির পরিমাণ',           desc:'প্রতিদিন কতটুকু পানি পান করা উচিত।',                icon:'droplets',       color:'#dc2626', bg:'#fef2f2',  badge:'new',  file:'tools/health/water-intake.html'      },
  { id:'calorie-burn',        cat:'health',    title:'Exercise Calorie Burn',  titleBn:'ক্যালরি বার্ন',          desc:'ব্যায়ামে কত ক্যালরি পোড়ে হিসাব।',                  icon:'dumbbell',       color:'#dc2626', bg:'#fef2f2',  badge:'',     file:'tools/health/calorie-burn.html'      },
  { id:'medicine-reminder',   cat:'health',    title:'Medicine Reminder',      titleBn:'ওষুধ রিমাইন্ডার',       desc:'ওষুধ খাওয়ার সময়সূচি ও রিমাইন্ডার।',                icon:'pill',           color:'#dc2626', bg:'#fef2f2',  badge:'new',  file:'tools/health/medicine-reminder.html' },
  { id:'sleep-calculator',    cat:'health',    title:'Sleep Calculator',       titleBn:'ঘুমের হিসাব',            desc:'কখন ঘুমালে সতেজ জাগা যাবে।',                        icon:'moon',           color:'#dc2626', bg:'#fef2f2',  badge:'new',  file:'tools/health/sleep-calculator.html'  },
  /* STUDY */
  { id:'flashcard-maker',     cat:'study',     title:'Flashcard Maker',        titleBn:'ফ্ল্যাশকার্ড মেকার',    desc:'ডিজিটাল ফ্ল্যাশকার্ড তৈরি ও পড়ুন।',                icon:'layers',         color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/study/flashcard-maker.html'    },
  { id:'pomodoro-timer',      cat:'study',     title:'Pomodoro Timer',         titleBn:'পোমোডোরো টাইমার',       desc:'পোমোডোরো পদ্ধতিতে মনোযোগ বাড়ান।',                  icon:'timer',          color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/study/pomodoro-timer.html'     },
  { id:'typing-speed',        cat:'study',     title:'Typing Speed Test',      titleBn:'টাইপিং স্পিড',          desc:'WPM ও নির্ভুলতা পরীক্ষা করুন।',                      icon:'keyboard',       color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/study/typing-speed.html'       },
  { id:'age-calculator',      cat:'study',     title:'Age & Date Calculator',  titleBn:'বয়স ক্যালকুলেটর',      desc:'বয়স, পরীক্ষার কাউন্টডাউন হিসাব।',                   icon:'calendar',       color:'#7c3aed', bg:'#faf5ff',  badge:'',     file:'tools/study/age-calculator.html'     },
  { id:'study-planner',       cat:'study',     title:'Study Planner',          titleBn:'স্টাডি প্ল্যানার',       desc:'পরীক্ষার আগে পড়ার সূচি তৈরি করুন।',                icon:'clipboard-list', color:'#7c3aed', bg:'#faf5ff',  badge:'new',  file:'tools/study/study-planner.html'      },
  { id:'quiz-maker',          cat:'study',     title:'Quiz Maker',             titleBn:'কুইজ মেকার',             desc:'নিজে প্রশ্ন তৈরি করুন ও বন্ধুদের সাথে শেয়ার।',     icon:'help-circle',    color:'#7c3aed', bg:'#faf5ff',  badge:'new',  file:'tools/study/quiz-maker.html'         },
  /* FINANCE */
  { id:'loan-emi',            cat:'finance',   title:'Loan EMI Calculator',    titleBn:'লোন ইএমআই',             desc:'মাসিক কিস্তি ও মোট সুদের হিসাব।',                    icon:'landmark',       color:'#16a34a', bg:'#f0fdf4',  badge:'hot',  file:'tools/finance/loan-emi.html'         },
  { id:'compound-interest',   cat:'finance',   title:'Compound Interest',      titleBn:'চক্রবৃদ্ধি সুদ',         desc:'সরল ও চক্রবৃদ্ধি সুদের হিসাব।',                      icon:'trending-up',    color:'#16a34a', bg:'#f0fdf4',  badge:'new',  file:'tools/finance/compound-interest.html'},
  { id:'tax-calculator',      cat:'finance',   title:'Tax Calculator (BD)',    titleBn:'কর ক্যালকুলেটর',         desc:'বাংলাদেশের আয়কর হিসাব করুন।',                       icon:'receipt',        color:'#16a34a', bg:'#f0fdf4',  badge:'new',  file:'tools/finance/tax-calculator.html'   },
  { id:'investment-return',   cat:'finance',   title:'Investment Return',      titleBn:'বিনিয়োগ আয়',            desc:'বিনিয়োগের প্রত্যাশিত আয় দেখুন।',                    icon:'piggy-bank',     color:'#16a34a', bg:'#f0fdf4',  badge:'new',  file:'tools/finance/investment-return.html'},
  { id:'budget-planner',      cat:'finance',   title:'Budget Planner',         titleBn:'বাজেট পরিকল্পনা',        desc:'মাসিক আয় ও খরচের বাজেট তৈরি।',                      icon:'wallet',         color:'#16a34a', bg:'#f0fdf4',  badge:'new',  file:'tools/finance/budget-planner.html'   },
  { id:'tip-calculator',      cat:'finance',   title:'Tip Calculator',         titleBn:'টিপ ক্যালকুলেটর',        desc:'রেস্তোরাঁ বিলে টিপ ও ভাগ হিসাব।',                    icon:'utensils-crossed',color:'#16a34a',bg:'#f0fdf4',  badge:'',     file:'tools/finance/tip-calculator.html'   },
  { id:'discount-calculator', cat:'finance',   title:'Discount Calculator',    titleBn:'ছাড় ক্যালকুলেটর',       desc:'ছাড়ের পর দাম ও সাশ্রয় বের করুন।',                  icon:'tag',            color:'#16a34a', bg:'#f0fdf4',  badge:'',     file:'tools/finance/discount-calculator.html'},
  /* SOCIAL */
  { id:'hashtag-generator',   cat:'social',    title:'Hashtag Generator',      titleBn:'হ্যাশট্যাগ জেনারেটর',   desc:'Instagram, TikTok-এর জন্য হ্যাশট্যাগ।',             icon:'hash',           color:'#d97706', bg:'#fffbeb',  badge:'hot',  file:'tools/social/hashtag-generator.html' },
  { id:'bio-generator',       cat:'social',    title:'Bio Generator',          titleBn:'বায়ো জেনারেটর',          desc:'সোশ্যাল মিডিয়া প্রোফাইলের বায়ো।',                  icon:'user',           color:'#d97706', bg:'#fffbeb',  badge:'new',  file:'tools/social/bio-generator.html'     },
  { id:'twitter-counter',     cat:'social',    title:'Twitter/X Char Counter', titleBn:'টুইটার চার কাউন্টার',   desc:'২৮০ অক্ষর সীমার মধ্যে লিখুন।',                       icon:'twitter',        color:'#d97706', bg:'#fffbeb',  badge:'',     file:'tools/social/twitter-counter.html'   },
  { id:'youtube-title',       cat:'social',    title:'YouTube Title Generator',titleBn:'ইউটিউব টাইটেল',          desc:'ক্লিকযোগ্য YouTube ভিডিও টাইটেল।',                  icon:'youtube',        color:'#d97706', bg:'#fffbeb',  badge:'new',  file:'tools/social/youtube-title.html'     },
  { id:'caption-generator',   cat:'social',    title:'Caption Generator',      titleBn:'ক্যাপশন জেনারেটর',      desc:'ছবি ও ভিডিওর আকর্ষণীয় ক্যাপশন।',                    icon:'message-square', color:'#d97706', bg:'#fffbeb',  badge:'new',  file:'tools/social/caption-generator.html' },
  { id:'link-shortener',      cat:'social',    title:'Link Shortener',         titleBn:'লিংক শর্টনার',           desc:'লম্বা URL ছোট করুন সহজে শেয়ার করতে।',               icon:'scissors',       color:'#d97706', bg:'#fffbeb',  badge:'new',  file:'tools/social/link-shortener.html'    },
  /* SCIENCE */
  { id:'periodic-table',      cat:'science',   title:'Periodic Table',         titleBn:'পর্যায় সারণি',           desc:'ইন্টারেক্টিভ পর্যায় সারণি ও উপাদানের তথ্য।',         icon:'flask-conical',  color:'#0891b2', bg:'#ecfeff',  badge:'hot',  file:'tools/science/periodic-table.html'   },
  { id:'molar-mass',          cat:'science',   title:'Molar Mass Calculator',  titleBn:'মোলার ভর',               desc:'রাসায়নিক সূত্র থেকে মোলার ভর।',                      icon:'atom',           color:'#0891b2', bg:'#ecfeff',  badge:'new',  file:'tools/science/molar-mass.html'       },
  { id:'ph-calculator',       cat:'science',   title:'pH Calculator',          titleBn:'পিএইচ ক্যালকুলেটর',     desc:'pH মান হিসাব ও অ্যাসিড-ক্ষার শ্রেণী।',               icon:'test-tube',      color:'#0891b2', bg:'#ecfeff',  badge:'new',  file:'tools/science/ph-calculator.html'    },
  { id:'speed-distance',      cat:'science',   title:'Speed Distance Time',    titleBn:'গতি-দূরত্ব-সময়',         desc:'গতি, দূরত্ব ও সময়ের যেকোনো একটি হিসাব।',            icon:'gauge',          color:'#0891b2', bg:'#ecfeff',  badge:'',     file:'tools/science/speed-distance.html'   },
  { id:'ohm-law',             cat:'science',   title:"Ohm's Law Calculator",   titleBn:'ওহমের সূত্র',            desc:'ভোল্টেজ, কারেন্ট ও রেজিস্ট্যান্স।',                  icon:'zap',            color:'#0891b2', bg:'#ecfeff',  badge:'new',  file:'tools/science/ohm-law.html'          },
  { id:'wave-calculator',     cat:'science',   title:'Wave Calculator',        titleBn:'তরঙ্গ ও কম্পাঙ্ক',       desc:'তরঙ্গ দৈর্ঘ্য, কম্পাঙ্ক ও বেগের হিসাব।',             icon:'waves',          color:'#0891b2', bg:'#ecfeff',  badge:'new',  file:'tools/science/wave-calculator.html'  },
  /* GEO */
  { id:'city-distance',       cat:'geo',       title:'Distance Between Cities',titleBn:'শহরের দূরত্ব',            desc:'বিশ্বের যেকোনো দুই শহরের দূরত্ব।',                   icon:'map-pin',        color:'#059669', bg:'#ecfdf5',  badge:'new',  file:'tools/geo/city-distance.html'        },
  { id:'country-info',        cat:'geo',       title:'Country Info Lookup',    titleBn:'দেশের তথ্য',              desc:'যেকোনো দেশের জনসংখ্যা, রাজধানী, মুদ্রা।',            icon:'globe',          color:'#059669', bg:'#ecfdf5',  badge:'new',  file:'tools/geo/country-info.html'         },
  { id:'phone-code',          cat:'geo',       title:'Phone Code Finder',      titleBn:'ফোন কোড খোঁজক',          desc:'যেকোনো দেশের আন্তর্জাতিক ফোন কোড।',                 icon:'phone',          color:'#059669', bg:'#ecfdf5',  badge:'',     file:'tools/geo/phone-code.html'           },
  { id:'world-map-quiz',      cat:'geo',       title:'World Map Quiz',         titleBn:'বিশ্ব মানচিত্র কুইজ',   desc:'মানচিত্রে দেশ চেনার মজাদার কুইজ।',                   icon:'map',            color:'#059669', bg:'#ecfdf5',  badge:'new',  file:'tools/geo/world-map-quiz.html'       },
  { id:'ip-lookup',           cat:'geo',       title:'IP Address Lookup',      titleBn:'আইপি এড্রেস',            desc:'যেকোনো IP-র অবস্থান ও তথ্য।',                        icon:'server',         color:'#059669', bg:'#ecfdf5',  badge:'new',  file:'tools/geo/ip-lookup.html'            },
  { id:'prayer-time',         cat:'geo',       title:'Prayer Time Calculator', titleBn:'নামাজের সময়',            desc:'বাংলাদেশের যেকোনো জেলার নামাজের সময়।',              icon:'moon-star',      color:'#059669', bg:'#ecfdf5',  badge:'hot',  file:'tools/geo/prayer-time.html'          },
  /* FUN */
  { id:'random-number',       cat:'fun',       title:'Random Number Generator',titleBn:'র‍্যান্ডম নম্বর',         desc:'নির্দিষ্ট সীমার মধ্যে র‍্যান্ডম সংখ্যা।',             icon:'dice-5',         color:'#db2777', bg:'#fdf2f8',  badge:'',     file:'tools/fun/random-number.html'        },
  { id:'coin-flipper',        cat:'fun',       title:'Coin Flipper',           titleBn:'কয়েন টস',               desc:'হেডস বা টেইলস — সিদ্ধান্ত নিন কয়েন টসে।',           icon:'circle-dot',     color:'#db2777', bg:'#fdf2f8',  badge:'',     file:'tools/fun/coin-flipper.html'         },
  { id:'spin-wheel',          cat:'fun',       title:'Spin the Wheel',         titleBn:'চাকা ঘুরাও',             desc:'কাস্টম অপশন দিয়ে স্পিনিং হুইল।',                    icon:'rotate-cw',      color:'#db2777', bg:'#fdf2f8',  badge:'new',  file:'tools/fun/spin-wheel.html'           },
  { id:'name-picker',         cat:'fun',       title:'Name Picker (Lottery)',  titleBn:'নাম লটারি',              desc:'তালিকা থেকে র‍্যান্ডমলি নাম বাছাই।',                  icon:'trophy',         color:'#db2777', bg:'#fdf2f8',  badge:'new',  file:'tools/fun/name-picker.html'          },
  { id:'would-you-rather',    cat:'fun',       title:'Would You Rather?',      titleBn:'কোনটি বেছে নেবেন?',      desc:'মজাদার দ্বিধাদ্বন্দ্বে আপনার পছন্দ।',                icon:'git-fork',       color:'#db2777', bg:'#fdf2f8',  badge:'new',  file:'tools/fun/would-you-rather.html'     },
  { id:'bpm-tap',             cat:'fun',       title:'BPM Tap Tempo',          titleBn:'বিটস পার মিনিট',         desc:'গানের তালে ট্যাপ করে BPM মাপুন।',                    icon:'music',          color:'#db2777', bg:'#fdf2f8',  badge:'new',  file:'tools/fun/bpm-tap.html'              },
  /* UTILITY */
  { id:'qr-generator',        cat:'utility',   title:'QR Code Generator',      titleBn:'QR কোড জেনারেটর',        desc:'যেকোনো টেক্সট বা লিংকের QR কোড।',                   icon:'qr-code',        color:'#475569', bg:'#f8fafc',  badge:'hot',  file:'tools/utility/qr-generator.html'     },
];

/* ================================================
   CATEGORIES
   ================================================ */
const TN_CATS = [
  { id:'all',       label:'সব টুলস',     labelEn:'All Tools',    icon:'grid-2x2'     },
  { id:'text',      label:'টেক্সট',       labelEn:'Text',         icon:'type'         },
  { id:'math',      label:'ম্যাথ',         labelEn:'Math',         icon:'calculator'   },
  { id:'ai',        label:'AI',           labelEn:'AI',           icon:'sparkles'     },
  { id:'converter', label:'কনভার্টার',    labelEn:'Converter',    icon:'arrow-left-right'},
  { id:'image',     label:'ইমেজ',          labelEn:'Image',        icon:'image'        },
  { id:'coding',    label:'কোডিং',        labelEn:'Coding',       icon:'code-2'       },
  { id:'health',    label:'স্বাস্থ্য',     labelEn:'Health',       icon:'heart-pulse'  },
  { id:'study',     label:'স্টাডি',        labelEn:'Study',        icon:'graduation-cap'},
  { id:'finance',   label:'ফাইন্যান্স',   labelEn:'Finance',      icon:'landmark'     },
  { id:'social',    label:'সোশ্যাল',      labelEn:'Social',       icon:'share-2'      },
  { id:'science',   label:'বিজ্ঞান',       labelEn:'Science',      icon:'flask-conical'},
  { id:'geo',       label:'জিও',           labelEn:'Geo',          icon:'globe'        },
  { id:'fun',       label:'মজার',          labelEn:'Fun',          icon:'laugh'        },
  { id:'utility',   label:'ইউটিলিটি',     labelEn:'Utility',      icon:'wrench'       },
];

/* ================================================
   LUCIDE ICON SVG PATHS
   Only the icons we need — all hand-picked paths
   ================================================ */
const TN_ICONS = {
  'grid-2x2':        '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  'nest':            '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'home':            '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'search':          '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  'sun':             '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.78" y2="4.22"/>',
  'moon':            '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>',
  'star':            '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'chevron-right':   '<polyline points="9 18 15 12 9 6"/>',
  'chevron-left':    '<polyline points="15 18 9 12 15 6"/>',
  'x':               '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'copy':            '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',
  'check':           '<polyline points="20 6 9 17 4 12"/>',
  'share-2':         '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  'download':        '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  'trash-2':         '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>',
  'refresh-cw':      '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>',
  'info':            '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  'alert-circle':    '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  'check-circle':    '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'arrow-left':      '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  'arrow-right':     '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'align-left':      '<line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/>',
  'type':            '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  'shield-check':    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  'book-open':       '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>',
  'book':            '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
  'file-text':       '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  'link':            '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',
  'award':           '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
  'calculator':      '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/>',
  'percent':         '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  'function-square': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"/>< path d="M9 11.2h5.7"/>',
  'shapes':          '<path d="M8.3 10a.7.7 0 01-.626-1.079L11.4 3a.7.7 0 011.198-.043L16.3 8.9a.7.7 0 01-.572 1.1z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',
  'bar-chart-2':     '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  'grid':            '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  'sparkles':        '<path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z"/><path d="M5 3l.7 2.1 2.1.7-2.1.7L5 8.5l-.7-2.1L2.2 5.7l2.1-.7z"/><path d="M19 13l.7 2.1 2.1.7-2.1.7L19 18.5l-.7-2.1-2.1-.7 2.1-.7z"/>',
  'spell-check':     '<path d="M6 13h8"/><path d="M6 17h8"/><path d="M6 9h8"/><path d="M14 4l3 3-6 6"/><path d="M17 7l3 3"/>',
  'lightbulb':       '<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>',
  'languages':       '<path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/>',
  'mail':            '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  'ruler':           '<path d="M21.3 8.7l-1 1"/><path d="M3.7 15.3l1-1"/><path d="M19.1 10.9l-1 1"/><path d="M5.9 13.1l1-1"/><path d="M16.9 13.1l-1 1"/><path d="M8.1 10.9l1-1"/><path d="M14.7 15.3l-1 1"/><path d="M9.3 8.7l1-1"/><path d="M3 21L21 3"/>',
  'coins':           '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1110.34 18"/><path d="M7 6h1v4"/>',
  'clock':           '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'binary':          '<rect x="14" y="14" width="4" height="6" rx="2"/><rect x="6" y="4" width="4" height="6" rx="2"/><path d="M6 20h4"/><path d="M14 10h4"/><path d="M6 14h2v6"/><path d="M14 4h2v6"/>',
  'volume-2':        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>',
  'utensils':        '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  'image':           '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  'crop':            '<path d="M6.13 1L6 16a2 2 0 002 2h15"/><path d="M1 6.13L16 6a2 2 0 012 2v15"/>',
  'file-image':      '<path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="M20 17l-1.09-1.09a2 2 0 00-2.82 0L10 22"/>',
  'pipette':         '<path d="M20 5.05 18.95 4A2 2 0 0016.5 4L4 16.5a2 2 0 000 2.83l.67.67a2 2 0 002.83 0l1.5-1.5 1.5 1.5a2.09 2.09 0 002.96 0 2.09 2.09 0 000-2.96L12 15.5"/><path d="m15 9 1.5 1.5"/><path d="M3 21l2.5-2.5"/>',
  'terminal':        '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  'braces':          '<path d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 002-2v-5c0-1.1.9-2 2-2a2 2 0 01-2-2V5a2 2 0 00-2-2h-1"/>',
  'code':            '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  'lock':            '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
  'key':             '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
  'link-2':          '<path d="M15 7h3a5 5 0 010 10h-3m-6 0H6A5 5 0 116 7h3"/><line x1="8" y1="12" x2="16" y2="12"/>',
  'filter':          '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  'activity':        '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  'flame':           '<path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>',
  'droplets':        '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0014 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 01-11.91 4.97"/>',
  'dumbbell':        '<path d="M14.4 14.4L9.6 9.6"/><path d="M18.657 6.343A8 8 0 116.343 18.657A8 8 0 0118.657 6.343z"/><path d="M7.757 7.757l1.06 1.06m6.366 6.366l1.061 1.06M17 8h1m-9 8H8"/>',
  'pill':            '<path d="M10.5 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6.5"/><path d="M8 19v.01M8 22v.01M12 17v.01M12 20v.01M16 19v.01M16 22v.01"/>',
  'moon-star':       '<path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
  'layers':          '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  'timer':           '<line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="14" x2="12" y2="8"/><path d="M4.93 5l1.41 1.41A8 8 0 1019.07 5l1.41-1.41A10 10 0 114.93 5z"/>',
  'keyboard':        '<rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M6 8h.001"/><path d="M10 8h.001"/><path d="M14 8h.001"/><path d="M18 8h.001"/><path d="M8 12h.001"/><path d="M12 12h.001"/><path d="M16 12h.001"/><path d="M7 16h10"/>',
  'calendar':        '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  'clipboard-list':  '<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/>',
  'help-circle':     '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'landmark':        '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  'trending-up':     '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  'receipt':         '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><line x1="16" y1="8" x2="8" y2="8"/><line x1="16" y1="12" x2="8" y2="12"/><line x1="12" y1="16" x2="8" y2="16"/>',
  'piggy-bank':      '<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z"/><path d="M2 9v1a2 2 0 002 2h1"/><path d="M16 11h.01"/>',
  'wallet':          '<path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 11h.01"/><path d="M4 7V5a2 2 0 012-2h12a2 2 0 012 2v2"/>',
  'utensils-crossed':'<path d="M16 2l-2.3 2.3a3 3 0 000 4.2l1.8 1.8a3 3 0 004.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 000 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15zm0 0l2 2"/><path d="M2 22l9.8-9.8"/>',
  'tag':             '<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  'hash':            '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  'user':            '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'twitter':         '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>',
  'youtube':         '<path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>',
  'message-square':  '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
  'scissors':        '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
  'flask-conical':   '<path d="M10 2v7.527a2 2 0 01-.211.896L4.72 19.9A2 2 0 006.527 23h10.946a2 2 0 001.808-2.1L14.21 10.423A2 2 0 0114 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  'atom':            '<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/>',
  'test-tube':       '<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/>',
  'gauge':           '<path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M22 12h1M12 2V1M2 12H1M4.2 4.2l-.7-.7M19.8 4.2l.7-.7"/><path d="M15.95 8.55a5 5 0 00-7.9 0"/>',
  'zap':             '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'waves':           '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  'map-pin':         '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  'globe':           '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>',
  'phone':           '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.09 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.84a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>',
  'map':             '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
  'server':          '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  'dice-5':          '<rect x="2" y="2" width="20" height="20" rx="2.5" ry="2.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="8.5" cy="15.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" stroke="none"/>',
  'circle-dot':      '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
  'rotate-cw':       '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>',
  'trophy':          '<path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/>',
  'git-fork':        '<circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>',
  'music':           '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  'qr-code':         '<rect x="2" y="2" width="8" height="8" rx="1"/><rect x="5" y="5" width="2" height="2"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="17" y="5" width="2" height="2"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="5" y="17" width="2" height="2"/><rect x="14" y="14" width="2" height="2"/><rect x="20" y="14" width="2" height="2"/><rect x="14" y="20" width="8" height="2"/>',
  'wrench':          '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
  'laugh':           '<circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
  'graduation-cap':  '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  'heart-pulse':     '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  'code-2':          '<path d="M10 9l-3 3 3 3M14 9l3 3-3 3M7 4l5 16"/>',
  'arrow-left-right':'<polyline points="17 11 21 7 17 3"/><line x1="3" y1="7" x2="21" y2="7"/><polyline points="7 21 3 17 7 13"/><line x1="21" y1="17" x2="3" y2="17"/>',
};

/* helper — build <svg> string */
function tnIcon(name, size) {
  size = size || 18;
  const path = TN_ICONS[name] || TN_ICONS['wrench'];
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

/* ================================================
   THEME (dark / light)
   ================================================ */
const TnTheme = {
  get() { return localStorage.getItem('tn-theme') || 'light'; },
  set(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('tn-theme', t);
    const btn = document.getElementById('tn-theme-btn');
    if (btn) btn.innerHTML = tnIcon(t === 'dark' ? 'sun' : 'moon');
  },
  toggle() { TnTheme.set(TnTheme.get() === 'dark' ? 'light' : 'dark'); },
  init() { TnTheme.set(TnTheme.get()); }
};

/* ================================================
   LANGUAGE (bn / en)
   ================================================ */
const TnLang = {
  get() { return localStorage.getItem('tn-lang') || 'bn'; },
  set(l) {
    localStorage.setItem('tn-lang', l);
    const btn = document.getElementById('tn-lang-btn');
    if (btn) btn.textContent = l === 'bn' ? 'EN' : 'বাং';
    document.querySelectorAll('[data-bn]').forEach(el => {
      el.textContent = l === 'bn' ? el.dataset.bn : (el.dataset.en || el.dataset.bn);
    });
  },
  toggle() { TnLang.set(TnLang.get() === 'bn' ? 'en' : 'bn'); },
  init() { TnLang.set(TnLang.get()); }
};

/* ================================================
   FAVORITES
   ================================================ */
const TnFav = {
  get() { return JSON.parse(localStorage.getItem('tn-favs') || '[]'); },
  toggle(id) {
    let favs = TnFav.get();
    if (favs.includes(id)) favs = favs.filter(f => f !== id);
    else favs.unshift(id);
    localStorage.setItem('tn-favs', JSON.stringify(favs));
    return favs.includes(id);
  },
  has(id) { return TnFav.get().includes(id); }
};

/* ================================================
   RECENT TOOLS
   ================================================ */
const TnRecent = {
  get() { return JSON.parse(localStorage.getItem('tn-recent') || '[]'); },
  add(id) {
    let list = TnRecent.get().filter(r => r !== id);
    list.unshift(id);
    localStorage.setItem('tn-recent', JSON.stringify(list.slice(0, 8)));
  }
};

/* ================================================
   TOAST
   ================================================ */
function tnToast(msg, type, duration) {
  type = type || 'default';
  duration = duration || 2800;
  let container = document.getElementById('tn-toasts');
  if (!container) {
    container = document.createElement('div');
    container.id = 'tn-toasts';
    document.body.appendChild(container);
  }
  const iconMap = { success: 'check-circle', error: 'alert-circle', warning: 'info', default: 'info' };
  const toast = document.createElement('div');
  toast.className = 'tn-toast' + (type !== 'default' ? ' toast-' + type : '');
  toast.innerHTML = tnIcon(iconMap[type] || 'info', 16) + '<span>' + msg + '</span>';
  container.appendChild(toast);
  setTimeout(function() {
    toast.classList.add('toast-out');
    setTimeout(function() { toast.remove(); }, 220);
  }, duration);
}

/* ================================================
   CLIPBOARD COPY
   ================================================ */
function tnCopy(text, msg) {
  msg = msg || 'কপি হয়েছে!';
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() { tnToast(msg, 'success'); });
  } else {
    var el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    el.remove();
    tnToast(msg, 'success');
  }
}

/* ================================================
   WEB SHARE
   ================================================ */
function tnShare(title, text, url) {
  if (navigator.share) {
    navigator.share({ title: title, text: text, url: url || location.href });
  } else {
    tnCopy(url || location.href, 'লিংক কপি হয়েছে!');
  }
}

/* ================================================
   PRINT / PDF EXPORT
   ================================================ */
function tnPrint() { window.print(); }

/* ================================================
   INJECT NAVBAR
   ================================================ */
function tnInjectNavbar() {
  const root = document.getElementById('tn-root');
  const base = root ? root.dataset.base || '' : '';
  const nav = document.createElement('nav');
  nav.className = 'tn-nav';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML = `
    <a class="tn-nav-brand" href="${base}index.html" aria-label="ToolNest Home">
      <div class="tn-nav-brand-icon" aria-hidden="true">${tnIcon('nest', 18)}</div>
      <span>ToolNest</span>
    </a>
    <div class="tn-nav-search" role="search">
      <span class="tn-nav-search-icon" aria-hidden="true">${tnIcon('search', 16)}</span>
      <input type="search" id="tn-nav-srch" placeholder="টুল খুঁজুন..." autocomplete="off" aria-label="Search tools">
      <div class="tn-search-dropdown" id="tn-srch-drop" role="listbox"></div>
    </div>
    <div class="tn-nav-actions">
      <button class="tn-icon-btn" id="tn-theme-btn" onclick="TnTheme.toggle()" aria-label="Toggle theme" title="থিম পরিবর্তন">${tnIcon('moon', 18)}</button>
      <button class="tn-lang-btn" id="tn-lang-btn" onclick="TnLang.toggle()" aria-label="Change language">EN</button>
    </div>`;
  const first = document.body.firstChild;
  document.body.insertBefore(nav, first);

  /* nav search */
  const inp = document.getElementById('tn-nav-srch');
  const drop = document.getElementById('tn-srch-drop');
  if (inp) {
    inp.addEventListener('input', function() {
      const q = inp.value.trim().toLowerCase();
      if (!q) { drop.classList.remove('open'); drop.innerHTML = ''; return; }
      const res = TN_TOOLS.filter(function(t) {
        return t.title.toLowerCase().includes(q) || t.titleBn.includes(q) || t.cat.includes(q);
      }).slice(0, 8);
      if (!res.length) {
        drop.innerHTML = '<div class="tn-search-empty">কোনো ফলাফল পাওয়া যায়নি</div>';
      } else {
        drop.innerHTML = res.map(function(t) {
          return `<a class="tn-search-item" href="${base}${t.file}" onclick="TnRecent.add('${t.id}')">
            <div class="tn-search-item-icon" style="background:${t.bg};color:${t.color}">${tnIcon(t.icon, 16)}</div>
            <div><div class="tn-search-item-name">${t.title}</div><div class="tn-search-item-cat">${t.titleBn}</div></div>
          </a>`;
        }).join('');
      }
      drop.classList.add('open');
    });
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target)) { drop.classList.remove('open'); }
    });
  }
}

/* ================================================
   INJECT FOOTER
   ================================================ */
function tnInjectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'tn-footer';
  footer.setAttribute('role', 'contentinfo');
  footer.innerHTML = `
    <div class="tn-footer-inner">
      <p class="tn-footer-copy">&copy; 2025 <strong>Muhammad Shourov</strong>. All rights reserved. &mdash; ToolNest</p>
      <nav class="tn-footer-links" aria-label="Footer links">
        <a href="#" onclick="return false">গোপনীয়তা নীতি</a>
        <a href="#" onclick="return false">যোগাযোগ</a>
        <a href="#" onclick="return false">GitHub</a>
      </nav>
    </div>`;
  document.body.appendChild(footer);
}

/* ================================================
   INJECT TOAST CONTAINER
   ================================================ */
function tnInjectToastContainer() {
  if (!document.getElementById('tn-toasts')) {
    const c = document.createElement('div');
    c.id = 'tn-toasts';
    c.setAttribute('role', 'status');
    c.setAttribute('aria-live', 'polite');
    document.body.appendChild(c);
  }
}

/* ================================================
   RENDER TOOL CARD
   ================================================ */
function tnToolCard(tool, base) {
  base = base || '';
  const fav = TnFav.has(tool.id);
  const badgeMap = { hot:'tn-badge-red', new:'tn-badge-blue', ai:'tn-badge-purple', '':'' };
  const badgeTxt = { hot:'জনপ্রিয়', new:'নতুন', ai:'AI', '':'' };
  const badge = tool.badge
    ? `<span class="tn-tool-card-badge ${badgeMap[tool.badge]}">${badgeTxt[tool.badge]}</span>`
    : '';
  return `
    <a class="tn-tool-card" href="${base}${tool.file}" onclick="TnRecent.add('${tool.id}')" aria-label="${tool.title}">
      ${badge}
      <div class="tn-tool-card-icon" style="background:${tool.bg};color:${tool.color}">${tnIcon(tool.icon, 22)}</div>
      <h3>${tool.title}</h3>
      <p>${tool.desc}</p>
      <button class="tn-tool-card-fav${fav?' active':''}" data-id="${tool.id}" onclick="event.preventDefault();event.stopPropagation();tnToggleFav(this,'${tool.id}')" aria-label="${fav?'Remove from favorites':'Add to favorites'}" title="ফেভারিট">${tnIcon('star', 13)}</button>
    </a>`;
}

function tnToggleFav(btn, id) {
  const active = TnFav.toggle(id);
  btn.classList.toggle('active', active);
  tnToast(active ? 'ফেভারিটে যোগ হয়েছে' : 'ফেভারিট থেকে সরানো হয়েছে', 'success');
}

/* ================================================
   KEYBOARD SHORTCUTS
   ================================================ */
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const inp = document.getElementById('tn-nav-srch') || document.getElementById('hero-search');
    if (inp) inp.focus();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
    e.preventDefault();
    TnTheme.toggle();
  }
});

/* ================================================
   INIT — runs on every page
   ================================================ */
document.addEventListener('DOMContentLoaded', function() {
  TnTheme.init();
  TnLang.init();
  tnInjectNavbar();
  tnInjectFooter();
  tnInjectToastContainer();

  /* mark current page active (optional visual) */
  const path = location.pathname;
  document.querySelectorAll('.tn-nav a').forEach(function(a) {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace(/^\.\.\/+/, ''))) {
      a.setAttribute('aria-current', 'page');
    }
  });
});
