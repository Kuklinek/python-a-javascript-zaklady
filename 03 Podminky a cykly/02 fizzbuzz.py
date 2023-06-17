def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return "fizzbuzz"
    if n % 3 == 0:
        return "fizz"
    if n % 5 == 0:
        return "buzz"
    return n


for i in range(21):
    print(fizzbuzz(i))

i = 0
while i <= 20:
    print(fizzbuzz(i))
    i += 1
