import pandas as pd
from datetime import date , timedelta



def bed_count_each_state():
    df = pd.read_csv('scripts_driver\hospitals_bed_count.csv')
    label = df['States/UTs'].values.tolist()
    data_1 = df['Total hospitals Number of Beds'].values.tolist()
    df_Total_Govt_hospitals = df.sort_values(by='Total Number of Hospitals', ascending=False)
    data_2 = df_Total_Govt_hospitals['Total Number of Hospitals'].values.tolist()
    return label, data_1, data_2

def fdi():
    data = pd.read_csv('scripts_driver\data.csv')
    label = data['time'].tolist()
    data_3 = data['MEDICAL_AND_SURGICAL_APPLIANCES'].values.tolist()
    data_4 = data['DRUGS_PHARMACEUTICALS'].values.tolist()
    data_5 = data['HOSPITAL_DIAGNOSTIC_CENTRES'].values.tolist()
    return label, data_3, data_4, data_5

def covid_data():
    df = pd.read_csv('https://raw.githubusercontent.com/datasets/covid-19/main/data/countries-aggregated.csv')
    today = date.today()
    day = timedelta(days=2)
    today = today - day
    d4 = today.strftime("%Y-%m-%d")
    data = df[(df['Country'] == 'India') & (df['Date'] == '2021-09-25')]
    return data