def tovarnaNaScitaciFunkce(a: int):
    def pricti(b: int):
        return a + b
    return pricti


prictiDva = tovarnaNaScitaciFunkce(2)
print(prictiDva(8))


def tovarnaNaNasobiciFunkce(a):
    return lambda b: a * b


vynasobPulkou = tovarnaNaNasobiciFunkce(0.5)
print(vynasobPulkou(8))


def tovarnaNaFunkceProdukujiciId():
    currentId = 0

    def vratNoveId():
        nonlocal currentId
        currentId += 1
        return currentId
    return vratNoveId


generujId = tovarnaNaFunkceProdukujiciId()
print(generujId())
print(generujId())
print(generujId())
print(generujId())
print(generujId())
