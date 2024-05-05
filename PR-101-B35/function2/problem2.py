# Write two functions named celsiusToFahrenheit and fahrenheitToCelsius to convert between Celsius and Fahrenheit.

# Use the functions to convert a given temperature.

def cel_to_fah(celsius):
    return (celsius * 9/5) + 32

def fah_to_cel(fahrenheit):
    return (fahrenheit - 32) * 5/9


cel_temp = 36
fahToTemp = cel_to_fah(cel_temp)
print(f"{cel_temp} degrees Celsius is equal to {fahToTemp:.2f} degrees Fahrenheit.")

fahrenToTemp = 79
cel_temp = fah_to_cel(fahrenToTemp)
print(f"{fahrenToTemp} degrees Fahrenheit is equal to {cel_temp:.2f} degrees Celsius.")
