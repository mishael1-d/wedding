"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const programItems = [
  { title: "Opening Prayer", desc: "" },
  {
    title: "Processional Song",
    desc: "Great is thy faithfulness",
    lyrics: `Great is thy faithfulness O god my father
There is no shadow of turning with thee
Thou changest not, thy compassion they fail not,
As thou has been thou forever shall be

CHORUS
Great is thy faithfulness, Great is thy faithfulness
Morning by morning, new mercies I see
All I have needed Thy hands hath provided
Great is thy Faithfulness, Lord unto me

Summer and Winter and Spring time and Harvest
Sun, Moon and Stars in their courses above
Join with all nature in manifold witness
To the great faithfulness mercy and love
CHORUS

Pardon for sin and a peace that endureth
Thine own dear presence to cheer and to guide
Strength for today and bright hope for tomorrow
Blessings all mine with ten thousand beside
CHORUS`,
  },
  { title: "Invocation", desc: "" },
  { title: "Giving of the Bride", desc: "" },
  {
    title: "Second Hymn",
    desc: "Blessed assurance",
    lyrics: `Blessed assurance Jesus is mine
O what a foretaste of glory divine
Heir of salvation, purchase of God
Born of His Spirit, washed in His blood

CHORUS
This is my story, this is my song,
Praising my Savior all the day long
This is my story, this is my song
Praising my savior all the day long 

Prefect submission, perfect delight
Visions of rapture now burst on my sight
Angels descending bring from above
Echoes of mercy, whispers of love
CHORUS

Perfect submission, all is at rest
I in my Saviour am happy and blest
Watching and waiting looking above
Filled with his goodness, lost in his love
CHORUS`,
  },
  { title: "Charge to the Bride and Groom", desc: "" },
  { title: "Profession of Vows", desc: "" },
  { title: "Presentation of Rings", desc: "" },
  {
    title: "Third Hymn",
    desc: "My hope is built on nothing less",
    lyrics: `My hope is built on nothing less
than Jesus blood and righteousness;
I dare not trust the sweetest frame,
but wholly lean on Jesus name.

Refrain:
On Christ, the solid Rock, I stand:
all other ground is sinking sand;
all other ground is sinking sand.

When darkness veils his lovely face,
I rest on his unchanging grace;
in every high and stormy gale,
my anchor holds within the veil.
[Refrain]

His oath, his covenant, his blood,
support me in the whelming flood;
when all around my soul gives way,
he then is all my hope and stay.
[Refrain]

When he shall come with trumpet sound,
O may I then in him be found:
dressed in his righteousness alone,
faultless to stand before the throne.
[Refrain]`,
  },
  { title: "Communion", desc: "" },
  { title: "Blessing of the Couple", desc: "" },
  { title: "Presentation to the Congregation", desc: "" },
  { title: "Thanksgiving", desc: "" },
  {
    title: "Recessional Hymn",
    desc: "Showers of blessing",
    lyrics: `There shall be showers of blessing
This is the promise of love
There shall be seasons refreshing
Sent from the savior above

CHORUS:
Showers of blessing
Showers of blessing we need
Mercy drops round us are falling
But for the showers we plead

There shall be showers of blessing
Precious reviving again
Over the hills and the valleys
Sounds of abundance of rain
CHORUS

There shall be showers of blessing 
Send them upon us oh Lord
Grant now to us a refreshing
Come now, honour thy word
CHORUS

There shall be showers of blessing
Oh that today they might fall
Now as to God we’re confessing
Now as on Jesus we call
CHORUS

There shall be showers of blessing
If we but trust and obey
There shall be seasons refreshing
If we let God have His way
CHORUS`,
  },
  {
    title: "Reception",
    desc: "Program for the Reception",
    receptionProgram: [
      "Recognition of Guests",
      "Introduction of Couple's Families",
      "Arrival of Couple",
      "Opening Prayer",
      "Cutting of Cake",
      "Games",
      "First Dance",
      "Open Floor Dance",
      "Vote of Thanks - Couple",
      "Closing Prayer",
    ],
  },
];

export default function ProgramOfEvents() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleLyrics = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-deep-green text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-gold"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-gold"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-gold mb-4">
            Order of Service
          </h2>
          <p className="font-serif text-xl text-white/80">
            The Covenant Nation, Kubwa
          </p>
          <p className="font-serif text-lg text-gold mt-2">
            5th December, 2025 @ 3pm
          </p>
        </motion.div>

        <div className="space-y-6">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`flex items-center gap-4 md:gap-8 cursor-pointer ${
                  item.lyrics || item.receptionProgram
                    ? "hover:bg-white/5 rounded-lg p-2 transition-colors"
                    : ""
                }`}
                onClick={() =>
                  (item.lyrics || item.receptionProgram) && toggleLyrics(index)
                }
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-full border border-gold/30 flex items-center justify-center text-gold font-serif text-lg md:text-xl group-hover:bg-gold group-hover:text-deep-green transition-colors duration-300">
                  {index + 1}
                </div>
                <div className="flex-grow border-b border-white/10 pb-4 group-hover:border-gold/30 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl md:text-2xl text-white">
                      {item.title}
                      {item.lyrics && (
                        <span className="ml-2 text-xs text-gold border border-gold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Lyrics
                        </span>
                      )}
                      {item.receptionProgram && (
                        <span className="ml-2 text-xs text-gold border border-gold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Details
                        </span>
                      )}
                    </h3>
                    {(item.lyrics || item.receptionProgram) && (
                      <span
                        className="text-gold text-xl transform transition-transform duration-300"
                        style={{
                          transform:
                            expandedIndex === index
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        ↓
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-gold/80 font-serif italic mt-1">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && item.lyrics && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 md:pl-24 pr-4 py-4 text-white/80 font-serif whitespace-pre-line leading-relaxed">
                      {item.lyrics}
                    </div>
                  </motion.div>
                )}
                {expandedIndex === index && item.receptionProgram && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 md:pl-24 pr-4 py-4">
                      <ol className="space-y-2 text-white/80 font-serif">
                        {item.receptionProgram.map((programItem, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-gold font-bold">
                              {idx + 1}.
                            </span>
                            <span>{programItem}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center border-t border-white/20 pt-10"
        >
          <h3 className="font-serif text-2xl text-gold mb-4">
            Officiating Ministers
          </h3>
          <p className="font-serif text-lg text-white/80">Pastor Chibuzo Eze</p>
          <p className="font-serif text-lg text-white/80">Pastor Pankan Eze</p>
          <p className="font-serif text-lg text-white/80">Pastor Poju Oyemade</p>
        </motion.div>
      </div>
    </section>
  );
}
