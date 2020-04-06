const pokemon= [
    {
      "height": 10,
      "weight": 130,
      "id": 2,
      "name": "ivysaur",
      "abilities": ["overgrow", "chlorophyll"],
      "moves": [],
      "stats": [
        {
          "value": 80,
          "name": "special-defense"
        },
        {
          "value": 80,
          "name": "special-attack"
        },
        {
          "value": 63,
          "name": "defense"
        },
        {
          "value": 62,
          "name": "attack"
        },
        {
          "value": 60,
          "name": "speed"
        },
        {
          "value": 60,
          "name": "hp"
        }
      ],
      "types": ["grass", "poison"],
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "back":
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
      }
    },
    {
      "height": 20,
      "weight": 1000,
      "id": 3,
      "name": "venusaur",
      "abilities": ["overgrow", "chlorophyll"],
      "moves": [],
      "stats": [
        {
          "value": 100,
          "name": "special-defense"
        },
        {
          "value": 100,
          "name": "special-attack"
        },
        {
          "value": 83,
          "name": "defense"
        },
        {
          "value": 82,
          "name": "attack"
        },
        {
          "value": 80,
          "name": "speed"
        },
        {
          "value": 80,
          "name": "hp"
        }
      ],
      "types": ["grass", "poison"],
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "back":
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
      }
    },
    {
      "height": 6,
      "weight": 85,
      "id": 5,
      "name": "charmander",
      "abilities": ["blaze", "solar-power"],
      "moves": [
        "mega-punch",
        "scratch",
        "mega-kick",
        "ember",
        "submission",
        "counter",
        "seismic-toss",
        "dragon-rage",
        "fire-spin",
        "rage"
      ],
      "stats": [
        {
          "value": 65,
          "name": "speed"
        },
        {
          "value": 60,
          "name": "special-attack"
        },
        {
          "value": 52,
          "name": "attack"
        },
        {
          "value": 50,
          "name": "special-defense"
        },
        {
          "value": 43,
          "name": "defense"
        },
        {
          "value": 39,
          "name": "hp"
        }
      ],
      "types": ["fire"],
      "sprites": {
        "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "back":
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
      }
    }]
// const search = '';
// const regex = new RegExp(`\\b${search}.*`, 'g')
// const a = pokemon.filter(p => p.name.match(regex));
// console.log(a);



// var data = [
//   {a:1,b:5,c:9},
//   {a:2,b:6,c:10},
//   {a:3,b:7,c:11},
//   {a:4,b:8,c:12}
// ];
          
// let modified = data.map(obj => ({a: obj.a, b: obj.b}))

// console.log(modified);

// ======================


<fieldset className="form-group" disabled={this.props.isShowingDetails === false ? false : true }>
                <legend>Sort By</legend>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sortedBy" id="sortBy1" value="firstName" checked={this.props.sortBy === 'firstName'} onChange={(e) => this.props.handleSort(e.target.value)}/>
                        First Name
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="sortedBy" id="sortBy2" value="age" checked={this.props.sortBy === 'age'} onChange={(e) => this.props.handleSort(e.target.value)}/>
                        Age
                    </label>
                </div>
            </fieldset>