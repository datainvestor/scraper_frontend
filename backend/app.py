from flask import Flask, jsonify
from scraper import parse_and_get_df
from flask_cors import CORS

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)


CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/parse', methods=['GET'])
def show_episodes():
    return jsonify({
        'status': 'success',
        'episodes': parse_and_get_df('tt0903747')
    })


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
