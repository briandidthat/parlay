class InvalidUsage(Exception):
    """ 
    Custom exception clas that will receive the error message, status_code, and payload.
    - to_dict() will return dictionary representation of error object.
    """
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message 
        rv['status_code'] = self.status_code
        return rv