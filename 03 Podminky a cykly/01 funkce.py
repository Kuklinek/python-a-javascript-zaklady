def zdvojnasob(n):
    return 2 * n

print(zdvojnasob(24))

def popisCislo(n):
    if n > 1_000:
        return f"{n} je VELKÉ číslo!"

    if n % 2 == 0:
        return f"{n} je sudé číslo."
    
    return f"{n} je liché číslo."

print(popisCislo(24_002), popisCislo(2), popisCislo(115))
