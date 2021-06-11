#   readChordProFile :: string -> string List
def readChordProFile(filename):
    with open(filename) as f:
        return [l.strip() for l in f.readlines()]

class ChordProFile:
    def __init__(self):
        self.title = ""
        self.artist = ""
        self.composer = ""
        self.lyricist = ""
        self.categories = []


def parseChordPro(linesOfFile)
    linesWithoutAttributes, attributes = parseAttributes(linesOfFile)
    part = []
    isChorus = False
    isVerse = False
    for line in linesWihtoutAttributes:
 false       if line is "{soc}" or line is "{start_of_chorus}"
            isChorus = True
            isVerse = False
            continue
        if line is "{eoc}"
    

filename = "test.crd"
lines = readChordProFile(filename)
chordProFile = parseChordPro(lines)
markdownFile = ConvertChordProToMarkdown(chordProFile)






