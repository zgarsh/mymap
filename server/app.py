# coding=utf-8
from flask import Flask, jsonify
app = Flask(__name__)

data = {
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Last Rites",
          "description": "Fun bar with flaming drinks",
          "category": "drink",
          "emoji": "💀",
          "secondaryEmoji": "🍹🔥"
        },
        "geometry": {
          "coordinates": [
            -122.429447,
            37.767827
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hi Tops",
          "description": "Creme de la creme. NACHOOOOS",
          "category": "drink",
          "emoji": "🏅",
          "secondaryEmoji": "🍺"
        },
        "geometry": {
          "coordinates": [
            -122.431822,
            37.764998
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Butter",
          "description": "Fanta-rimmed mason jars with grape soda cocktails inside, jello shots, spaghettios",
          "category": "drink",
          "emoji": "🥤",
          "secondaryEmoji": "🚜🥫"
        },
        "geometry": {
          "coordinates": [
            -122.413296,
            37.771089
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Willkommen",
          "description": "Biergarten. Get pretzel sticks.",
          "category": "drink",
          "emoji": "🇩🇪",
          "secondaryEmoji": "🍻🌿"
        },
        "geometry": {
          "coordinates": [
            -122.430803,
            37.766447
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "name": "The Willows",
          "description": "Nonpretentious. Good bar food.",
          "category": "drink",
          "emoji": "🥃",
          "secondaryEmoji": "🍔🍺"
        },
        "geometry": {
          "coordinates": [
            -122.415119,
            37.771102
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Flick's",
          "description": "Cheap drinks and unbeatable jams. Just make sure it's not karaoke night",
          "category": "drink",
          "emoji": "🌈",
          "secondaryEmoji": "🍹🔥"
        },
        "geometry": {
          "coordinates": [
            -117.154753,
            32.748225
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Saru Sushi",
          "description": "Get the spicy tuna seaweed things and the popcorn roll",
          "category": "eat",
          "emoji": "🐟",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.428806, 37.751763 ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Flores",
          "description": "Huarache, mole, cornmeal pancakes. Haven't had anything bad here.",
          "category": "eat",
          "emoji": "🥑",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.432574, 37.797602],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Orphan Andy's",
          "description": "Always open, but it's the most fun between 10pm and 2 am",
          "category": "eat",
          "emoji": "🥞",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.434908, 37.762397],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "name": "In n out",
          "description": "The only reason I know of to venture into fisherman's wharf",
          "category": "eat",
          "emoji": "🍔",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [-122.418558, 37.807737 ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hard water",
          "description": "My favorite fancy bar",
          "category": "drink",
          "emoji": "🥃",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.395572, 37.797624 ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Equator Coffee",
          "description": "Small but in a great setting. Go on a nice day and walk around fort mason",
          "category": "work",
          "emoji": "☕️",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.431888, 37.805311 ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Tartine Sunset",
          "description": "Not as pretentious as the manufactory",
          "category": "eat",
          "emoji": "🍞",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.466172, 37.765382 ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "name": "SF Botanical Garden",
          "description": "Free for SF residents! Like Dolores except peaceful",
          "category": "outdoors",
          "emoji": "🌳",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.467052, 37.767078 ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mission Bowling Club",
          "description": "Adults only bowling <3",
          "category": "play",
          "emoji": "🎳",
          "secondaryEmoji": ""
        },
        "geometry": {
          "coordinates": [ -122.416707, 37.763751 ],
          "type": "Point"
        },
        "id": 15
      }


    ],
    "type": "FeatureCollection"
  }
  

@app.route('/')
def hello_world():
    return jsonify(data)