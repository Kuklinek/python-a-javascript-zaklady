arr = [1, 1, 2, 3, 5, 8, 13, 21]

for n in arr:
    print(n)

arr.pop() # odeber poslední hodnotu
arr.push(420) # přidej novou hodnotu
arr[0] = -2 # změň první hodnotu

print(", ".join(arr))

sudyArr = [n for n in arr if n % 2 != 0]
print(", ".join(sudyArr))

dalsiArr = [
    f"Další číslo je {n / 2}".upper()
    for n in sudyArr
]

arr2 = [-1, 1, 8, 4]
print(f"Array je: {arr2}")
print(
    "Jsou všechny hodnoty v array kladné?" +
    all(n > 0 for n in arr2)
)
print(
    "Jsou všechny hodnoty v array větší než -10?" +
    all(n > 10 for n in arr2)
)

arr3 = [2, 3, 4]
print([1, *arr3, 5]) # [1, 2, 3, 4, 5]
