import time


def hello(event, context):
    print("hi")
    time.sleep(4)
    print("first update")
    print("second update")
    return "hello world"
