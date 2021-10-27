from flask import Flask, render_template, request
from scripts_driver.load_data import *
import pickle

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

@app.route('/predict')
def aboutpage():
    return render_template('tables.html')

@app.route('/result', methods=['GET','POST'])
def result():
    if request.method == 'POST':
        data = request.form['time']
        n = int(data[-1]) - 2
        model_fit = pickle.load(open('model_h.pkl','rb'))
        yhat = model_fit.predict(start = 0, end = 2)
        model_fitm = pickle.load(open('model_m.pkl','rb'))
        ypred = model_fitm.predict(start = 0, end = 2)
        model_fitd = pickle.load(open('model_d.pkl','rb'))
        ypre = model_fitd.predict(start = 0, end = 2)
    return render_template('tables.html', anchor = "box-view", yhat=yhat, ypre=ypre, ypred=ypred, n = n)
@app.route('/contact')
def contactpage():
    return render_template('user.html')

if __name__ == '__main__':
    app.run(debug=True)