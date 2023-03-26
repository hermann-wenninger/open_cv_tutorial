# %%
import pandas as pd

melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'
melbourne_data = pd.read_csv(melbourne_file_path) 
melbourne_data.columns

# %%
y = melbourne_data.Price

# %%
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']

# %%
X = melbourne_data[melbourne_features]

# %%
X.describe()

# %%
X.head()

# %%
from sklearn.tree import DecisionTreeRegressor

# %%
melbourne_model = DecisionTreeRegressor(random_state=1)
melbourne_model.fit(X, y)

# %%
print("Making predictions for the following 5 houses:")
print(X.head())
print("The predictions are")
print(melbourne_model.predict(X.head()))

# %%
from kaggle.api.kaggle_api_extended import KaggleApi

api = KaggleApi('copy and paste kaggle.json content here')
print(api)
print(api.authenticate())
files = api.competition_download_files("two-sigma-financial-news")


