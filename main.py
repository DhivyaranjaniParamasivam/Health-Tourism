from flask import Flask, render_template
from scripts_driver.load_data import *

app = Flask(__name__)

@app.route('/')
def dash():
    return render_template('dashboard.html')

@app.route('/analysis-on-indian-hospitals')
def descriptive():
    label , data_1, data_2 = bed_count_each_state()
    index, data_3, data_4, data_5 = fdi()
    df = covid_data()
    return render_template('icons.html', label=label, data_1=data_1, data_2=data_2,index=index, data_3=data_3, data_5=data_5, data_4=data_4, df=df)

@app.route('/about')
def aboutpage():
    return render_template('tables.html')

@app.route('/contact')
def contactpage():
    return render_template('user.html')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8000)