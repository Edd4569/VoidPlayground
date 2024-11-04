
const predefinedArrays = {
    "1": [["L",1],["IF",0],["END",0],["V",2],["V",0],["V",3],["V",0],["V",0],["T",3],["I",0],["I",2],["T",0],["I",0],["L",2],["V",2],["V",3],["I",3],["V",0],["V",3],["IF",1],["V",1],["L",0],["L",2],["V",3],["I",3],["L",1],["I",2],["L",3],["L",1],["I",0],["T",2],["L",2],["L",0],["T",2],["L",2],["L",1],["L",3],["V",1],["V",2],["IF",1],["V",1],["V",3],["L",0],["L",3],["V",0],["V",2],["START",0],["L",3]],
    "2": [["START",0],["L",2],["V",0],["V",1],["V",3],["EF",0],["V",2],["V",3],["V",1],["IF",1],["L",1],["I",0],["L",2],["L",1],["L",2],["V",0],["V",3],["T",3],["L",3],["I",1],["T",3],["XF",0],["L",3],["V",1],["V",0],["L",0],["I",2],["L",2],["L",0],["L",3],["I",2],["V",2],["V",2],["V",2],["I",0],["L",0],["L",2],["V",2],["V",0],["V",3],["V",1],["V",2],["V",3],["V",1],["END",1],["V",3],["V",2],["V",1]],
    "3": [["V",1],["V",3],["V",1],["END",3],["V",0],["V",0],["V",3],["V",0],["V",1],["L",1],["IF",0],["XF",0],["IF",0],["L",2],["V",3],["V",3],["L",1],["T",1],["V",1],["I",3],["V",2],["T",3],["L",2],["V",2],["I",1],["IF",1],["L",1],["T",2],["L",2],["IF",1],["I",1],["V",1],["L",0],["T",1],["T",3],["T",0],["T",2],["T",2],["L",3],["V",2],["V",3],["L",0],["L",3],["START",3],["L",3],["L",1],["V",1],["V",3]],
    "4": [["V",0],["START",1],["V",2],["V",1],["L",1],["I",2],["L",2],["V",3],["V",0],["T",3],["IF",0],["T",0],["L",3],["V",2],["I",1],["V",3],["L",1],["L",3],["V",0],["IF",1],["V",3],["V",1],["I",3],["V",0],["I",3],["L",2],["L",1],["T",2],["L",2],["L",1],["T",2],["END",0],["L",0],["I",0],["T",1],["EF",2],["T",3],["L",3],["T",3],["V",0],["V",3],["V",0],["L",0],["IF",0],["L",3],["V",1],["L",3],["V",1]],
    "5": [["V",1],["V",0],["V",3],["V",3],["V",3],["V",0],["V",0],["V",1],["V",2],["V",3],["L",1],["I",0],["L",2],["V",2],["V",1],["V",1],["V",3],["V",3],["T",3],["IF",0],["T",2],["L",1],["T",0],["END",0],["V",2],["V",3],["EF",2],["V",2],["L",1],["L",3],["IF",1],["V",3],["V",1],["V",0],["V",2],["L",1],["L",3],["L",1],["L",3],["V",3],["V",0],["V",2],["START",0],["T",2],["IF",0],["L",3],["V",2],["V",2]],
    "6": [["V",2],["V",0],["L",1],["T",0],["L",2],["V",3],["V",1],["V",1],["START",0],["T",0],["L",3],["EF",2],["L",0],["L",2],["L",0],["V",0],["V",1],["L",0],["L",2],["V",3],["L",1],["L",3],["T",0],["V",0],["L",3],["L",1],["L",0],["T",0],["L",3],["V",1],["L",3],["V",1],["V",3],["V",1],["T",1],["L",0],["I",2],["L",2],["V",1],["V",2],["V",0],["V",3],["L",3],["V",1],["V",2],["L",0],["END",0],["V",3]],
    "7": [["L",1],["I",0],["END",0],["V",3],["V",1],["V",2],["V",1],["V",3],["L",0],["L",2],["V",3],["V",0],["V",1],["V",1],["V",3],["V",0],["L",1],["XF",0],["L",2],["T",0],["V",0],["V",1],["V",0],["V",2],["T",3],["T",1],["IF",1],["L",1],["T",0],["I",0],["T",0],["L",2],["L",0],["XF",0],["L",3],["IF",1],["I",1],["IF",0],["L",0],["T",1],["V",1],["L",0],["I",0],["T",2],["L",3],["V",3],["START",0],["L",3]],
    "8": [["V",1],["V",3],["START",0],["I",2],["L",2],["V",1],["V",2],["V",1],["V",2],["V",3],["L",1],["L",1],["T",1],["L",3],["EF",0],["V",0],["V",0],["V",0],["T",1],["IF",1],["I",1],["L",1],["L",3],["V",0],["V",3],["V",3],["L",0],["T",3],["L",3],["I",3],["L",1],["END",0],["V",1],["V",0],["V",2],["L",0],["IF",0],["T",2],["L",3],["V",1],["V",2],["V",3],["V",3],["V",3],["V",0],["V",2],["V",1],["V",2]],
    "9": [["V",1],["V",1],["V",0],["L",1],["L",2],["L",1],["I",2],["END",0],["V",2],["I",3],["L",1],["XF",0],["T",2],["T",1],["L",1],["V",3],["V",2],["L",1],["T",1],["L",0],["IF",0],["L",3],["IF",1],["V",2],["START",0],["T",2],["L",3],["IF",1],["V",0],["V",1],["V",0],["V",0],["V",0],["V",2],["V",0],["V",0],["V",1],["V",1],["V",1],["V",2],["V",2],["V",1],["V",1],["V",3],["V",0],["V",3],["V",0],["V",3]],
    "10": [["V",1],["V",1],["V",0],["V",3],["T",3],["V",3],["START",1],["V",1],["V",0],["V",3],["L",1],["L",2],["L",1],["T",0],["T",1],["V",3],["V",3],["V",1],["L",0],["T",2],["XF",0],["L",3],["IF",1],["V",0],["V",2],["V",2],["V",2],["L",2],["I",3],["I",0],["I",1],["V",1],["V",2],["L",1],["IF",0],["L",2],["T",3],["T",0],["L",3],["V",2],["V",3],["END",1],["V",1],["L",0],["T",2],["L",3],["V",2],["V",2]],
    "11": [["V",2],["V",3],["V",3],["V",1],["EF",0],["V",0],["V",2],["V",2],["V",3],["V",3],["L",1],["IF",0],["T",0],["I",0],["L",2],["V",3],["L",1],["IF",0],["XF",0],["L",2],["L",0],["IF",0],["T",2],["END",0],["I",1],["L",1],["T",2],["T",1],["EF",2],["V",0],["V",0],["V",0],["L",0],["XF",0],["I",2],["L",3],["V",0],["V",1],["V",2],["V",1],["V",1],["START",3],["V",0],["V",0],["V",1],["V",1],["V",3],["V",3]],
    "12": [["V",3],["V",1],["V",0],["L",1],["END",0],["L",1],["EF",1],["V",3],["L",1],["IF",0],["L",2],["IF",1],["L",1],["T",1],["V",0],["V",1],["T",3],["T",0],["XF",0],["L",3],["I",2],["XF",0],["T",1],["V",3],["EF",2],["L",0],["T",2],["L",2],["T",2],["I",0],["L",3],["V",0],["V",2],["V",3],["L",1],["L",3],["V",3],["EF",2],["V",0],["V",2],["START",0],["IF",0],["L",3],["V",0],["V",0],["V",0],["V",3],["V",0]],
    "13": [["V",0],["L",2],["T",0],["IF",0],["T",2],["V",0],["V",1],["V",1],["V",3],["T",3],["L",0],["V",2],["L",0],["T",3],["L",3],["V",3],["START",0],["L",2],["V",1],["V",2],["EF",0],["V",0],["V",2],["V",1],["V",3],["I",3],["V",2],["L",1],["XF",0],["L",2],["L",1],["END",0],["V",3],["L",0],["I",2],["T",2],["L",3],["T",3],["L",3],["V",0],["V",3],["V",2],["V",3],["V",2],["V",3],["EF",2],["V",0],["V",1]],
    "14": [["START",0],["I",2],["L",2],["V",1],["V",0],["V",3],["V",0],["V",0],["V",0],["V",3],["I",1],["V",2],["V",1],["V",1],["V",0],["V",1],["V",2],["V",2],["L",0],["I",0],["IF",0],["I",0],["I",0],["END",0],["V",3],["V",1],["V",1],["V",3],["V",3],["V",1],["V",3],["V",2],["V",1],["V",0],["V",3],["V",0],["V",1],["V",3],["V",1],["V",0],["V",1],["V",0],["V",3],["V",1],["V",1],["V",1],["V",3],["V",2]],
    "15": [["V",3],["V",1],["V",1],["V",1],["L",1],["T",0],["I",2],["END",0],["V",2],["V",1],["V",0],["V",3],["IF",1],["L",0],["L",2],["V",1],["START",0],["L",2],["L",1],["I",0],["L",3],["V",2],["I",3],["V",2],["V",1],["T",3],["XF",0],["T",0],["I",2],["IF",0],["L",3],["V",3],["V",0],["L",0],["T",2],["L",3],["V",1],["V",2],["V",0],["V",2],["V",3],["V",1],["V",2],["V",3],["V",0],["V",2],["V",2],["V",0]],
    "16": [["V",0],["V",3],["START",0],["I",0],["L",2],["V",1],["V",0],["V",3],["V",3],["V",0],["L",1],["L",1],["T",1],["L",2],["EF",0],["V",3],["V",0],["V",0],["T",3],["IF",1],["I",3],["L",1],["L",3],["V",2],["V",3],["V",1],["L",0],["T",3],["L",3],["I",1],["L",1],["END",0],["V",1],["V",3],["V",2],["L",0],["IF",0],["T",2],["L",3],["V",2],["V",1],["V",1],["V",3],["V",2],["V",0],["V",1],["V",1],["V",3]],
    "17": [["V",0],["V",2],["V",2],["V",2],["START",0],["T",0],["L",2],["V",0],["V",2],["V",2],["L",1],["L",2],["V",3],["T",3],["L",3],["V",0],["V",2],["V",0],["I",3],["L",0],["T",0],["T",1],["V",2],["V",1],["V",0],["L",1],["XF",0],["T",0],["L",3],["IF",1],["V",2],["V",2],["V",0],["IF",1],["L",0],["T",2],["I",2],["T",1],["V",3],["V",3],["V",2],["END",1],["V",2],["EF",3],["IF",0],["L",3],["V",0],["V",3]],
    "18": [["END",3],["V",3],["V",2],["V",3],["V",2],["V",3],["START",1],["V",0],["L",0],["L",2],["T",2],["V",0],["V",3],["L",1],["L",3],["V",0],["V",1],["T",3],["T",0],["L",2],["V",3],["IF",1],["V",1],["V",1],["V",1],["L",0],["L",3],["L",0],["IF",0],["T",1],["V",3],["V",1],["V",0],["L",0],["T",3],["V",2],["V",1],["EF",2],["V",0],["V",3],["V",2],["IF",2],["V",2],["V",0],["V",1],["V",0],["V",0],["V",3]],
    "19": [["V",2],["V",3],["V",1],["START",0],["T",2],["I",0],["L",2],["V",1],["V",1],["V",0],["L",3],["I",2],["L",1],["V",0],["I",1],["V",1],["V",0],["V",1],["T",3],["L",2],["V",3],["L",1],["T",1],["V",2],["V",1],["V",0],["I",1],["T",3],["T",1],["XF",0],["L",3],["V",2],["V",3],["V",1],["L",0],["L",2],["L",0],["T",1],["V",1],["V",3],["V",2],["V",0],["V",2],["END",2],["I",0],["L",3],["V",0],["V",2]],
    "20": [["V",2],["V",0],["V",0],["START",1],["V",1],["V",0],["V",1],["V",1],["V",1],["V",0],["L",1],["XF",0],["I",2],["L",2],["V",0],["V",1],["V",2],["V",1],["L",0],["T",1],["V",2],["L",0],["EF",1],["V",3],["V",1],["V",0],["IF",1],["L",0],["L",2],["T",1],["V",3],["V",1],["V",2],["V",1],["EF",2],["V",2],["L",0],["IF",0],["L",2],["V",3],["V",2],["V",2],["V",2],["V",1],["V",3],["V",2],["END",1],["V",2]],
    "21": [["V",0],["START",0],["T",0],["I",0],["T",0],["L",2],["V",1],["V",2],["V",3],["V",2],["IF",1],["V",2],["L",0],["XF",0],["L",2],["V",0],["V",1],["V",3],["I",3],["V",2],["V",1],["EF",2],["I",1],["V",3],["V",1],["V",0],["T",3],["EF",1],["V",0],["V",3],["T",3],["END",0],["V",3],["V",3],["L",0],["I",2],["I",2],["I",2],["L",3],["V",1],["V",3],["V",0],["V",3],["V",3],["V",1],["V",3],["V",1],["V",0]],
    "22": [["V",3],["V",1],["V",2],["V",1],["EF",0],["V",1],["V",0],["V",1],["V",3],["V",1],["V",3],["L",1],["T",2],["I",2],["IF",0],["END",0],["V",2],["V",3],["V",1],["IF",1],["V",3],["V",2],["EF",0],["V",3],["V",1],["L",1],["IF",0],["T",1],["V",3],["V",0],["T",3],["L",2],["START",0],["T",1],["L",1],["XF",0],["T",0],["L",2],["L",0],["T",1],["V",0],["L",0],["T",2],["T",2],["L",3],["L",0],["I",0],["L",3]],
    "23": [["V",3],["V",1],["V",0],["V",2],["L",1],["T",0],["I",0],["END",0],["V",0],["V",2],["V",0],["V",1],["IF",1],["L",0],["L",2],["V",1],["START",0],["L",2],["L",1],["I",0],["L",3],["V",3],["I",3],["V",2],["V",3],["T",3],["XF",0],["T",0],["I",2],["IF",0],["L",3],["V",3],["V",2],["L",0],["T",2],["L",3],["V",3],["V",3],["V",1],["V",1],["V",1],["V",2],["V",3],["V",3],["V",0],["V",2],["V",2],["V",3]],
    "24": [["V",1],["V",3],["V",0],["V",3],["V",3],["V",2],["START",0],["L",2],["V",2],["V",2],["L",0],["T",1],["L",1],["V",2],["V",0],["I",3],["END",3],["V",1],["IF",1],["I",0],["T",1],["T",1],["L",1],["T",1],["T",3],["IF",0],["L",2],["L",1],["L",2],["V",2],["I",3],["I",1],["I",1],["V",3],["IF",1],["I",1],["T",3],["IF",0],["XF",0],["L",3],["L",0],["I",2],["T",2],["L",3],["L",0],["I",2],["L",3],["V",1]],
    "25": [["V",1],["L",2],["T",0],["IF",0],["T",1],["V",0],["V",1],["V",3],["V",3],["T",1],["L",3],["V",1],["L",2],["T",3],["L",1],["V",1],["START",0],["L",2],["V",3],["V",1],["EF",0],["V",0],["V",3],["V",2],["V",3],["I",3],["V",2],["L",1],["XF",0],["L",2],["L",1],["END",0],["V",1],["L",0],["I",0],["T",2],["L",3],["T",3],["L",3],["V",2],["V",0],["V",3],["V",0],["V",2],["V",0],["EF",2],["V",0],["V",1]],
    "26": [["V",1],["V",2],["V",3],["V",3],["V",0],["L",2],["V",0],["V",1],["V",2],["L",0],["L",1],["L",2],["V",1],["L",1],["I",2],["L",2],["V",3],["L",0],["IF",1],["L",0],["I",0],["T",2],["I",0],["T",1],["V",1],["L",2],["T",3],["L",2],["I",2],["V",0],["V",0],["END",1],["L",1],["I",0],["XF",0],["L",3],["V",0],["V",0],["L",1],["V",3],["START",3],["V",1],["EF",2],["V",1],["V",0],["V",1],["V",2],["V",3]],
    "27": [["V",3],["V",3],["V",2],["V",1],["EF",0],["V",0],["V",2],["V",1],["V",0],["V",3],["L",1],["IF",0],["T",0],["I",0],["L",2],["V",0],["L",1],["IF",0],["XF",0],["L",2],["L",0],["IF",0],["T",2],["END",0],["I",3],["L",1],["T",2],["T",1],["EF",2],["V",0],["V",0],["V",3],["L",0],["XF",0],["I",0],["L",3],["V",3],["V",1],["V",2],["V",2],["V",1],["START",3],["V",3],["V",0],["V",2],["V",2],["V",1],["V",3]],
    "28": [["START",1],["V",1],["V",0],["V",1],["V",3],["V",1],["V",3],["V",0],["I",3],["V",1],["T",2],["L",1],["L",2],["L",1],["L",2],["V",2],["L",0],["T",0],["I",2],["T",2],["XF",0],["L",3],["IF",1],["V",0],["V",0],["L",0],["I",2],["IF",0],["L",3],["V",1],["L",0],["END",0],["V",1],["T",2],["L",0],["I",3],["L",2],["EF",0],["V",2],["V",1],["V",3],["V",3],["EF",3],["IF",0],["T",3],["L",3],["V",0],["V",0]],
    "29": [["V",3],["V",2],["V",2],["V",3],["V",2],["V",2],["V",2],["V",1],["V",3],["V",3],["L",1],["IF",0],["L",2],["V",0],["V",0],["V",3],["V",3],["V",1],["I",1],["L",1],["L",3],["L",1],["L",2],["V",2],["START",0],["I",0],["L",3],["L",0],["I",0],["L",3],["L",0],["END",0],["V",0],["V",0],["T",3],["IF",1],["I",3],["I",0],["V",3],["V",0],["V",0],["V",3],["V",2],["V",3],["V",2],["V",2],["V",3],["V",0]],
    "30": [["V",0],["V",1],["V",2],["START",0],["T",0],["I",0],["L",2],["V",1],["V",1],["V",1],["L",1],["I",0],["L",3],["V",0],["I",3],["V",1],["V",3],["V",2],["T",3],["L",2],["V",0],["L",1],["T",1],["V",1],["V",3],["V",3],["I",3],["T",3],["T",0],["XF",0],["L",3],["V",2],["V",3],["V",0],["L",0],["L",3],["L",0],["T",1],["V",1],["V",3],["V",3],["V",3],["V",2],["END",2],["I",2],["L",3],["V",2],["V",0]],
    "31": [["V",3],["END",3],["V",0],["V",0],["V",2],["V",0],["V",1],["V",2],["L",1],["T",2],["IF",0],["L",2],["V",2],["V",0],["V",2],["V",2],["T",3],["L",2],["L",1],["XF",0],["I",0],["T",0],["L",2],["V",2],["L",0],["XF",0],["L",3],["I",3],["V",1],["L",0],["T",1],["V",1],["V",3],["EF",2],["V",0],["L",0],["EF",1],["V",2],["I",1],["V",1],["V",2],["V",1],["V",1],["V",3],["V",0],["START",0],["L",3],["V",0]],
    "32": [["V",0],["V",3],["START",0],["T",0],["L",2],["V",3],["V",3],["V",0],["V",1],["L",1],["I",2],["XF",0],["T",2],["L",2],["V",1],["V",2],["V",3],["I",1],["I",3],["IF",1],["I",3],["I",3],["V",3],["V",1],["V",0],["L",0],["T",0],["T",2],["IF",0],["XF",0],["L",2],["V",2],["V",1],["L",1],["XF",0],["EF",1],["V",2],["L",0],["L",3],["V",2],["V",3],["L",0],["T",2],["I",2],["END",0],["V",3],["V",0],["V",3]],
    "33": [["V",0],["START",1],["V",3],["V",3],["V",0],["V",2],["V",2],["V",2],["V",3],["I",3],["V",2],["V",0],["V",0],["V",2],["V",3],["V",3],["EF",3],["XF",0],["L",2],["V",2],["EF",0],["V",2],["V",1],["V",3],["V",1],["L",0],["T",2],["IF",0],["T",1],["V",1],["V",3],["V",3],["V",2],["V",0],["V",0],["V",3],["L",0],["IF",0],["L",2],["V",3],["V",2],["V",0],["V",3],["V",0],["V",0],["V",0],["END",1],["V",1]],
    "34": [["V",3],["V",3],["V",2],["V",1],["V",3],["V",2],["V",2],["V",3],["START",1],["V",0],["V",2],["V",1],["V",2],["V",1],["V",1],["V",2],["L",0],["IF",0],["L",2],["V",0],["V",2],["V",0],["V",2],["V",1],["V",3],["V",3],["T",3],["I",0],["L",2],["V",3],["V",3],["V",2],["V",1],["V",1],["L",0],["IF",0],["T",2],["L",2],["V",2],["V",2],["V",2],["V",2],["V",3],["V",3],["V",3],["END",1],["V",2],["V",2]],
    "35": [["V",1],["V",0],["V",3],["V",3],["V",3],["V",0],["V",0],["V",1],["V",2],["V",3],["L",1],["I",0],["L",2],["V",2],["V",1],["V",1],["V",3],["V",3],["T",3],["IF",0],["T",2],["L",1],["T",0],["END",0],["V",2],["V",3],["EF",2],["V",2],["L",1],["L",3],["IF",1],["V",3],["V",1],["V",0],["V",2],["L",1],["L",3],["L",1],["L",3],["V",3],["V",0],["V",2],["START",0],["T",2],["IF",0],["L",3],["V",2],["V",2]],
    "36": [["V",0],["START",1],["V",2],["V",1],["L",1],["I",2],["L",2],["V",3],["V",0],["T",3],["IF",0],["T",0],["L",3],["V",2],["I",1],["V",3],["L",1],["L",3],["V",0],["IF",1],["V",3],["V",1],["I",3],["V",0],["I",3],["L",2],["L",1],["T",2],["L",2],["L",1],["T",2],["END",0],["L",0],["I",0],["T",1],["EF",2],["T",3],["L",3],["T",3],["V",0],["V",3],["V",0],["L",0],["IF",0],["L",3],["V",1],["L",3],["V",1]],
    "37": [["V",1],["V",1],["V",0],["L",1],["L",2],["L",1],["I",2],["END",0],["V",2],["I",3],["L",1],["XF",0],["T",2],["T",1],["L",1],["V",3],["V",2],["L",1],["T",1],["L",0],["IF",0],["L",3],["IF",1],["V",2],["START",0],["T",2],["L",3],["IF",1],["V",0],["V",1],["V",0],["V",0],["V",0],["V",2],["V",0],["V",0],["V",1],["V",1],["V",1],["V",2],["V",2],["V",1],["V",1],["V",3],["V",0],["V",3],["V",0],["V",3]],
    "38": [["V",0],["V",2],["V",3],["V",2],["L",1],["T",0],["L",2],["V",0],["V",3],["V",2],["L",1],["IF",0],["T",1],["L",0],["XF",0],["END",0],["V",1],["V",2],["T",3],["T",0],["XF",0],["T",0],["T",1],["V",3],["V",2],["V",0],["I",1],["L",0],["T",1],["L",0],["L",3],["V",1],["V",1],["V",2],["T",3],["I",0],["L",3],["V",0],["V",0],["V",2],["V",0],["V",1],["START",3],["V",3],["V",3],["V",3],["V",3],["V",2]],
    "39": [["L",1],["I",0],["END",0],["V",0],["V",2],["V",0],["V",2],["V",3],["L",0],["L",2],["V",0],["V",2],["V",3],["V",3],["V",1],["V",1],["L",1],["XF",0],["L",2],["T",0],["V",3],["V",2],["V",2],["V",1],["T",3],["T",1],["IF",1],["L",1],["T",0],["I",2],["T",0],["L",2],["L",0],["XF",0],["L",3],["IF",1],["I",1],["IF",0],["L",0],["T",1],["V",2],["L",0],["I",2],["T",2],["L",3],["V",2],["START",0],["L",3]],
    "40": [["START",0],["L",2],["V",3],["L",1],["V",3],["V",1],["V",3],["V",3],["V",1],["L",0],["IF",0],["T",0],["I",2],["L",2],["L",0],["V",2],["V",2],["L",2],["V",2],["IF",1],["V",0],["I",3],["V",3],["V",3],["V",1],["V",1],["V",2],["I",3],["V",2],["L",0],["L",2],["V",0],["V",0],["V",1],["V",1],["L",0],["I",2],["EF",1],["I",3],["V",1],["V",3],["V",1],["V",1],["V",3],["V",3],["V",2],["L",0],["END",0]],
    "41": [["V",1],["V",1],["L",1],["T",0],["L",2],["V",2],["V",3],["V",0],["START",0],["T",0],["L",3],["EF",2],["L",0],["L",2],["L",2],["V",2],["V",1],["L",0],["L",2],["V",1],["L",1],["L",3],["T",1],["V",0],["L",2],["L",1],["L",0],["T",0],["L",3],["V",2],["L",0],["V",3],["V",3],["V",0],["T",0],["L",0],["I",2],["L",2],["V",2],["V",3],["V",2],["V",3],["L",0],["V",3],["V",1],["L",0],["END",0],["V",3]],
    "42": [["END",2],["I",2],["L",2],["V",3],["V",3],["V",2],["V",0],["V",0],["V",1],["V",1],["T",3],["T",0],["L",2],["V",2],["V",3],["V",1],["V",3],["V",1],["I",3],["I",1],["I",1],["V",1],["V",3],["V",2],["V",0],["V",3],["L",0],["L",3],["I",3],["V",0],["V",2],["V",0],["V",3],["V",3],["V",0],["V",1],["T",3],["I",2],["L",2],["V",2],["V",0],["V",3],["V",2],["V",1],["L",0],["I",0],["T",2],["START",2]],
    "43": [["START",0],["I",2],["L",2],["V",2],["V",1],["V",1],["V",2],["V",0],["V",0],["V",2],["I",3],["V",1],["V",2],["V",0],["V",1],["V",1],["V",0],["V",1],["L",0],["I",0],["IF",0],["I",2],["I",2],["END",0],["V",0],["V",0],["V",2],["V",3],["V",1],["V",1],["V",3],["V",0],["V",2],["V",1],["V",3],["V",2],["V",2],["V",1],["V",1],["V",2],["V",1],["V",0],["V",1],["V",0],["V",3],["V",3],["V",3],["V",2]],
    "44": [["V",0],["L",1],["T",0],["IF",0],["T",0],["V",0],["V",0],["V",1],["V",3],["T",3],["L",3],["V",3],["L",0],["T",0],["L",3],["V",3],["START",0],["L",2],["V",3],["V",3],["EF",0],["V",0],["V",0],["V",1],["V",0],["I",3],["V",2],["L",1],["XF",0],["L",2],["L",1],["END",0],["V",1],["L",0],["I",0],["T",2],["L",3],["T",3],["L",3],["V",1],["V",2],["V",3],["V",0],["V",0],["V",1],["EF",2],["V",0],["V",1]]
};

const imageMap = {
    "L": "vw-piece-move-lshapesprite.png",
    "I": "vw-piece-move-straightsprite.png",
    "T": "vw-piece-move-tshapesprite.png",
    "IF": "vw-piece-static-straightsprite.png",
    "EF": "vw-piece-static-endcapsprite.png",
    "XF": "vw-piece-static-crosssprite.png",
    "START": "vw-piece-start.png",
    "END": "vw-piece-endsprite.png"
};

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('predefinedArraysDropdown');
    for (const key in predefinedArrays) {
        const option = document.createElement('option');
        option.value = key;
        option.text = key;
        dropdown.appendChild(option);
    }
});
