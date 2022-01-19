from flask import Flask

app = Flask(__name__)

@app.route('/fights')
def get_fights():
    return {"raids": ["Asphodelos: The First Circle", "Asphodelos: The Second Circle", "Asphodelos: The Third Circle", "Asphodelos: The Fourth Circle", "Asphodelos: The First Circle (Savage)", "Asphodelos: The Second Circle (Savage)", "Asphodelos: The Third Circle (Savage)", "Asphodelos: The Fourth Circle (Savage)"]}
