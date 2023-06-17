def ntyFib(n):
    a = 0
    b = 1

    for i in range(n):
        (a, b) = (b, a + b)

    return a


def fib():
    a = 0
    b = 1

    while True:
        yield a
        (a, b) = (b, a + b)


for n in fib():
    print(f"Další číslo je: {n}")
    if n > 100:
        break

iterator = fib()
print(iterator.__next__())
print(iterator.__next__())
print(iterator.__next__())
print(iterator.__next__())
print(iterator.__next__())
print(iterator.__next__())
