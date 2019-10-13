import math
import pandas as pd
import json

pokedata = pd.read_csv("./pokemon.csv")
df_cols = ['Name', 'Type 1', 'Type 2', 'HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed', 'Generation', 'Legendary']
dict_keys = ['name', 'type1', 'type2', 'hp', 'attack', 'defense', 'spatk', 'spdef', 'speed', 'gen', 'legendary']
data = {}
count = 0

# Used to store dataframe row of Pokemon stats into dictionary object
def row_to_dict(df_row):
    # Helper function to avoid repetition with value checking
    def row_to_dict_helper(h_dict, h_dict_key, h_row, h_row_col):
        try:
            colIsNan = math.isnan(h_row[h_row_col])
        except:
            colIsNan = False
        
        # Only add to dictionary if value is not NaN
        if not colIsNan:
            h_dict[h_dict_key] = h_row[h_row_col]

        return h_dict

    _dict = {}
    for i in range(len(df_cols)):
        _dict = row_to_dict_helper(_dict, dict_keys[i], df_row, df_cols[i])

    return _dict

# Turn dataframe rows into JSON object
for idx, row in pokedata.iterrows():

    # Don't iterate on mega Pokemon, just add them as mega version of same pokemon
    if 'Mega ' not in row['Name']:
        count += 1
        data_key = str.zfill(str(count), 3)  # Add leading zeros to match file names
        data[data_key] = row_to_dict(row)

    else:
        data_key = str.zfill(str(count), 3)
        data[data_key][row['Name']] = row_to_dict(row)

# Export data to .json file
with open('PokeData.json', 'w') as outfile:
    json.dump(data, outfile)