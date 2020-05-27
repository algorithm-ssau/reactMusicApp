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

