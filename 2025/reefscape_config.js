var config_data = `
{
  "enable_google_sheets": "true",
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025 Pasadena",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Algae Removed",
      "code": "aar",
      "type": "counter"
    },
    { "name": "Top Coral",
      "code": "atc",
      "type": "counter"
    },
    { "name": "Middle Coral",
      "code": "amc",
      "type": "counter"
    },
    { "name": "Low Coral",
      "code": "alc",
      "type": "counter"
    },
    { "name": "Bottom Coral",
      "code": "abc",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Algae Netted",
      "code": "tan",
      "type": "counter"
    },
    { "name": "Algae Processed",
      "code": "tap",
      "type": "counter"
    },
    { "name": "Top Algae",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Middle Algae",
      "code": "tma",
      "type": "counter"
    },
    { "name": "Low Algae",
      "code": "tla",
      "type": "counter"
    },
    { "name": "Top Coral",
      "code": "ttc",
      "type": "counter"
    },
    { "name": "Middle Coral",
      "code": "tmc",
      "type": "counter"
    },
    { "name": "Low Coral",
      "code": "tlc",
      "type": "counter"
    },
    { "name": "Bottom Coral",
      "code": "tbc",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Deep or Shallow Cage?",
      "code": "dsc",
      "type": "radio",
      "choices": {
        "d": "Deep<br>",
        "s": "Shallow"
      },
      "defaultValue": "s"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "h": "Hanging<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Algae (>2)",
      "code": "da",
      "type": "bool"
    },
    { "name": "Dropped Coral (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "defaultValue": "none",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
