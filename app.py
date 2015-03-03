import os
from flask import Flask, render_template
from flask.ext.classy import FlaskView

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")


class AppView(FlaskView):
    route_base = '/'

    def index(self):
        return render_template('index.html')

AppView.register(app)

if __name__ == '__main__':
    app.debug = True
    app.run()
