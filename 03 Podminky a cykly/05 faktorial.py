from functools import reduce


def fact1(n):  # klasika
    a = 1
    for i in range(n):
        a *= i + 1
    return a


print(fact1(30))


def fact2(n):  # rekurze
    if n == 0:
        return 1
    return n * fact2(n - 1)


def fact3(n):  # reduce
    r = [i + 1 for i in range(n)]
    return reduce(lambda a, b: a * b, r)


print(fact3(10))


def factory():  # generátor
    a = 1
    i = 1
    while True:
        yield a
        a *= i
        i += 1
