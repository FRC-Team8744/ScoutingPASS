var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 10,
      "maxSize": 25,
      "required": "true"
    },
    { "name": "Auto Starting Position",
      "code": "asp",
      "type": "radio",
      "choices": {
        "r1": "Left",
        "r2": "Middle",
        "r3": "Right",
        "x": "Didn't see"
      },
      "defaultValue": "x"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025ilpe",
      "required": "true"
    }

  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Dropped Coral (>2)",
      "code": "adc",
      "type": "counter"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "De-Algify",
      "code": "ada",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "ans",
      "type": "counter"
    },
    { "name": "Net Missed",
      "code": "anm",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Dropped Coral (>2)",
    "code": "tdc",
    "type": "counter"
    },
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "De-Algify",
      "code": "tda",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Net Missed",
      "code": "tnm",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "code": "tdr",
      "type": "radio",
      "choices": {
        "AB": "5<br>",
        "E": "4<br>",
        "G": "3<br>",
        "A": "2<br>",
        "BA": "1<br>",
        "DNP": "0"
      },
      "defaultValue": "DNP"
    }
  ],
  "endgame": [
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Failed Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Barge Timer",
      "code": "ebt",
      "type": "timer"
    }
  ],
  "postmatch": [
    { "name": "Penalties",
      "code": "ppen",
      "type": "counter"
    },
    { "name": "Card",
      "code": "card",
      "type": "radio",
      "choices": {
        "Yellow": "Yellow<br>",
        "Red": "Red<br>",
        "None": "None<br>"
      },
      "defaultValue":"None"
    },
    { "name": "Disabled",
      "code": "die",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1st<br>",
        "2": "2nd<br>",
        "3": "3rd<br>"
      },
      "defaultValue":"3"
    }
  ]
}`;
