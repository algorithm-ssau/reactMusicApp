from fastapi import FastAPI
from starlette.exceptions import HTTPException
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY

from .helpers.errors import http_422_error_handler, http_base_error_handler
from .db.utils import close_connection, open_connection
from .rout import api


APP = FastAPI()

APP.add_event_handler("startup", open_connection)
APP.add_event_handler("shutdown", close_connection)

APP.add_exception_handler(

    HTTPException,
    http_base_error_handler

)
APP.add_exception_handler(

    HTTP_422_UNPROCESSABLE_ENTITY,
    http_422_error_handler

)

APP.include_router(

    api.ROUTER,
    prefix='',
    tags=['api']

)

def get_user(request):
    """
    :param request:
    :return:
    """
    data = request.json
    user = data['user']
    password = data['pass']
    users = get_db(get_connection())['users']
    found = users.find({'username': user})
    for user in found:
        if user['password_hash'] == password:
            return user

@api.ROUTER('/registration', methods=['POST'])
def register():
    print(request)
    data = request.json
    user = data['user']
    password = data['pass']
    bd = get_db(get_connection())
    collection = bd.get_collection('users')
    collection.insert({'username': user, 'password_hash': password})
    pattern = userTokenPassPattern
    pattern['username'] = user
    pattern['password_hash'] = password
    pattern['time'] = get_current_time()
    token = jwt.encode(pattern, secretKey, algorithm='HS256')
    resp = Response('success')
    resp.headers['Authorization'] = 'Bearer ' + (str(token, 'utf-8'))
    resp.headers.add("Access-Control-Allow-Origin", "*")
    resp.headers.add('Access-Control-Allow-Headers', "*")
    resp.headers.add('Access-Control-Allow-Methods', "*")
    return resp

@api.ROUTER('/login', methods=['POST'])
def login():
    """
    Функция авторизации
    :return: Response, ответ на попытку авторизации
    """
    print(request)
    if (auth_without_time_check(request)):
        user = get_user(request)
        pattern = userTokenPassPattern
        pattern['username'] = user['username']
        pattern['password_hash'] = user['password_hash']
        pattern['time'] = get_current_time()
        token = jwt.encode(pattern, secretKey, algorithm='HS256')
        resp = jsonify({
            'user': {
                'username': user['username']
            }
        })
        resp.headers.add('Authorization', 'Bearer ' + (str(token, 'utf-8')))
        resp.headers.add("Access-Control-Allow-Origin", "*")
        resp.headers.add('Access-Control-Allow-Headers', "*")
        resp.headers.add('Access-Control-Allow-Methods', "*")
        return resp
    abort(401)
