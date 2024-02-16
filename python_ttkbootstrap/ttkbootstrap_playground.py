from tkinter import *
from ttkbootstrap.constants import *
import ttkbootstrap as tb

root = tb.Window(themename='solar')

root.title('TTK Bootstrap')
root.geometry('500x360')

counter = 0
def changer():
    global counter
    counter += 1
    if counter % 2 == 0:
        label.config(text='Hello World')
    else:
        label.config(text='Goodbye World')

# Label
label = tb.Label(text='Hello World', font=('Helvetica', 28), bootstyle='danger')
label.pack(pady=50)

# Button
button = tb.Button(text='Click here', bootstyle='primary, outline', command=changer)
button.pack(pady=75)


root.mainloop()