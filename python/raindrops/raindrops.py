def convert(number):
    res = ""

    sounds = {
        3: 'Pling',
        5: 'Plang',
        7: 'Plong'
    }

    for divisor in sounds.keys():
        if number % divisor == 0:
            res = res + sounds[divisor]

    if len(res) == 0:
        res = str(number)

    return res
